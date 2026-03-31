import { MessageCircle, Star } from "lucide-react";
import { siteConfig, getWhatsAppLink } from "@/data/site-config";
import Button from "@/components/ui/Button";
import Overline from "@/components/ui/Overline";
import FadeUp from "@/components/ui/FadeUp";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-dark py-16 md:py-24"
    >
      {/* Gradiente radial sutil */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(242,145,32,0.08),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-2 md:items-center">
        {/* Columna izquierda */}
        <FadeUp>
          <Overline>{siteConfig.hero.overline}</Overline>

          <h1 className="mt-4 font-serif text-[32px] font-bold leading-tight text-white md:text-[52px]">
            Su futuro legal en Panamá comienza con la asesoría{" "}
            <em className="italic">correcta</em>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-white/70">
            {siteConfig.hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={getWhatsAppLink()}
              variant="primary"
              external
              icon={<MessageCircle size={18} />}
            >
              {siteConfig.hero.ctaPrimary}
            </Button>
            <Button href="#contacto" variant="outline">
              {siteConfig.hero.ctaSecondary}
            </Button>
          </div>
        </FadeUp>

        {/* Columna derecha — tarjeta social proof */}
        <FadeUp delay={200}>
        <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-sm md:p-8">
          {/* Estrellas */}
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={20}
                  className="fill-brand text-brand"
                />
              ))}
            </div>
            <span className="text-sm font-semibold text-white">
              {siteConfig.reviews.rating} de 5
            </span>
          </div>

          <p className="mt-2 text-sm text-white/60">
            {siteConfig.reviews.count} reseñas verificadas en{" "}
            {siteConfig.reviews.source}
          </p>

          {/* Testimonios */}
          <div className="mt-6 space-y-4">
            {siteConfig.testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-4"
              >
                <p className="text-sm leading-relaxed text-white/80">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-2 text-xs font-semibold text-brand">
                  — {t.name}
                </p>
              </div>
            ))}
          </div>

          {/* Badge Google */}
          <div className="mt-4 flex items-center gap-2 text-xs text-white/50">
            <Star size={14} className="fill-brand text-brand" />
            Verificado por Google Reviews
          </div>
        </div>
        </FadeUp>
      </div>
    </section>
  );
}
