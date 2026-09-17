/**
 * Centralised contact details. Update here only — every component reads
 * from this file (or its NEXT_PUBLIC_* env override) instead of hard-coding
 * phone numbers, WhatsApp links or the address anywhere else.
 */
const phonePrimary = process.env.NEXT_PUBLIC_CONTACT_PHONE_PRIMARY ?? "+919830228998";
const phoneSecondary = process.env.NEXT_PUBLIC_CONTACT_PHONE_SECONDARY ?? "+918335051385";
const whatsapp = process.env.NEXT_PUBLIC_CONTACT_WHATSAPP ?? "+919830228998";
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "raretutorialhome@gmail.com";

const defaultWhatsappMessage = "Hello, I'd like to know more about the courses offered at RARE.";

export const contactConfig = {
  address: {
    line1: "RARE Tutorial",
    line2: "Ballygunge, Kolkata",
    note: "Please call or WhatsApp before visiting.",
  },
  phones: {
    primary: phonePrimary,
    secondary: phoneSecondary,
    display: "98302 28998, 83350 51385",
  },
  whatsapp: {
    number: whatsapp,
    display: "98302 28998",
    href: (message: string = defaultWhatsappMessage) =>
      `https://wa.me/${whatsapp.replace(/[^\d]/g, "")}?text=${encodeURIComponent(message)}`,
  },
  email: {
    address: email,
    href: `mailto:${email}`,
  },
  officeHours: {
    days: "Monday – Saturday",
    hours: "11 am – 7 pm",
  },
  phoneHref: (number: string = phonePrimary) => `tel:${number}`,
  // Provided directly by RARE — I can't browse these platforms from here to
  // confirm they resolve, so please click-test each one after deploying.
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/share/1GCrfbV2ft/" },
    { name: "Instagram", href: "https://www.instagram.com/raretutorialhome?igsh=YnptaXoxamRlZ29q" },
    { name: "YouTube", href: "https://youtube.com/@raretutorial_official?si=cinBzfQk4Vfaw9fi" },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shiladitya-mukhopadhyay-537b5733a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
    { name: "X", href: "https://x.com/RareTutorial" },
  ],
} as const;
