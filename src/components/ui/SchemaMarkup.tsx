import { siteConfig } from "@/data/site-config";

export default function SchemaMarkup() {
  const legalService = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address,
      addressLocality: "Panamá",
      addressCountry: "PA",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteConfig.reviews.rating,
      reviewCount: siteConfig.reviews.count,
      bestRating: 5,
    },
    openingHours: "Mo-Fr 08:00-17:00",
    areaServed: {
      "@type": "Country",
      name: "Panamá",
    },
    priceRange: "$$",
  };

  const attorney = {
    "@context": "https://schema.org",
    "@type": "Attorney",
    name: siteConfig.attorney.name,
    jobTitle: siteConfig.attorney.title,
    worksFor: {
      "@type": "LegalService",
      name: siteConfig.name,
    },
    description: siteConfig.attorney.bio[0],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(legalService) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(attorney) }}
      />
    </>
  );
}
