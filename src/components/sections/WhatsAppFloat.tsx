import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/data/site-config";

export default function WhatsAppFloat() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatea con nosotros por WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 animate-[pulse-wa_2s_ease-in-out_infinite]"
    >
      <MessageCircle size={28} />
    </a>
  );
}
