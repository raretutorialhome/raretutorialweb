"use client";

import { useRef, useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle } from "lucide-react";
import { contactFormFields } from "@/content/contact";
import { courses } from "@/content/courses";
import {
  validateContactForm,
  FIELD_MAX_LENGTHS,
  type ContactFormErrors,
  type ContactFormValues,
} from "@/lib/validation/contactForm";
import { trackEvent } from "@/lib/analytics/trackEvent";
import { cn } from "@/lib/utils/cn";
import { Button } from "@/components/buttons/Button";
import { Turnstile } from "@/components/forms/Turnstile";

const initialValues: ContactFormValues = {
  parentName: "",
  studentName: "",
  className: "",
  school: "",
  phone: "",
  email: "",
  course: "",
  mode: "",
  message: "",
};

const inputClasses =
  "w-full rounded-[10px] border-[1.5px] px-3.5 py-3 text-[15px] text-ink focus-ring focus:border-primary";

const turnstileConfigured = Boolean(process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);

export function ContactForm() {
  const searchParams = useSearchParams();
  const preselectedCourseSlug = searchParams.get("course");
  const preselectedCourse = courses.find((c) => c.slug === preselectedCourseSlug);

  const [values, setValues] = useState<ContactFormValues>(() => ({
    ...initialValues,
    course: preselectedCourse?.formOption ?? "",
  }));
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [confirmationRequired, setConfirmationRequired] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | undefined>(undefined);
  // Renders as an off-screen field named to look plausible to a generic bot
  // form-filler. Real users never see or fill it; the server drops any
  // submission where it's non-empty (see app/api/contact/route.ts).
  const honeypotRef = useRef<HTMLInputElement>(null);
  // Captured once, at mount — lets the server flag submissions completed
  // implausibly fast (see lib/rate-limit usage in the API route).
  const formRenderedAtRef = useRef(Date.now());

  function handleChange(field: keyof ContactFormValues) {
    return (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      trackEvent("contact_form_error");
      return;
    }
    if (turnstileConfigured && !turnstileToken) {
      setErrors({});
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          website: honeypotRef.current?.value ?? "",
          formRenderedAt: formRenderedAtRef.current,
          turnstileToken,
        }),
      });
      if (!res.ok) throw new Error("Request failed");
      const data = (await res.json()) as { ok: boolean; confirmationRequired?: boolean };
      setConfirmationRequired(Boolean(data.confirmationRequired));
      setStatus("success");
      trackEvent("contact_form_submit", { course: values.course });
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="rounded-lg border border-surface-border bg-white p-11 text-center">
        <CheckCircle className="mx-auto h-11 w-11 text-primary" aria-hidden />
        {confirmationRequired ? (
          <>
            <h3 className="mb-2 mt-4 font-serif text-[22px] text-primary-dark">Almost There — Please Check Your Email</h3>
            <p className="text-[15.5px] text-ink-muted">
              We&apos;ve sent a confirmation link to your email address. Please click it to send your enquiry through
              to RARE Tutorial — this helps us make sure enquiries reach us from real, interested families.
            </p>
          </>
        ) : (
          <>
            <h3 className="mb-2 mt-4 font-serif text-[22px] text-primary-dark">Thank You!</h3>
            <p className="text-[15.5px] text-ink-muted">Your enquiry has been received. We&apos;ll get back to you shortly.</p>
          </>
        )}
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="grid gap-5 rounded-lg border border-surface-border bg-white p-6 [grid-template-columns:repeat(auto-fit,minmax(220px,1fr))] sm:p-9"
    >
      {/* Honeypot: visually and semantically hidden from real users/assistive tech. */}
      <div aria-hidden="true" className="absolute left-[-9999px] top-auto h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" ref={honeypotRef} />
      </div>

      <Field id="parentName" label="Parent/Guardian Name *" error={errors.parentName}>
        {(fieldProps) => (
          <input
            {...fieldProps}
            value={values.parentName}
            onChange={handleChange("parentName")}
            placeholder="Your name"
            maxLength={FIELD_MAX_LENGTHS.parentName}
            autoComplete="name"
            className={cn(inputClasses, errors.parentName ? "border-red-400" : "border-surface-border")}
          />
        )}
      </Field>
      <Field id="studentName" label="Student's Name *" error={errors.studentName}>
        {(fieldProps) => (
          <input
            {...fieldProps}
            value={values.studentName}
            onChange={handleChange("studentName")}
            placeholder="Student's name"
            maxLength={FIELD_MAX_LENGTHS.studentName}
            className={cn(inputClasses, errors.studentName ? "border-red-400" : "border-surface-border")}
          />
        )}
      </Field>
      <Field id="className" label="Class *" error={errors.className}>
        {(fieldProps) => (
          <input
            {...fieldProps}
            value={values.className}
            onChange={handleChange("className")}
            placeholder="e.g. Class 8"
            maxLength={FIELD_MAX_LENGTHS.className}
            className={cn(inputClasses, errors.className ? "border-red-400" : "border-surface-border")}
          />
        )}
      </Field>
      <Field id="school" label="School (Optional)">
        {(fieldProps) => (
          <input
            {...fieldProps}
            value={values.school}
            onChange={handleChange("school")}
            placeholder="School name"
            maxLength={FIELD_MAX_LENGTHS.school}
            className={cn(inputClasses, "border-surface-border")}
          />
        )}
      </Field>
      <Field id="phone" label="Phone Number *" error={errors.phone}>
        {(fieldProps) => (
          <input
            {...fieldProps}
            value={values.phone}
            onChange={handleChange("phone")}
            placeholder="+91 XXXXX XXXXX"
            maxLength={FIELD_MAX_LENGTHS.phone}
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            className={cn(inputClasses, errors.phone ? "border-red-400" : "border-surface-border")}
          />
        )}
      </Field>
      <Field id="email" label="Email (Optional)" error={errors.email}>
        {(fieldProps) => (
          <input
            {...fieldProps}
            value={values.email}
            onChange={handleChange("email")}
            placeholder="you@example.com"
            maxLength={FIELD_MAX_LENGTHS.email}
            type="email"
            autoComplete="email"
            inputMode="email"
            className={cn(inputClasses, errors.email ? "border-red-400" : "border-surface-border")}
          />
        )}
      </Field>
      <Field id="course" label="Course Interested In *" error={errors.course}>
        {(fieldProps) => (
          <select
            {...fieldProps}
            value={values.course}
            onChange={handleChange("course")}
            className={cn(inputClasses, "bg-white", errors.course ? "border-red-400" : "border-surface-border")}
          >
            <option value="">Select a course</option>
            {contactFormFields.courseOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
      </Field>
      <Field id="mode" label="Preferred Learning Mode">
        {(fieldProps) => (
          <select
            {...fieldProps}
            value={values.mode}
            onChange={handleChange("mode")}
            className={cn(inputClasses, "border-surface-border bg-white")}
          >
            <option value="">Select a mode</option>
            {contactFormFields.modeOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        )}
      </Field>
      <div className="col-span-full">
        <Field id="message" label="Message" error={errors.message}>
          {(fieldProps) => (
            <textarea
              {...fieldProps}
              value={values.message}
              onChange={handleChange("message")}
              placeholder="Tell us more about your learning needs"
              rows={4}
              maxLength={FIELD_MAX_LENGTHS.message}
              className={cn(inputClasses, "resize-y border-surface-border")}
            />
          )}
        </Field>
      </div>

      {turnstileConfigured && (
        <div className="col-span-full">
          <Turnstile onToken={setTurnstileToken} />
        </div>
      )}

      <div className="col-span-full">
        {status === "error" && (
          <p role="alert" className="mb-3 text-[14px] text-red-600">
            {turnstileConfigured && !turnstileToken
              ? "Please complete the verification check above before submitting."
              : "Something went wrong sending your enquiry. Please try WhatsApp or call us instead."}
          </p>
        )}
        <Button
          type="submit"
          size="lg"
          disabled={status === "submitting"}
          className="w-full justify-center disabled:opacity-70"
        >
          {status === "submitting" ? "Sending…" : "Submit Enquiry"}
        </Button>
        <p className="mt-3 text-center text-[12.5px] text-ink-muted">
          If you enter an email address, we&apos;ll send a quick confirmation link there before your enquiry reaches
          us — this keeps spam out of our inbox.
        </p>
      </div>
    </form>
  );
}

/**
 * Renders the label and error message, and hands the input its `id`,
 * `name` and (when there's an error) `aria-invalid`/`aria-describedby` via
 * a render-prop — every field in this form has a real, programmatically
 * associated label rather than relying on visual proximity alone.
 */
function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: (fieldProps: {
    id: string;
    name: string;
    "aria-invalid"?: true;
    "aria-describedby"?: string;
  }) => ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[13.5px] font-semibold text-primary-dark">
        {label}
      </label>
      {children({
        id,
        name: id,
        ...(error ? { "aria-invalid": true, "aria-describedby": errorId } : {}),
      })}
      {error && (
        <p id={errorId} className="mt-1.5 text-[13px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
