import {
  FileCheck,
  Building2,
  Scale,
  Ship,
  FileText,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Overline from "@/components/ui/Overline";
import FadeUp from "@/components/ui/FadeUp";

const iconMap: Record<string, React.ReactNode> = {
  FileCheck: <FileCheck size={24} />,
  Building2: <Building2 size={24} />,
  Scale: <Scale size={24} />,
  Ship: <Ship size={24} />,
  FileText: <FileText size={24} />,
  Globe: <Globe size={24} />,
};

export default function Services() {
  return (
    <SectionWrapper bg="light" id="servicios">
      <FadeUp>
        <div className="text-center">
          <Overline>Áreas de práctica</Overline>
          <h2 className="mt-3 font-serif text-[28px] font-bold text-dark md:text-[40px]">
            Soluciones legales integrales para cada necesidad
          </h2>
        </div>
      </FadeUp>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.services.map((s, i) => (
          <FadeUp key={s.id} delay={i * 100}>
            <div className="group h-full rounded-xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:border-l-3 hover:border-l-brand hover:shadow-lg hover:scale-[1.02]">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-dark text-brand">
                {iconMap[s.icon]}
              </div>
              <h3 className="text-lg font-semibold text-dark">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {s.description}
              </p>
            </div>
          </FadeUp>
        ))}
      </div>
    </SectionWrapper>
  );
}
