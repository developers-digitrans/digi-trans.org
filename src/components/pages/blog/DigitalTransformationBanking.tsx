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
  Building,
  LineChart,
  FileText,
  Users,
  Zap,
  BarChart,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Server,
  Database,
  Shield,
  Lock,
} from "lucide-react";
import UniverseLights from "../../UniverseLights";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import { RelatedContent } from "../../ui/related-content";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import { ArticleSchema } from "../../JsonLd";

export default function DigitalTransformationBanking() {
  const [activeSection, setActiveSection] = useState("challenge");

  const relatedContent = [
    {
      title: "Building Enterprise Data Lakes: A Complete Guide",
      description:
        "Learn how to design and implement scalable data lakes that process petabytes of data with real-time analytics capabilities.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      url: "/blog/building-enterprise-data-lakes",
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
      <SEO
        title="Digital Transformation in Banking: A $250M Success Story | Digitrans"
        description="Learn how we helped a global banking leader transform their legacy systems, resulting in $250M in operational savings and a 35% increase in customer satisfaction."
        canonicalUrl="/blog/digital-transformation-banking-success-story"
        ogType="article"
      />
      <ArticleSchema
        headline="Digital Transformation in Banking: A $250M Success Story"
        description="Learn how we helped a global banking leader transform their legacy systems, resulting in $250M in operational savings and a 35% increase in customer satisfaction."
        datePublished="2024-04-15T00:00:00.000Z"
        image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800"
      />
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
                  <li>
                    <button
                      onClick={() => handleSectionClick("lessons")}
                      className={`flex items-center gap-2 w-full text-left ${activeSection === "lessons" ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 transition-colors`}
                    >
                      {activeSection === "lessons" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {activeSection !== "lessons" && (
                        <div className="w-4 h-4 rounded-full border border-gray-500" />
                      )}
                      Key Lessons
                    </button>
                  </li>
                </ul>
              </div>

              <div className="mt-8 sticky top-96 bg-gray-900/70 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
                <h3 className="font-bold text-lg mb-4 text-white">Share</h3>
                <div className="flex flex-col space-y-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-blue-800/50 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-sky-800/50 bg-sky-900/20 hover:bg-sky-900/30 text-sky-400"
                  >
                    <Twitter className="w-4 h-4" />
                    <span>Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-blue-800/50 bg-blue-900/20 hover:bg-blue-900/30 text-blue-400"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center gap-2 border-red-800/50 bg-red-900/20 hover:bg-red-900/30 text-red-400"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email</span>
                  </Button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <a
                  href="/blog"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-1 rotate-180" />
                  Back to Blog
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                    Digital Transformation in Banking: A $250M Success Story
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>April 15, 2024</span>
                    <span>•</span>
                    <span>7 min read</span>
                    <span>•</span>
                    <span>Case Study</span>
                  </div>
                </div>

                <div className="mb-8 relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80"
                    alt="Modern banking digital transformation"
                    className="w-full h-auto object-cover rounded-xl"
                    style={{ maxHeight: "500px" }}
                  />
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                  <div id="challenge" className="mb-12">
                    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-800/30 mb-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                          <AlertTriangle className="w-5 h-5" />
                        </div>
                        The Challenge
                      </h2>
                      <p className="mb-4">
                        Our client, a global banking institution with over $1.2
                        trillion in assets under management, was struggling with
                        an aging technology infrastructure that was hindering
                        their ability to compete in an increasingly digital
                        marketplace. Their legacy systems, some dating back 30+
                        years, were creating significant challenges:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center text-red-400">
                              <Server className="w-4 h-4" />
                            </div>
                            Legacy System Constraints
                          </h3>
                          <p>
                            Monolithic mainframe applications were expensive to
                            maintain, difficult to update, and created
                            significant technical debt, with annual maintenance
                            costs exceeding $350 million.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-400">
                              <Users className="w-4 h-4" />
                            </div>
                            Customer Experience Gaps
                          </h3>
                          <p>
                            Siloed systems and fragmented data prevented a
                            unified customer view, resulting in disjointed
                            experiences across channels and declining customer
                            satisfaction scores.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-yellow-900/50 flex items-center justify-center text-yellow-400">
                              <Shield className="w-4 h-4" />
                            </div>
                            Security & Compliance Risks
                          </h3>
                          <p>
                            Aging infrastructure created growing security
                            vulnerabilities and made regulatory compliance
                            increasingly difficult and costly to maintain in a
                            rapidly evolving regulatory landscape.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            Competitive Pressure
                          </h3>
                          <p>
                            Fintech disruptors and digitally-native competitors
                            were rapidly gaining market share with innovative
                            offerings and superior digital experiences that the
                            bank couldn't match with its existing technology
                            stack.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="approach" className="mb-12">
                    <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/30 mb-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                          <Zap className="w-5 h-5" />
                        </div>
                        Our Approach
                      </h2>
                      <p className="mb-6">
                        We developed a comprehensive 3-year digital
                        transformation roadmap that balanced immediate business
                        needs with long-term strategic objectives. Our approach
                        focused on four key pillars:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <Building className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Microservices Architecture
                            </h3>
                            <p>
                              We designed a cloud-native microservices
                              architecture to replace the monolithic legacy
                              systems. This approach allowed for incremental
                              modernization without disrupting critical banking
                              operations. Key components included API-first
                              design, event-driven architecture, and
                              containerization for scalability and resilience.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Data Transformation
                            </h3>
                            <p>
                              We implemented a modern data platform that unified
                              customer data across all channels and products.
                              This included building a cloud-based data lake,
                              establishing master data management practices, and
                              deploying real-time analytics capabilities to
                              enable personalized customer experiences and
                              data-driven decision making.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <BarChart className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Digital Channels Transformation
                            </h3>
                            <p>
                              We redesigned the bank's digital channels (web,
                              mobile, ATM, branch) with a focus on creating
                              seamless, omnichannel customer journeys. This
                              involved implementing a modern digital experience
                              platform, redesigning key customer journeys, and
                              establishing DevOps practices for rapid,
                              continuous delivery of new features.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <Lock className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Security & Compliance Modernization
                            </h3>
                            <p>
                              We implemented a comprehensive security and
                              compliance framework that was embedded throughout
                              the transformation process. This included
                              zero-trust architecture, automated compliance
                              controls, continuous security monitoring, and
                              privacy-by-design principles to ensure the bank's
                              digital assets were protected while meeting
                              regulatory requirements.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="outcome" className="mb-12">
                    <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-green-800/30 mb-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-900/50 flex items-center justify-center text-green-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        The Outcome
                      </h2>
                      <p className="mb-6">
                        Our digital transformation initiative delivered
                        significant business value across multiple dimensions:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-blue-400">
                            Operational Efficiency
                          </h3>
                          <p>
                            The new cloud-native architecture reduced annual IT
                            operating costs by $250 million through
                            infrastructure optimization, automated operations,
                            and reduced maintenance requirements.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Customer Experience
                          </h3>
                          <p>
                            Customer satisfaction scores increased by 35%,
                            digital engagement grew by 60%, and the bank saw a
                            28% reduction in customer churn due to improved
                            digital experiences and personalized services.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-green-400">
                            Business Agility
                          </h3>
                          <p>
                            Time-to-market for new features decreased from
                            months to days, with 85% faster deployment cycles
                            and a 300% increase in release frequency, enabling
                            rapid response to market opportunities.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-orange-400">
                            Risk Reduction
                          </h3>
                          <p>
                            Security incidents decreased by 45%, compliance
                            costs reduced by 30%, and the bank achieved a 99.99%
                            system availability, significantly reducing
                            operational risk.
                          </p>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold mb-4">
                        Key Results
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-green-400">
                              $250M
                            </span>{" "}
                            annual operational cost savings through IT
                            modernization
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-blue-400">35%</span>{" "}
                            increase in customer satisfaction scores
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-purple-400">
                              85%
                            </span>{" "}
                            faster time-to-market for new features and services
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-orange-400">
                              45%
                            </span>{" "}
                            reduction in security incidents
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="lessons" className="mb-12">
                    <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-800/30 mb-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center text-purple-400">
                          <FileText className="w-5 h-5" />
                        </div>
                        Key Lessons
                      </h2>
                      <p className="mb-6">
                        This transformation journey yielded several important
                        lessons for financial institutions undertaking digital
                        transformation:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Balance Innovation with Stability
                            </h3>
                            <p>
                              For financial institutions, maintaining
                              operational stability while innovating is
                              critical. Our phased approach with parallel
                              systems and careful migration planning ensured
                              continuous service while enabling transformation.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Data as a Strategic Asset
                            </h3>
                            <p>
                              Unified, high-quality data proved to be the
                              foundation for successful digital transformation.
                              Investing in data governance, integration, and
                              analytics capabilities early in the process
                              created the foundation for personalized
                              experiences and operational improvements.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Cultural Transformation is Essential
                            </h3>
                            <p>
                              Technology transformation must be accompanied by
                              cultural and organizational change. We implemented
                              agile ways of working, DevOps practices, and
                              cross-functional teams that broke down silos
                              between business and IT, creating a collaborative
                              innovation culture.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Security by Design
                            </h3>
                            <p>
                              Embedding security and compliance considerations
                              from the beginning of the transformation journey
                              proved far more effective than retrofitting them
                              later. Our security-by-design approach ensured
                              that new systems were inherently more secure while
                              reducing compliance costs.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="mb-6">
                          Three years after beginning this transformation
                          journey, the bank has not only modernized its
                          technology infrastructure but has repositioned itself
                          as a digital leader in the financial services
                          industry. They've launched several innovative
                          digital-first products, expanded into new markets, and
                          are now viewed as a technology company that provides
                          banking services rather than a traditional bank trying
                          to adapt to the digital age.
                        </p>

                        <div className="flex justify-center">
                          <Button
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2"
                            onClick={() => (window.location.href = "/contact")}
                          >
                            Schedule a Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="mt-16">
            <RelatedContent items={relatedContent} />
          </div>
        </div>
      </article>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
