import { MessageCircle, Phone } from "lucide-react";
import { siteConfig, getWhatsAppLink, getPhoneLink } from "@/data/site-config";
import Button from "@/components/ui/Button";

export default function CTASection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-dark py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(242,145,32,0.08),transparent_60%)]" />

      <div className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
        <h2 className="font-serif text-[28px] font-bold text-white md:text-[40px]">
          {siteConfig.ctaFinal.title}
        </h2>
        <p className="mt-4 text-lg text-white/70">
          {siteConfig.ctaFinal.subtitle}
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            href={getWhatsAppLink()}
            variant="primary"
            external
            icon={<MessageCircle size={18} />}
          >
            {siteConfig.ctaFinal.ctaPrimary}
          </Button>
          <Button
            href={getPhoneLink()}
            variant="outline"
            external
            icon={<Phone size={18} />}
          >
            {siteConfig.ctaFinal.ctaSecondary}
          </Button>
        </div>
      </div>
    </section>
  );
}
