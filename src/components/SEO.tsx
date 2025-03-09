import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  twitterCard?: "summary" | "summary_large_image";
}

const defaultKeywords = [
  "IT consultancy",
  "big data analytics",
  "business intelligence",
  "cloud migration",
  "AI solutions",
  "machine learning",
  "data integration",
  "SaaS products",
  "enterprise AI",
  "data visualization",
  "AI agents",
  "real-time analytics",
];

export default function SEO({
  title = "Enterprise Data & AI Solutions | Digitrans",
  description = "Transform your business with enterprise-grade data analytics, cloud computing, and artificial intelligence solutions from Digitrans.",
  keywords = defaultKeywords,
  canonicalUrl,
  ogImage = "https://digitrans.ai/images/og-image.jpg",
  ogType = "website",
  twitterCard = "summary_large_image",
}: SEOProps) {
  // Construct the canonical URL
  const siteUrl = "https://digitrans.ai";
  const canonical = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
