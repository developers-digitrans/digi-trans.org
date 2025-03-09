import React from "react";

interface OrganizationSchemaProps {
  name?: string;
  url?: string;
  logo?: string;
  sameAs?: string[];
  address?: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  contactPoint?: {
    telephone: string;
    contactType: string;
    email?: string;
    availableLanguage?: string[];
  };
}

export function OrganizationSchema({
  name = "Digitrans",
  url = "https://digitrans.ai",
  logo = "https://digitrans.ai/logo.png",
  sameAs = [
    "https://www.linkedin.com/company/digitranslab",
    "https://twitter.com/digitranslab",
    "https://github.com/digitranslab",
  ],
  address = {
    streetAddress: "Downtown Dubai",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    postalCode: "12345",
    addressCountry: "UAE",
  },
  contactPoint = {
    telephone: "+971-4-123-4567",
    contactType: "customer service",
    email: "info@digitrans.ai",
    availableLanguage: ["English", "Arabic", "French"],
  },
}: OrganizationSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name,
    url,
    logo,
    sameAs,
    address: {
      "@type": "PostalAddress",
      ...address,
    },
    contactPoint: {
      "@type": "ContactPoint",
      ...contactPoint,
    },
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}

interface ServiceSchemaProps {
  name?: string;
  description?: string;
  provider?: string;
  serviceType?: string;
  areaServed?: string | string[];
}

export function ServiceSchema({
  name = "Digitrans",
  description = "Enterprise-grade data analytics, cloud computing, and artificial intelligence solutions",
  provider = "Digitrans",
  serviceType = "IT Consultancy",
  areaServed = "Global",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "Organization",
      name: provider,
    },
    serviceType,
    areaServed:
      typeof areaServed === "string"
        ? areaServed
        : areaServed.map((area) => ({
            "@type": "Country",
            name: area,
          })),
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}

interface ArticleSchemaProps {
  headline: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  publisher?: string;
  publisherLogo?: string;
  description?: string;
}

export function ArticleSchema({
  headline,
  image,
  datePublished,
  dateModified = datePublished,
  author = "Digitrans Team",
  publisher = "Digitrans",
  publisherLogo = "https://digitrans.ai/logo.png",
  description,
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: publisher,
      logo: {
        "@type": "ImageObject",
        url: publisherLogo,
      },
    },
    description,
  };

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>;
}
