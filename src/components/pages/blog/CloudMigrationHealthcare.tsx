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
  Cloud,
  Shield,
  Heart,
  Clock,
} from "lucide-react";
import UniverseLights from "../../UniverseLights";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import { RelatedContent } from "../../ui/related-content";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import { ArticleSchema } from "../../JsonLd";

export default function CloudMigrationHealthcare() {
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
      title: "Cloud Computing Solutions",
      description:
        "Leverage the power of cloud computing to transform your business operations and drive innovation.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      url: "/services/cloud-computing",
      type: "service",
    },
    {
      title: "Data Security",
      description:
        "Protect your sensitive data with our comprehensive security solutions.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80",
      url: "/solutions/data-security",
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
        title="Cloud Migration for Healthcare: Improving Patient Care | Digitrans"
        description="Learn how we helped a major healthcare provider migrate to the cloud, resulting in 40% cost savings and improved patient care through real-time data access."
        canonicalUrl="/blog/cloud-migration-healthcare-case-study"
        ogType="article"
      />
      <ArticleSchema
        headline="Cloud Migration for Healthcare: Improving Patient Care"
        description="Learn how we helped a major healthcare provider migrate to the cloud, resulting in 40% cost savings and improved patient care through real-time data access."
        datePublished="2024-04-10T00:00:00.000Z"
        image="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800"
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
                    Cloud Migration for Healthcare: Improving Patient Care
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span>April 10, 2024</span>
                    <span>•</span>
                    <span>6 min read</span>
                    <span>•</span>
                    <span>Case Study</span>
                  </div>
                </div>

                <div className="mb-8 relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80"
                    alt="Healthcare cloud migration"
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
                        Our client, a leading healthcare provider network with
                        12 hospitals and over 100 clinics serving more than 2
                        million patients annually, was facing significant
                        challenges with their on-premises IT infrastructure:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-red-900/50 flex items-center justify-center text-red-400">
                              <Server className="w-4 h-4" />
                            </div>
                            Aging Infrastructure
                          </h3>
                          <p>
                            Their on-premises data centers were reaching
                            end-of-life, requiring a $20M+ capital investment to
                            refresh hardware while still facing scalability
                            limitations and increasing maintenance costs.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-400">
                              <Heart className="w-4 h-4" />
                            </div>
                            Patient Care Limitations
                          </h3>
                          <p>
                            Siloed systems and limited interoperability between
                            facilities prevented a unified patient view,
                            hindering care coordination and creating potential
                            patient safety risks.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-yellow-900/50 flex items-center justify-center text-yellow-400">
                              <Shield className="w-4 h-4" />
                            </div>
                            Compliance & Security Concerns
                          </h3>
                          <p>
                            Meeting HIPAA compliance requirements was becoming
                            increasingly complex and costly with their
                            fragmented infrastructure, with growing concerns
                            about data security and disaster recovery
                            capabilities.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400">
                              <Clock className="w-4 h-4" />
                            </div>
                            Innovation Barriers
                          </h3>
                          <p>
                            The rigid infrastructure made it difficult to
                            implement new digital health initiatives,
                            telemedicine capabilities, and advanced analytics
                            for population health management and personalized
                            care.
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
                        We developed a comprehensive cloud migration strategy
                        that addressed both technical and healthcare-specific
                        requirements. Our approach included:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <Cloud className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              HIPAA-Compliant Cloud Architecture
                            </h3>
                            <p>
                              We designed a secure, HIPAA-compliant hybrid cloud
                              architecture using Microsoft Azure as the primary
                              cloud provider. This included implementing Azure
                              Health Data Services, secure virtual networks,
                              encryption at rest and in transit, and
                              comprehensive identity and access management
                              controls.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <Server className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Phased Migration Approach
                            </h3>
                            <p>
                              We implemented a carefully sequenced migration
                              plan that minimized disruption to critical
                              healthcare operations. This included a detailed
                              application assessment, prioritization based on
                              clinical impact, and a phased migration that
                              started with non-critical systems before moving to
                              core clinical applications.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <BarChart className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Healthcare Data Integration Platform
                            </h3>
                            <p>
                              We implemented a cloud-based healthcare data
                              integration platform that unified patient data
                              across all facilities and systems. This included
                              FHIR-based interoperability, HL7 integration, and
                              a master patient index to create a single,
                              comprehensive view of each patient's health
                              record.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <Shield className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Security & Compliance Framework
                            </h3>
                            <p>
                              We implemented a comprehensive security and
                              compliance framework that included continuous
                              monitoring, automated compliance controls,
                              security information and event management (SIEM),
                              and regular security assessments to ensure ongoing
                              HIPAA compliance and protection of sensitive
                              patient data.
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
                        The cloud migration delivered significant benefits
                        across multiple dimensions:
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-blue-400">
                            Financial Impact
                          </h3>
                          <p>
                            The organization achieved a 40% reduction in total
                            IT infrastructure costs by eliminating capital
                            expenditures and optimizing cloud resource
                            utilization, resulting in $8.5M annual savings.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Patient Care Improvements
                          </h3>
                          <p>
                            Clinicians gained access to complete, real-time
                            patient information across all facilities, reducing
                            medical errors by 35% and decreasing average length
                            of stay by 0.8 days through improved care
                            coordination.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-green-400">
                            Operational Efficiency
                          </h3>
                          <p>
                            IT operations became more agile with 99.99% system
                            availability, 75% faster deployment of new
                            capabilities, and a 60% reduction in IT incident
                            resolution time.
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-orange-400">
                            Innovation Acceleration
                          </h3>
                          <p>
                            The cloud platform enabled rapid implementation of
                            telemedicine services, AI-assisted diagnostics, and
                            advanced analytics for population health management,
                            leading to new service offerings and revenue
                            streams.
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
                              40%
                            </span>{" "}
                            reduction in IT infrastructure costs
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-blue-400">35%</span>{" "}
                            reduction in medical errors through improved data
                            access
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-purple-400">
                              99.99%
                            </span>{" "}
                            system availability, exceeding healthcare industry
                            standards
                          </p>
                        </div>

                        <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <p className="text-lg">
                            <span className="font-bold text-orange-400">
                              300%
                            </span>{" "}
                            increase in telemedicine adoption enabled by cloud
                            platform
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
                        This healthcare cloud migration project yielded several
                        important lessons for healthcare organizations
                        considering similar transformations:
                      </p>

                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Clinical Involvement is Critical
                            </h3>
                            <p>
                              Engaging clinicians early and throughout the
                              migration process was essential for success. Their
                              input shaped priorities, identified critical
                              workflows, and ensured that the cloud environment
                              supported rather than disrupted patient care.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Healthcare-Specific Compliance Requirements
                            </h3>
                            <p>
                              Healthcare organizations face unique compliance
                              challenges that require specialized cloud
                              configurations. Working with cloud providers that
                              offer healthcare-specific compliance frameworks
                              and documentation accelerated the migration while
                              ensuring regulatory requirements were met.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Data Integration as Foundation
                            </h3>
                            <p>
                              Investing in a robust healthcare data integration
                              platform early in the migration process created
                              the foundation for improved patient care and
                              operational efficiency. This unified data approach
                              enabled both immediate benefits and future
                              innovation opportunities.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Hybrid Approach for Healthcare
                            </h3>
                            <p>
                              A hybrid cloud approach proved most effective for
                              healthcare, allowing certain sensitive workloads
                              and legacy systems to remain on-premises while
                              leveraging cloud capabilities for scalability,
                              innovation, and disaster recovery.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="mb-6">
                          Two years after completing the cloud migration, the
                          healthcare organization has not only realized
                          significant cost savings and operational improvements
                          but has also launched several innovative digital
                          health initiatives that have expanded their service
                          offerings and improved patient outcomes. The cloud
                          platform has become a strategic asset that enables
                          them to adapt quickly to changing healthcare needs and
                          deliver better care to their communities.
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
