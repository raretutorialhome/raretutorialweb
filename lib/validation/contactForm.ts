export type ContactFormValues = {
  parentName: string;
  studentName: string;
  className: string;
  school?: string;
  phone: string;
  email?: string;
  course: string;
  mode?: string;
  message?: string;
};

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const phonePattern = /^[+\d][\d\s-]{7,15}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Server-enforced max lengths — also used to size the `maxLength` attribute
 * on the client inputs, so the two never drift apart. */
export const FIELD_MAX_LENGTHS: Record<keyof ContactFormValues, number> = {
  parentName: 100,
  studentName: 100,
  className: 40,
  school: 120,
  phone: 20,
  email: 254,
  course: 60,
  mode: 20,
  message: 1000,
};

/**
 * Shared validation used by both the client (instant feedback) and the
 * server (source of truth — never trust client-side checks alone).
 */
export function validateContactForm(values: Partial<ContactFormValues>): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.parentName?.trim()) errors.parentName = "Please enter the parent or guardian's name.";
  else if (values.parentName.length > FIELD_MAX_LENGTHS.parentName) errors.parentName = "That name is too long.";

  if (!values.studentName?.trim()) errors.studentName = "Please enter the student's name.";
  else if (values.studentName.length > FIELD_MAX_LENGTHS.studentName) errors.studentName = "That name is too long.";

  if (!values.className?.trim()) errors.className = "Please enter the student's class.";
  else if (values.className.length > FIELD_MAX_LENGTHS.className) errors.className = "That's too long for a class name.";

  if (!values.phone?.trim()) {
    errors.phone = "Please enter a phone number.";
  } else if (!phonePattern.test(values.phone.trim())) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!values.course?.trim()) errors.course = "Please select a course.";

  if (values.email?.trim()) {
    if (values.email.length > FIELD_MAX_LENGTHS.email) errors.email = "That email address is too long.";
    else if (!emailPattern.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  }

  if (values.message && values.message.length > FIELD_MAX_LENGTHS.message) {
    errors.message = `Please keep your message under ${FIELD_MAX_LENGTHS.message} characters.`;
  }

  if (values.school && values.school.length > FIELD_MAX_LENGTHS.school) {
    errors.school = "That's too long for a school name.";
  }

  return errors;
}

export function isContactFormValid(values: Partial<ContactFormValues>): boolean {
  return Object.keys(validateContactForm(values)).length === 0;
}

/**
 * Strips anything HTML-like and control characters, and collapses repeated
 * whitespace. Applied server-side to every field before it's echoed back in
 * a notification email — never trust that client-side validation already
 * did this, since the API route can be called directly.
 */
export function sanitizeText(input: string, maxLength: number): string {
  return input
    .replace(/<[^>]*>/g, "") // strip tags
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "") // strip control chars (keep \t \n)
    .replace(/[ \t]+/g, " ")
    .trim()
    .slice(0, maxLength);
}

/** HTML-escapes a string for safe interpolation into an HTML email body. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
