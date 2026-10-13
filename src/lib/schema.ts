import { FAQS, SERVICES, SITE, type Service } from "./site";

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  alternateName: SITE.short,
  url: SITE.url,
  description: SITE.description,
  email: SITE.email,
  telephone: SITE.phones[0].e164,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    postOfficeBoxNumber: "3869",
    addressLocality: SITE.address.city,
    addressCountry: SITE.address.countryCode,
  },
  areaServed: { "@type": "Country", name: "Tanzania" },
  knowsAbout: [
    "Physical security",
    "Security management",
    "Staff vetting",
    "Technical security",
    "Fraud investigation",
    "Fire safety",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Security and risk consultancy services",
    itemListElement: SERVICES.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.short, url: `${SITE.url}/services/${s.slug}` },
    })),
  },
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export const serviceSchema = (s: Service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: s.title,
  description: s.intro,
  url: `${SITE.url}/services/${s.slug}`,
  serviceType: s.title,
  provider: { "@id": `${SITE.url}/#organization` },
  areaServed: { "@type": "Country", name: "Tanzania" },
});

export const breadcrumbSchema = (items: { name: string; path: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${SITE.url}${it.path}`,
  })),
});
