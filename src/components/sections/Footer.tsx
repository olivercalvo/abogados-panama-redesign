import Image from "next/image";
import Link from "next/link";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/site-config";

export default function Footer() {
  return (
    <footer className="bg-dark pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
            <Image
              src="/logo-abogadospanama.png"
              alt={siteConfig.name}
              width={160}
              height={36}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {siteConfig.footer.description}
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Servicios
            </h4>
            <ul className="mt-4 space-y-2">
              {siteConfig.services.map((s) => (
                <li key={s.id}>
                  <Link
                    href="#servicios"
                    className="text-sm text-white/50 transition-all duration-300 hover:text-brand hover:translate-x-0.5"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Recursos */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Recursos
            </h4>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="#blog"
                  className="text-sm text-white/50 transition-all duration-300 hover:text-brand hover:translate-x-0.5"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-sm text-white/50 transition-all duration-300 hover:text-brand hover:translate-x-0.5"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Contacto
            </h4>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2 text-sm text-white/50">
                <MapPin size={16} className="mt-0.5 shrink-0 text-brand" />
                {siteConfig.contact.address}
              </li>
              <li>
                <a
                  href={getPhoneLink()}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-brand"
                >
                  <Phone size={16} className="shrink-0 text-brand" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-brand"
                >
                  <Mail size={16} className="shrink-0 text-brand" />
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/50 transition-colors hover:text-brand"
                >
                  <MessageCircle size={16} className="shrink-0 text-brand" />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador + copyright */}
        <div className="mt-16 border-t border-white/10 pt-8 text-center text-xs text-white/30">
          <p>{siteConfig.footer.copyright}</p>
          <p className="mt-1">
            <Link href="#" className="transition-colors hover:text-white/50">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
