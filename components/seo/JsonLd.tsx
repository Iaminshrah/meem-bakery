import { site } from "@/lib/data";
import { getSiteUrl } from "@/lib/site-url";

export function JsonLd() {
  const url = getSiteUrl();
  const data = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    name: site.shortName,
    alternateName: site.name,
    description: site.description,
    url,
    telephone: site.phoneHref,
    image: `${url}/cakes/chocolate-drip.png`,
    logo: `${url}/logo.png`,
    sameAs: [site.instagram],
    priceRange: "PKR",
    areaServed: "Pakistan",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phoneHref,
      contactType: "customer service",
      availableLanguage: ["en", "ur"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
