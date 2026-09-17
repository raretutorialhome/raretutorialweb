import { NextResponse } from "next/server";
import { verifyConfirmationToken } from "@/lib/email/confirmationToken";
import { sendEnquiryNotification } from "@/lib/email/enquiryEmail";
import { routes } from "@/config/routes";
import { siteConfig } from "@/config/site";

/**
 * The visitor lands here by clicking the confirmation link emailed to them
 * (see sendConfirmationRequest in lib/email/enquiryEmail.ts). Only on a
 * valid, unexpired token does RARE actually get notified — this is the step
 * that turns "someone filled a form" into "a real, interested person wants
 * to hear back," which is what filters out both bots that slipped past
 * earlier layers and casual/accidental submissions.
 */
export async function GET(request: Request) {
  const url = new URL(request.url);
  const token = url.searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(`${siteConfig.url}${routes.contactConfirmInvalid}`);
  }

  const payload = verifyConfirmationToken(token);
  if (!payload) {
    return NextResponse.redirect(`${siteConfig.url}${routes.contactConfirmInvalid}`);
  }

  const { submittedAt: _submittedAt, ...clean } = payload;
  const result = await sendEnquiryNotification(clean);

  if (!result.ok) {
    return NextResponse.redirect(`${siteConfig.url}${routes.contactConfirmInvalid}`);
  }

  return NextResponse.redirect(`${siteConfig.url}${routes.contactConfirmed}`);
}
