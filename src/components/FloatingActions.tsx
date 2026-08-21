import { Phone, MessageCircle } from "lucide-react";
import { HOTEL, telLink, waLink } from "@/lib/hotel";

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
      <a
        href={waLink(`Hello ${HOTEL.name}, I'd like to check room availability.`)}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
      <a
        href={telLink}
        aria-label="Call the hotel"
        className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-transform hover:scale-110"
      >
        <Phone className="size-5" />
      </a>
    </div>
  );
}
