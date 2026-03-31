import { siteConfig } from "@/data/site-config";
import SectionWrapper from "@/components/ui/SectionWrapper";
import Overline from "@/components/ui/Overline";

export default function MediaBanner() {
  return (
    <SectionWrapper bg="light">
      <div className="text-center">
        <Overline>Visto en medios de comunicación</Overline>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {siteConfig.media.map((name) => (
            <span
              key={name}
              className="text-lg font-bold tracking-wide text-text-secondary/40 md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
