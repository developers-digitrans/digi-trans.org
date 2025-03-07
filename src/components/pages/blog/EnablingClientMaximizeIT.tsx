import React, { useState } from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { motion } from "framer-motion";
import {
  Linkedin,
  Mail,
  Facebook,
  Twitter,
  ArrowRight,
  CheckCircle,
} from "lucide-react";
import UniverseLights from "../../UniverseLights";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import { RelatedContent } from "../../ui/related-content";
import { Button } from "../../ui/button";

export default function EnablingClientMaximizeIT() {
  const [activeSection, setActiveSection] = useState("challenge");

  const relatedContent = [
    {
      title: "Cloud-Native Architecture Patterns",
      description:
        "Explore modern architecture patterns for building scalable, resilient cloud-native applications.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      url: "/blog/cloud-native-architecture-patterns",
      type: "blog",
    },
    {
      title: "Enterprise Solutions",
      description:
        "Comprehensive enterprise-grade solutions for large-scale organizations.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      url: "/solutions/enterprise-solutions",
      type: "service",
    },
    {
      title: "Digital Transformation",
      description:
        "Transform your business with cutting-edge digital solutions and strategies.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      url: "/solutions/digital-transformation",
      type: "service",
    },
  ];

  const handleSectionClick = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      <UniverseLights />

      <article className="pt-32 pb-16 bg-black">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sticky Table of Contents */}
            <div className="lg:w-1/4">
              <div className="sticky top-32 bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                <h3 className="font-bold text-lg mb-4 text-white">Contents</h3>
                <ul className="space-y-2">
                  <li>
                    <button
                      onClick={() => handleSectionClick("challenge")}
                      className={`flex items-center gap-2 w-full text-left ${activeSection === "challenge" ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 transition-colors`}
                    >
                      {activeSection === "challenge" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {activeSection !== "challenge" && (
                        <div className="w-4 h-4 rounded-full border border-gray-500" />
                      )}
                      Challenge
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSectionClick("approach")}
                      className={`flex items-center gap-2 w-full text-left ${activeSection === "approach" ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 transition-colors`}
                    >
                      {activeSection === "approach" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {activeSection !== "approach" && (
                        <div className="w-4 h-4 rounded-full border border-gray-500" />
                      )}
                      Approach
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSectionClick("outcome")}
                      className={`flex items-center gap-2 w-full text-left ${activeSection === "outcome" ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 transition-colors`}
                    >
                      {activeSection === "outcome" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {activeSection !== "outcome" && (
                        <div className="w-4 h-4 rounded-full border border-gray-500" />
                      )}
                      Outcome
                    </button>
                  </li>
                </ul>

                <div className="mt-8 pt-4 border-t border-gray-800">
                  <h4 className="font-medium text-sm mb-2 text-gray-300">
                    Need similar results?
                  </h4>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <motion.div
              className="lg:w-3/4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-12">
                <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
                  How We Helped a $3.5B Retailer Transform Their IT into a
                  Strategic Asset
                </h1>
                <div className="flex items-center gap-4 text-gray-400 text-sm mb-8">
                  <span>March 20, 2024</span>
                  <span>•</span>
                  <span>5 min read</span>
                  <span>•</span>
                  <span>Case Study</span>
                </div>
              </div>

              <div className="prose prose-lg prose-invert max-w-none">
                <div id="challenge" className="mb-12 scroll-mt-32">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    Challenge
                  </h2>
                  <div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-blue-600">
                    <p>
                      A leading global retailer with $3.5B in annual revenue was
                      seeking a new finance system. During our initial strategic
                      consultation, we identified a critical opportunity to
                      conduct a comprehensive review of their entire IT
                      landscape. This assessment would reveal how their
                      technology investments were delivering business value and
                      establish a strategic framework for future IT investments
                      to maximize ROI and competitive advantage.
                    </p>
                  </div>
                </div>

                <div id="approach" className="mb-12 scroll-mt-32">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    Approach
                  </h2>
                  <ul className="space-y-4">
                    {[
                      "We assembled an elite multi-disciplinary team of enterprise architects, change management specialists, and data scientists to conduct a 360° evaluation of the client's IT ecosystem, with particular focus on their mission-critical proprietary retail operations platform.",
                      "Through rigorous analysis, we identified critical bottlenecks, security vulnerabilities, scalability limitations, and process inefficiencies that were hindering business agility and innovation velocity.",
                      "We designed a future-proof target architecture and strategic roadmap meticulously aligned with the client's 5-year business plan and market differentiation strategy.",
                      "Our comprehensive IT architecture blueprint revealed previously unidentified opportunities for system integration, automation, and data monetization that could create significant competitive advantages.",
                      "We developed a phased implementation plan with prioritized quick wins to generate immediate business value while building momentum for the broader transformation initiative.",
                    ].map((item, index) => (
                      <li
                        key={index}
                        className="bg-gray-900/30 p-4 rounded-lg border border-gray-800 flex gap-4"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-gray-300">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div id="outcome" className="mb-12 scroll-mt-32">
                  <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    Outcome
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Strategic Clarity",
                        description:
                          "The client gained unprecedented clarity on their technology landscape, with a strategic roadmap directly linking IT investments to specific business outcomes and competitive advantages.",
                      },
                      {
                        title: "Immediate Performance Gains",
                        description:
                          "Our quick-win implementations delivered a 28% improvement in system performance and a 35% reduction in incident resolution time within the first 90 days.",
                      },
                      {
                        title: "Financial Impact",
                        description:
                          "The architecture blueprint identified $4.2M in immediate cost-saving opportunities and revealed new revenue streams that could generate an estimated $12M annually.",
                      },
                      {
                        title: "Risk Reduction",
                        description:
                          "We established a robust IT governance framework that reduced technology risk exposure by 65% while improving the client's cybersecurity posture across all critical systems.",
                      },
                      {
                        title: "Executive Confidence",
                        description:
                          "The client's executive team now has a technology roadmap that serves as a strategic asset, enabling them to make confident investment decisions aligned with long-term business objectives.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-600/50 transition-colors"
                      >
                        <h3 className="text-xl font-bold text-blue-400 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-300">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 p-6 bg-blue-900/20 rounded-lg border border-blue-800/30">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Ready to transform your IT infrastructure?
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Our team of experts can help you unlock the full potential
                    of your technology investments and create a strategic
                    roadmap for your business.
                  </p>
                </div>

                <div className="mt-12 flex items-center gap-4">
                  <p className="font-semibold text-white">Share</p>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </article>

      <RelatedContent
        items={relatedContent}
        title="Explore more case studies and solutions"
      />

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
