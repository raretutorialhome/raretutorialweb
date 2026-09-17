import { escapeHtml } from "@/lib/validation/contactForm";
import { sendEmail } from "@/lib/email/sendEmail";
import { contactConfig } from "@/config/contact";
import { siteConfig } from "@/config/site";
import type { EnquiryPayload } from "@/lib/email/confirmationToken";

/** Builds and sends the actual "someone enquired" notification to RARE. Used
 * both when no email was given (sent immediately) and after a visitor
 * confirms via the double opt-in link. */
export async function sendEnquiryNotification(clean: Omit<EnquiryPayload, "submittedAt">) {
  const recipient = process.env.CONTACT_FORM_RECIPIENT_EMAIL || contactConfig.email.address;
  // The From address must always be our own configured/verified sender —
  // never anything derived from user input — or the mail provider will (and
  // should) reject it, and it would otherwise let a visitor spoof our domain.
  const sender = process.env.EMAIL_FROM || `${siteConfig.name} Website <no-reply@${new URL(siteConfig.url).hostname}>`;
  const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata", dateStyle: "medium", timeStyle: "short" });

  const textBody = [
    `New enquiry from the ${siteConfig.name} website`,
    "",
    `Parent/Guardian: ${clean.parentName}`,
    `Student: ${clean.studentName}`,
    `Class: ${clean.className}`,
    clean.school ? `School: ${clean.school}` : null,
    `Phone: ${clean.phone}`,
    clean.email ? `Email: ${clean.email}` : null,
    `Course: ${clean.course}`,
    clean.mode ? `Preferred mode: ${clean.mode}` : null,
    clean.message ? `Message: ${clean.message}` : null,
    "",
    `Submitted: ${timestamp} (IST)`,
    `Source: ${siteConfig.url}/contact`,
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `<div style="font-family:sans-serif;font-size:14px;line-height:1.6;color:#1E2A33">
    <p><strong>New enquiry from the ${escapeHtml(siteConfig.name)} website</strong></p>
    <p>
      <strong>Parent/Guardian:</strong> ${escapeHtml(clean.parentName)}<br/>
      <strong>Student:</strong> ${escapeHtml(clean.studentName)}<br/>
      <strong>Class:</strong> ${escapeHtml(clean.className)}<br/>
      ${clean.school ? `<strong>School:</strong> ${escapeHtml(clean.school)}<br/>` : ""}
      <strong>Phone:</strong> ${escapeHtml(clean.phone)}<br/>
      ${clean.email ? `<strong>Email:</strong> ${escapeHtml(clean.email)}<br/>` : ""}
      <strong>Course:</strong> ${escapeHtml(clean.course)}<br/>
      ${clean.mode ? `<strong>Preferred mode:</strong> ${escapeHtml(clean.mode)}<br/>` : ""}
    </p>
    ${clean.message ? `<p><strong>Message:</strong><br/>${escapeHtml(clean.message).replace(/\n/g, "<br/>")}</p>` : ""}
    <p style="color:#8A98A3;font-size:12px">Submitted ${escapeHtml(timestamp)} (IST) · Source: ${escapeHtml(siteConfig.url)}/contact${
      clean.email ? " · Confirmed by visitor" : ""
    }</p>
  </div>`;

  return sendEmail({
    to: recipient,
    from: sender,
    replyTo: clean.email || undefined,
    subject: `New enquiry: ${clean.studentName} — ${clean.course}`,
    text: textBody,
    html: htmlBody,
  });
}

/** Sends the "please confirm your enquiry" email to the visitor themselves —
 * the actual notification to RARE only goes out once they click through
 * (see app/api/contact/confirm/route.ts). This is what filters out bot
 * submissions that slipped past the other layers and casual/uninterested
 * fills: a real, interested visitor confirms; junk doesn't. */
export async function sendConfirmationRequest(clean: Omit<EnquiryPayload, "submittedAt">, confirmUrl: string) {
  const sender = process.env.EMAIL_FROM || `${siteConfig.name} <no-reply@${new URL(siteConfig.url).hostname}>`;

  const textBody = [
    `Hi ${clean.parentName},`,
    "",
    `Thanks for your interest in ${siteConfig.name}. To make sure enquiries reach us from real, interested families (and not spam), please confirm your enquiry by opening this link:`,
    "",
    confirmUrl,
    "",
    "If you didn't submit this enquiry, you can safely ignore this email — nothing further will happen unless you click the link above.",
    "",
    `This link expires in 48 hours.`,
    "",
    `— ${siteConfig.name}`,
  ].join("\n");

  const htmlBody = `<div style="font-family:sans-serif;font-size:14px;line-height:1.6;color:#1E2A33">
    <p>Hi ${escapeHtml(clean.parentName)},</p>
    <p>Thanks for your interest in ${escapeHtml(siteConfig.name)}. To make sure enquiries reach us from real, interested families (and not spam), please confirm your enquiry:</p>
    <p style="margin:24px 0">
      <a href="${confirmUrl}" style="background:#134A78;color:#ffffff;padding:12px 24px;border-radius:999px;text-decoration:none;font-weight:600;display:inline-block">Confirm My Enquiry</a>
    </p>
    <p style="color:#8A98A3;font-size:12px">If you didn't submit this enquiry, you can safely ignore this email — nothing further will happen unless you click the link above. This link expires in 48 hours.</p>
    <p>— ${escapeHtml(siteConfig.name)}</p>
  </div>`;

  return sendEmail({
    to: clean.email,
    from: sender,
    subject: `Please confirm your enquiry to ${siteConfig.name}`,
    text: textBody,
    html: htmlBody,
  });
}
