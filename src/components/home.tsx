import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import ProjectsSection from "./sections/ProjectsSection";
import Footer from "./Footer";

import { StickyCTA } from "./ui/sticky-cta";
import { ProgressBar } from "./ui/progress-bar";
import { BackToTop } from "./ui/back-to-top";
import { ProductSpotlight } from "./ui/product-spotlight";
import { RelatedContent } from "./ui/related-content";

export default function Home() {
  const [showProductSpotlight, setShowProductSpotlight] = useState(false);

  // Show product spotlight after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowProductSpotlight(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const products = [
    {
      title: "Efficio - AI-Powered HR Platform",
      description:
        "Streamline your HR operations with our AI-powered talent management solution.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
      url: "/products/efficio",
    },
    {
      title: "Ledger - Financial Management",
      description: "Enterprise-grade financial platform for modern businesses.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      url: "/products/ledger",
    },
    {
      title: "KozmoAI - Enterprise AI Platform",
      description:
        "Build and deploy AI solutions with our enterprise orchestration platform.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      url: "/products/kozmo-ai",
    },
  ];

  const relatedContent = [
    {
      title: "How We Helped a $3.5B Retailer Transform Their IT",
      description:
        "Learn how our strategic IT assessment unlocked $16M+ in value and created a technology roadmap that became a competitive advantage.",
      image: "/images/consult.png",
      url: "/blog/enabling-our-client-to-maximise-the-business-value-from-it",
      type: "blog",
    },
    {
      title: "Cloud Computing Solutions",
      description:
        "Scale your business with secure and efficient cloud infrastructure solutions.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      url: "/services/cloud-computing",
      type: "service",
    },
    {
      title: "uTrack - Project Management",
      description:
        "The open source alternative to Jira. Plan, track, and deliver projects with a modern interface.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      url: "/products/utrack",
      type: "product",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      <Hero videoUrl="/videos/home-page.mp4" />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <Footer />

      <StickyCTA
        onTryEfficio={() => window.open("https://app.getefficio.com", "_blank")}
      />
      <BackToTop />
      {showProductSpotlight && <ProductSpotlight products={products} />}
    </div>
  );
}
