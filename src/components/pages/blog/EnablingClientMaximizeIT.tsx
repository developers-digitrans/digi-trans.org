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
} from "lucide-react";
import UniverseLights from "../../UniverseLights";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import { RelatedContent } from "../../ui/related-content";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import { ArticleSchema } from "../../JsonLd";

export default function EnablingClientMaximizeIT() {
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
        title="How We Helped a $3.5B Retailer Transform Their IT into a Strategic Asset | Digitrans"
        description="Learn how our strategic IT assessment unlocked $16M+ in value and created a technology roadmap that became a competitive advantage for a global retail leader."
        canonicalUrl="/blog/enabling-our-client-to-maximise-the-business-value-from-it"
        ogType="article"
      />
      <ArticleSchema
        headline="How We Helped a $3.5B Retailer Transform Their IT into a Strategic Asset"
        description="Learn how our strategic IT assessment unlocked $16M+ in value and created a technology roadmap that became a competitive advantage for a global retail leader."
        datePublished="2024-03-20T00:00:00.000Z"
        image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
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
                    How We Helped a $3.5B Retailer Transform Their IT into a
                    Strategic Asset
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>March 20, 2024</span>
                    <span>•</span>
                    <span>5 min read</span>
                    <span>•</span>
                    <span>Case Study</span>
                  </div>
                </div>

                <div className="mb-8 relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80"
                    alt="Team working on IT strategy"
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
                        Our client, a leading global retailer with $3.5 billion
                        in annual revenue, was struggling to align their IT
                        investments with their business strategy. Despite
                        significant technology spending, they weren't seeing the
                        expected returns, and their IT department was viewed as
                        a cost center rather than a strategic enabler.
                      </p>
                      <p>
                        The company's CIO approached us with several critical
                        challenges that needed to be addressed:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center text-red-400">
                              <DollarSign className="w-4 h-4" />
                            </div>
                            Unclear ROI on IT Investments
                          </h3>
                          <p>
                            The company was spending over $120 million annually
                            on IT, but executives couldn't clearly articulate
                            the business value derived from these investments.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-400">
                              <Server className="w-4 h-4" />
                            </div>
                            Legacy System Constraints
                          </h3>
                          <p>
                            Aging infrastructure and applications were hindering
                            business agility and driving up maintenance costs,
                            consuming over 70% of the IT budget.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-yellow-900/50 flex items-center justify-center text-yellow-400">
                              <Users className="w-4 h-4" />
                            </div>
                            Organizational Silos
                          </h3>
                          <p>
                            IT and business units operated in silos, leading to
                            misaligned priorities, duplicate initiatives, and
                            missed opportunities for innovation.
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
                            Digital-native competitors were gaining market share
                            by delivering superior customer experiences and
                            operational efficiencies through technology.
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
                        We conducted a comprehensive 12-week Strategic IT
                        Assessment that combined deep technical analysis with
                        business strategy alignment. Our approach focused on
                        four key dimensions:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <Building className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Business Strategy Alignment
                            </h3>
                            <p>
                              We conducted interviews with 25+ executives across
                              business units to understand strategic priorities,
                              pain points, and growth opportunities. This helped
                              us create a clear map of how IT capabilities
                              needed to evolve to support business goals.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <Server className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Technology Architecture Assessment
                            </h3>
                            <p>
                              Our team analyzed the current application
                              portfolio (200+ applications), infrastructure, and
                              data architecture. We identified technical debt,
                              redundancies, and modernization opportunities that
                              could reduce costs and improve performance.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <BarChart className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              IT Investment Analysis
                            </h3>
                            <p>
                              We performed a detailed analysis of IT spending
                              patterns, benchmarking against industry peers, and
                              developed a value attribution model that linked
                              technology investments to business outcomes.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Operating Model Evaluation
                            </h3>
                            <p>
                              We assessed the IT organization structure,
                              governance processes, and talent capabilities.
                              This revealed opportunities to enhance
                              collaboration between IT and business units and
                              build critical digital capabilities.
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
                        Our Strategic IT Assessment delivered a comprehensive
                        transformation roadmap that was enthusiastically
                        endorsed by the executive team and board of directors.
                        The roadmap included:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-blue-400">
                            Strategic IT Vision
                          </h3>
                          <p>
                            A clear vision for how technology would enable key
                            business capabilities and competitive
                            differentiation over the next 3-5 years.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Technology Architecture Blueprint
                          </h3>
                          <p>
                            A target architecture that emphasized cloud
                            migration, API-first design, and a microservices
                            approach for core business capabilities.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-green-400">
                            Investment Optimization Plan
                          </h3>
                          <p>
                            A rebalanced IT portfolio that shifted 30% of
                            spending from "run" to "grow and transform"
                            initiatives while reducing overall costs by 12%.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-orange-400">
                            Operating Model Redesign
                          </h3>
                          <p>
                            A new IT operating model with product-aligned teams,
                            agile delivery methods, and embedded business
                            partnership roles.
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
                              $16.5M
                            </span>{" "}
                            in annual cost savings identified through
                            application rationalization and cloud migration
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-blue-400">35%</span>{" "}
                            reduction in time-to-market for new digital
                            capabilities
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-purple-400">
                              40%
                            </span>{" "}
                            improvement in business stakeholder satisfaction
                            with IT
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-orange-400">
                              3-year
                            </span>{" "}
                            technology roadmap with clear business value metrics
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
                        This engagement highlighted several important lessons
                        for organizations seeking to maximize business value
                        from IT:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Start with Business Outcomes
                            </h3>
                            <p>
                              Technology investments should be directly linked
                              to specific business outcomes with clear metrics.
                              This creates a shared language between IT and
                              business leaders and ensures technology serves
                              strategic priorities.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Balance Run vs. Change the Business
                            </h3>
                            <p>
                              Many organizations spend too much on maintaining
                              legacy systems at the expense of innovation.
                              Strategic application rationalization and
                              modernization can free up resources for growth and
                              transformation initiatives.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Embrace Product-Centric Delivery
                            </h3>
                            <p>
                              Organizing IT around business capabilities or
                              products rather than projects leads to better
                              business alignment, faster delivery, and more
                              sustainable solutions. This approach also improves
                              accountability for business outcomes.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Invest in Digital Foundations
                            </h3>
                            <p>
                              Building strong digital foundations—including
                              cloud infrastructure, data platforms, and API
                              ecosystems—creates the flexibility and scalability
                              needed to respond quickly to changing business
                              needs and market conditions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="mb-6">
                          Two years after implementing our recommendations, the
                          retailer has transformed IT from a cost center to a
                          strategic enabler. They've accelerated their digital
                          transformation initiatives, improved customer
                          experience, and gained market share in key segments.
                          Most importantly, the executive team now views
                          technology as a critical competitive advantage rather
                          than just an operational necessity.
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
