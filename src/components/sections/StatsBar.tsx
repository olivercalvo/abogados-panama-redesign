import { siteConfig } from "@/data/site-config";

export default function StatsBar() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 sm:px-6 md:grid-cols-4">
        {siteConfig.stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="font-serif text-4xl font-bold text-dark md:text-5xl">
              {stat.value}
              <span className="text-brand">{stat.suffix}</span>
            </p>
            <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
