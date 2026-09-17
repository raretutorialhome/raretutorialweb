"use client";

import { MessageCircle } from "lucide-react";
import { contactConfig } from "@/config/contact";
import { trackEvent } from "@/lib/analytics/trackEvent";

export function WhatsAppFab() {
  return (
    <a
      href={contactConfig.whatsapp.href()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent("whatsapp_click", { location: "fab" })}
      aria-label="Chat with RARE on WhatsApp"
      className="focus-ring fixed bottom-6 right-6 z-[150] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-primary shadow-[0_10px_28px_rgba(20,40,60,0.3)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:scale-105 hover:bg-primary-dark hover:shadow-[0_14px_32px_rgba(20,40,60,0.38)] active:scale-95"
    >
      <MessageCircle className="h-[26px] w-[26px] text-white" aria-hidden />
    </a>
  );
}
