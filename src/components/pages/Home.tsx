import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import ServicesSection from "../sections/ServicesSection";
import ProcessSection from "../sections/ProcessSection";
import ProjectsSection from "../sections/ProjectsSection";
import SEO from "../SEO";
import { OrganizationSchema } from "../JsonLd";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Digitrans | Enterprise IT Consultancy for Big Data, AI & Cloud Solutions"
        description="Transform your business with enterprise-grade data analytics, cloud computing, and artificial intelligence solutions from Digitrans."
        canonicalUrl="/"
      />
      <OrganizationSchema />

      <Navbar />
      <Hero />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}
