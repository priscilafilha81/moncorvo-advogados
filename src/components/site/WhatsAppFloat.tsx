import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/contact";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 group"
    >
      <span className="absolute inset-0 rounded-full bg-[color:var(--whatsapp)] opacity-40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[color:var(--whatsapp)] text-white shadow-premium hover:scale-105 transition-transform">
        <MessageCircle className="w-6 h-6" />
      </span>
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-sm px-3 py-2 rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block shadow-soft">
        Fale conosco no WhatsApp
      </span>
    </a>
  );
}
