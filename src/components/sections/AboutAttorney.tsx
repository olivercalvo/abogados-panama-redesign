import Image from "next/image";
import { Star } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Overline from "@/components/ui/Overline";
import Badge from "@/components/ui/Badge";
import FadeUp from "@/components/ui/FadeUp";

export default function AboutAttorney() {
  return (
    <SectionWrapper bg="white" id="nosotros" className="bg-gradient-to-br from-white to-light">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        {/* Foto */}
        <FadeUp>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-xl">
              <Image
                src="/julissa-ortega.png"
                alt="Lic. Julissa Ortega Hernández — Directora del Bufete AbogadosPanamá.net"
                width={600}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
            {/* Badge flotante */}
            <div className="absolute -right-2 -bottom-4 flex items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-white shadow-lg md:-right-4">
              <Star size={16} className="fill-white" />
              {siteConfig.reviews.count} reseñas · {siteConfig.reviews.rating} estrellas
            </div>
          </div>
        </FadeUp>

        {/* Bio */}
        <FadeUp delay={200}>
          <div>
            <Overline>{siteConfig.attorney.title.toUpperCase()}</Overline>
            <h2 className="mt-3 font-serif text-[28px] font-bold text-dark md:text-[40px]">
              {siteConfig.attorney.name}
            </h2>

            <div className="mt-6 space-y-4">
              {siteConfig.attorney.bio.map((paragraph, i) => (
                <p key={i} className="text-text-secondary leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {siteConfig.attorney.credentials.map((cred) => (
                <Badge key={cred}>{cred}</Badge>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </SectionWrapper>
  );
}
