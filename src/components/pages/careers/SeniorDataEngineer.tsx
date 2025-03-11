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
  Briefcase,
  MapPin,
  Clock,
  DollarSign,
  Server,
  Database,
  Code,
  Cloud,
  FileText,
} from "lucide-react";
import UniverseLights from "../../UniverseLights";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import JobApplicationModal from "../../JobApplicationModal";

export default function SeniorDataEngineer() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const job = {
    title: "Senior Data Engineer",
    location: "Dubai, UAE",
    type: "Full-time",
    salary: "$80,000 - $90,000",
    description:
      "Design and implement scalable data pipelines and ETL processes for enterprise clients. Experience with Spark, Kafka, and cloud data platforms required.",
    requirements: [
      "7+ years of experience in data engineering",
      "Expertise in Apache Spark, Kafka, and Airflow",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong SQL and Python skills",
      "Experience with data modeling and warehouse design",
      "AWS mastery is a must for this position",
    ],
  };

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
        title="Senior Data Engineer | Careers | Digitrans"
        description="Join our team as a Senior Data Engineer and design scalable data pipelines and ETL processes for enterprise clients."
        canonicalUrl="/careers/senior-data-engineer"
        ogType="article"
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
                      onClick={() => handleSectionClick("overview")}
                      className={`flex items-center gap-2 w-full text-left ${activeSection === "overview" ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 transition-colors`}
                    >
                      {activeSection === "overview" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {activeSection !== "overview" && (
                        <div className="w-4 h-4 rounded-full border border-gray-500" />
                      )}
                      Overview
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSectionClick("responsibilities")}
                      className={`flex items-center gap-2 w-full text-left ${activeSection === "responsibilities" ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 transition-colors`}
                    >
                      {activeSection === "responsibilities" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {activeSection !== "responsibilities" && (
                        <div className="w-4 h-4 rounded-full border border-gray-500" />
                      )}
                      Responsibilities
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSectionClick("requirements")}
                      className={`flex items-center gap-2 w-full text-left ${activeSection === "requirements" ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 transition-colors`}
                    >
                      {activeSection === "requirements" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {activeSection !== "requirements" && (
                        <div className="w-4 h-4 rounded-full border border-gray-500" />
                      )}
                      Requirements
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleSectionClick("benefits")}
                      className={`flex items-center gap-2 w-full text-left ${activeSection === "benefits" ? "text-blue-400" : "text-gray-400"} hover:text-blue-400 transition-colors`}
                    >
                      {activeSection === "benefits" && (
                        <CheckCircle className="w-4 h-4" />
                      )}
                      {activeSection !== "benefits" && (
                        <div className="w-4 h-4 rounded-full border border-gray-500" />
                      )}
                      Benefits
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
                  href="/careers"
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ArrowRight className="w-4 h-4 mr-1 rotate-180" />
                  Back to Careers
                </a>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                    {job.title}
                  </h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                      <MapPin className="w-4 h-4 text-blue-400" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                      <Clock className="w-4 h-4 text-green-400" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-2 bg-gray-800/50 px-3 py-1 rounded-full">
                      <DollarSign className="w-4 h-4 text-yellow-400" />
                      {job.salary}
                    </span>
                  </div>
                </div>

                <div className="mb-8 relative rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80"
                    alt="Data Engineering"
                    className="w-full h-auto object-cover rounded-xl"
                    style={{ maxHeight: "500px" }}
                  />
                </div>

                <div className="prose prose-lg prose-invert max-w-none">
                  <div id="overview" className="mb-12">
                    <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm p-6 rounded-xl border border-blue-800/30 mb-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-900/50 flex items-center justify-center text-blue-400">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        Overview
                      </h2>
                      <p className="mb-4">
                        Digitrans is seeking an experienced Senior Data Engineer
                        to join our growing team. In this role, you will design
                        and implement scalable data pipelines and ETL processes
                        for our enterprise clients. You will work with
                        cutting-edge technologies like Apache Spark, Kafka, and
                        cloud data platforms to build robust data solutions that
                        drive business value.
                      </p>
                      <p>
                        As a Senior Data Engineer, you will collaborate with
                        data scientists, analysts, and business stakeholders to
                        understand requirements and deliver high-quality data
                        solutions. You will be responsible for ensuring data
                        quality, performance, and reliability across our data
                        platforms.
                      </p>
                    </div>
                  </div>

                  <div id="responsibilities" className="mb-12">
                    <div className="bg-gradient-to-br from-indigo-900/20 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-indigo-800/30 mb-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-indigo-900/50 flex items-center justify-center text-indigo-400">
                          <FileText className="w-5 h-5" />
                        </div>
                        Key Responsibilities
                      </h2>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Data Pipeline Development
                            </h3>
                            <p>
                              Design, build, and maintain scalable data
                              pipelines for batch and real-time processing using
                              technologies like Apache Spark, Kafka, and
                              Airflow. Implement robust error handling,
                              monitoring, and alerting for all data workflows.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <Cloud className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Cloud Data Architecture
                            </h3>
                            <p>
                              Implement and optimize cloud-based data solutions
                              using AWS services such as S3, Redshift, Glue,
                              EMR, and Lambda. Design cost-effective and
                              scalable architectures that meet business
                              requirements while following best practices for
                              security and performance.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <Code className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Data Modeling & Optimization
                            </h3>
                            <p>
                              Create and maintain data models for various
                              analytical and operational use cases. Optimize
                              query performance, implement appropriate indexing
                              strategies, and ensure data integrity across
                              systems. Design schemas that balance performance,
                              flexibility, and usability.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <Server className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Technical Leadership
                            </h3>
                            <p>
                              Provide technical guidance to junior engineers,
                              review code, and contribute to architectural
                              decisions. Collaborate with cross-functional teams
                              to understand requirements and deliver solutions
                              that meet business needs. Document technical
                              designs and implementation details.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="requirements" className="mb-12">
                    <div className="bg-gradient-to-br from-green-900/20 to-blue-900/20 backdrop-blur-sm p-6 rounded-xl border border-green-800/30 mb-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-900/50 flex items-center justify-center text-green-400">
                          <CheckCircle className="w-5 h-5" />
                        </div>
                        Requirements
                      </h2>
                      <p className="mb-6">
                        The ideal candidate will have a strong background in
                        data engineering, cloud technologies, and distributed
                        systems.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-blue-400">
                            Technical Skills
                          </h3>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-2"
                              >
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Experience with data quality and testing
                                frameworks
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Knowledge of data governance and security best
                                practices
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Soft Skills
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Excellent problem-solving abilities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Strong communication skills, both written and
                                verbal
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Ability to work in a fast-paced, collaborative
                                environment
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Self-motivated with a strong attention to detail
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Experience working in an Agile development
                                environment
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-900/20 p-5 rounded-lg border border-blue-800/50">
                        <h3 className="text-xl font-semibold mb-3 text-blue-400 flex items-center gap-2">
                          <Cloud className="w-5 h-5" />
                          AWS Expertise
                        </h3>
                        <p className="mb-4">
                          AWS mastery is a must for this position. The ideal
                          candidate will have deep expertise with the following
                          AWS services:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                S3, Glue, and Lake Formation for data lakes
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Redshift and Athena for data warehousing
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>EMR for big data processing</span>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Lambda and Step Functions for serverless
                                workflows
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Kinesis for real-time data streaming</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>IAM and security best practices</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div id="benefits" className="mb-12">
                    <div className="bg-gradient-to-br from-purple-900/20 to-indigo-900/20 backdrop-blur-sm p-6 rounded-xl border border-purple-800/30 mb-8">
                      <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-purple-900/50 flex items-center justify-center text-purple-400">
                          <DollarSign className="w-5 h-5" />
                        </div>
                        Benefits & Perks
                      </h2>
                      <p className="mb-6">
                        At Digitrans, we offer a comprehensive benefits package
                        to support our team members' wellbeing and professional
                        growth.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-blue-400">
                            Compensation & Benefits
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Competitive salary with performance bonuses
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Comprehensive health insurance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Retirement savings plan with employer match
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Generous paid time off and holidays</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Growth & Development
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Professional development budget</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Certification reimbursement program</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Mentorship and career growth opportunities
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Regular technical workshops and training
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="mb-6">
                          We also offer flexible working arrangements, a
                          collaborative and inclusive work environment, and the
                          opportunity to work on challenging projects with
                          cutting-edge technologies.
                        </p>

                        <div className="flex justify-center">
                          <Button
                            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-6 py-2"
                            onClick={() => setIsModalOpen(true)}
                          >
                            Apply for this Position
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
        </div>
      </article>

      <JobApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        job={job}
      />

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
