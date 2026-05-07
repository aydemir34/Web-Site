import type { Business } from "../types";

export type SeoMeta = {
  title: string;
  description: string;
  canonical: string;
  robots: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
};

export function buildSeoMeta(
  business: Business,
  pathName: string,
  options?: { isDemo?: boolean; siteUrl?: string }
): SeoMeta {
  const siteUrl = options?.siteUrl ?? "https://demo-placeholder.example.com";
  const path = pathName.startsWith("/") ? pathName : `/${pathName}`;
  const canonical = `${siteUrl}${path}`;
  const isDemo = options?.isDemo ?? true;

  return {
    title: business.seo.title,
    description: business.seo.description,
    canonical,
    robots: isDemo ? "noindex, nofollow" : "index, follow",
    ogTitle: business.seo.title,
    ogDescription: business.seo.description,
    ogImage: `${siteUrl}${business.seo.ogImage}`
  };
}

export function buildLocalBusinessSchema(business: Business, canonical: string): Record<string, unknown> {
  const schemaType = business.category === "beauty-salon" ? "BeautySalon" : "LocalBusiness";
  return {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: business.businessName,
    url: canonical,
    telephone: business.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address,
      addressLocality: business.district,
      addressRegion: "Istanbul",
      addressCountry: "TR"
    },
    sameAs: [business.instagramUrl, business.mapUrl],
    areaServed: `${business.district}, Istanbul`,
    description: business.seo.description
  };
}
