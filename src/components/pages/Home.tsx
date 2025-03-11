import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import ServicesSection from "../sections/ServicesSection";
import ProcessSection from "../sections/ProcessSection";
import ProjectsSection from "../sections/ProjectsSection";
import SEO from "../SEO";
import { OrganizationSchema, ServiceSchema } from "../JsonLd";

export default function Home() {
  // Define keywords specific to the home page
  const homeKeywords = [
    "IT consultancy",
    "big data analytics",
    "business intelligence",
    "business applications development",
    "SaaS products",
    "AI platform",
    "AI agents orchestration",
    "machine learning",
    "ML development",
    "ML inference",
    "LLM RAGs development",
    "enterprise IT solutions",
    "digital transformation",
    "data-driven business",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Digitrans | Enterprise IT Consultancy for Big Data, AI & Cloud Solutions"
        description="Transform your business with enterprise-grade data analytics, cloud computing, and artificial intelligence solutions from Digitrans. Specialists in big data, ML development, and AI agents orchestration."
        canonicalUrl="/"
        keywords={homeKeywords}
        schema={
          <>
            <OrganizationSchema keywords={homeKeywords} />
            <ServiceSchema keywords={homeKeywords} />
          </>
        }
      />

      <Navbar />
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
