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
  Bot,
  ShoppingBag,
  Brain,
  Layers,
} from "lucide-react";
import UniverseLights from "../../UniverseLights";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import { RelatedContent } from "../../ui/related-content";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import { ArticleSchema } from "../../JsonLd";

export default function AIRetailPersonalization() {
  const [activeSection, setActiveSection] = useState("challenge");

  const relatedContent = [
    {
      title: "MLOps Best Practices for Production AI Systems",
      description:
        "A comprehensive guide to implementing MLOps in enterprise environments, from model training to production deployment.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      url: "/blog/mlops-best-practices",
      type: "blog",
    },
    {
      title: "AI Solutions",
      description:
        "Leverage the power of artificial intelligence to transform your business operations and drive innovation.",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80",
      url: "/services/ai-solutions",
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
        title="AI-Powered Retail Personalization: 70% Revenue Growth | Digitrans"
        description="Learn how we helped a global retailer implement AI-powered personalization that increased online revenue by 70% and customer lifetime value by 45%."
        canonicalUrl="/blog/ai-retail-personalization-case-study"
        ogType="article"
      />
      <ArticleSchema
        headline="AI-Powered Retail Personalization: 70% Revenue Growth"
        description="Learn how we helped a global retailer implement AI-powered personalization that increased online revenue by 70% and customer lifetime value by 45%."
        datePublished="2024-04-05T00:00:00.000Z"
        image="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800"
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
                    AI-Powered Retail Personalization: 70% Revenue Growth
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>April 5, 2024</span>
                    <span>•</span>
                    <span>8 min read</span>
                    <span>•</span>
                    <span>Case Study</span>
                  </div>
                </div>

                <div className="mb-8 relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=1200&q=80"
                    alt="AI retail personalization"
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
                        Our client, a multinational retailer with over 500
                        stores and a growing e-commerce presence, was facing
                        significant challenges in an increasingly competitive
                        retail landscape:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center text-red-400">
                              <ShoppingBag className="w-4 h-4" />
                            </div>
                            Generic Customer Experience
                          </h3>
                          <p>
                            Despite having millions of customers and vast
                            amounts of data, they were delivering the same
                            generic shopping experience to everyone, resulting
                            in low conversion rates (1.8%) and declining
                            customer engagement.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-400">
                              <Users className="w-4 h-4" />
                            </div>
                            Fragmented Customer Data
                          </h3>
                          <p>
                            Customer data was siloed across multiple systems
                            (e-commerce, in-store POS, loyalty program,
                            marketing), preventing a unified view of customer
                            behavior and preferences.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-yellow-900/50 flex items-center justify-center text-yellow-400">
                              <TrendingUp className="w-4 h-4" />
                            </div>
                            Digital Competition
                          </h3>
                          <p>
                            Digital-native competitors were gaining market share
                            with sophisticated personalization capabilities that
                            created more relevant and engaging shopping
                            experiences.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400">
                              <Server className="w-4 h-4" />
                            </div>
                            Technical Limitations
                          </h3>
                          <p>
                            Their existing technology stack couldn't support
                            real-time personalization at scale, with
                            recommendation updates taking 24+ hours and limited
                            ability to respond to in-session behavior.
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
                        We developed a comprehensive AI-powered personalization
                        strategy that transformed the customer experience across
                        all touchpoints:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <Users className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Unified Customer Data Platform
                            </h3>
                            <p>
                              We implemented a cloud-based customer data
                              platform that integrated data from all channels
                              and touchpoints, creating a comprehensive
                              360-degree customer view. This included real-time
                              data ingestion, identity resolution to connect
                              cross-channel behavior, and automated data quality
                              processes to ensure accurate personalization.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <Brain className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Advanced AI Recommendation Engine
                            </h3>
                            <p>
                              We built a sophisticated recommendation system
                              using deep learning techniques that combined
                              collaborative filtering, content-based filtering,
                              and contextual awareness. The system could process
                              real-time signals (browsing behavior, search
                              queries, time of day) alongside historical data to
                              deliver highly relevant product recommendations.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <Layers className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Omnichannel Personalization Layer
                            </h3>
                            <p>
                              We implemented a personalization orchestration
                              layer that delivered consistent, personalized
                              experiences across all customer touchpoints. This
                              included the e-commerce website, mobile app, email
                              marketing, in-store digital displays, and even
                              personalized receipts with targeted offers based
                              on purchase history.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <BarChart className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Experimentation & Optimization Framework
                            </h3>
                            <p>
                              We established a robust experimentation framework
                              that enabled continuous testing and optimization
                              of personalization strategies. This included A/B/n
                              testing capabilities, automated performance
                              monitoring, and a feedback loop that continuously
                              improved the AI models based on customer
                              interactions and business outcomes.
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
                        The AI-powered personalization initiative delivered
                        exceptional results across key business metrics:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-blue-400">
                            Revenue Impact
                          </h3>
                          <p>
                            Online revenue increased by 70% within 12 months,
                            with a 120% increase in revenue from personalized
                            recommendations and a 35% higher average order value
                            for personalized sessions.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Customer Engagement
                          </h3>
                          <p>
                            Website conversion rate increased from 1.8% to 4.2%,
                            time on site increased by 45%, and customer
                            satisfaction scores improved by 28% due to more
                            relevant experiences.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-green-400">
                            Customer Lifetime Value
                          </h3>
                          <p>
                            Customer retention improved by 32%, repeat purchase
                            frequency increased by 28%, and overall customer
                            lifetime value grew by 45% through more relevant
                            engagement across the customer journey.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-orange-400">
                            Operational Efficiency
                          </h3>
                          <p>
                            Marketing efficiency improved with a 55% increase in
                            email click-through rates, 40% reduction in customer
                            acquisition costs, and 25% decrease in returns due
                            to better product recommendations.
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
                              70%
                            </span>{" "}
                            increase in online revenue within 12 months
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-blue-400">
                              133%
                            </span>{" "}
                            improvement in e-commerce conversion rate
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-purple-400">
                              45%
                            </span>{" "}
                            increase in customer lifetime value
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-orange-400">
                              40%
                            </span>{" "}
                            reduction in customer acquisition costs
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
                        This AI personalization project yielded several
                        important lessons for retailers and other businesses
                        looking to implement similar solutions:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Data Quality is Foundational
                            </h3>
                            <p>
                              The success of AI personalization depends heavily
                              on data quality. Investing in data cleansing,
                              identity resolution, and automated quality
                              processes early in the project created the
                              foundation for accurate, effective
                              personalization.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Start with High-Impact Use Cases
                            </h3>
                            <p>
                              We prioritized personalization use cases based on
                              potential business impact and technical
                              feasibility. Starting with product recommendations
                              and personalized search delivered quick wins that
                              built momentum and stakeholder support for more
                              advanced personalization initiatives.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Continuous Experimentation is Essential
                            </h3>
                            <p>
                              The most successful personalization strategies
                              emerged through continuous experimentation and
                              optimization. Building a robust testing framework
                              allowed the retailer to rapidly iterate on
                              personalization approaches, learning what
                              resonated with different customer segments.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Balance Automation with Human Oversight
                            </h3>
                            <p>
                              While AI-driven personalization is largely
                              automated, human oversight remains critical for
                              brand alignment, ethical considerations, and edge
                              cases. We implemented a hybrid approach that
                              combined AI-driven personalization with human
                              curation for sensitive categories and special
                              promotions.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="mb-6">
                          One year after implementing the AI personalization
                          platform, the retailer has transformed its approach to
                          customer engagement. Personalization is now embedded
                          throughout the customer journey, from acquisition to
                          retention, creating a virtuous cycle of improved
                          customer experiences, increased loyalty, and growing
                          revenue. The platform continues to evolve, with new AI
                          capabilities being added to further enhance
                          personalization across channels and touchpoints.
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
