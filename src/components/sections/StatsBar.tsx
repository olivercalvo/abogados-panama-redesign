import { siteConfig } from "@/data/site-config";
import FadeUp from "@/components/ui/FadeUp";

export default function StatsBar() {
  const lastIndex = siteConfig.stats.length - 1;

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {siteConfig.stats.map((stat, i) => (
          <FadeUp key={stat.label} delay={i * 100}>
            <div
              className={`text-center ${
                i < lastIndex ? "md:border-r md:border-gray-200/60" : ""
              }`}
            >
              <p className="font-serif text-4xl font-bold text-dark md:text-5xl">
                {stat.value}
                <span className="text-brand">{stat.suffix}</span>
              </p>
              <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
