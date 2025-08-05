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
  BarChart,
  Brain,
  Database,
  FileText,
  Cloud,
} from "lucide-react";
import UniverseLights from "../../UniverseLights";
import { ProgressBar } from "../../ui/progress-bar";
import { BackToTop } from "../../ui/back-to-top";
import { StickyCTA } from "../../ui/sticky-cta";
import { Button } from "../../ui/button";
import SEO from "../../SEO";
import JobApplicationModal from "../../JobApplicationModal";

export default function DataScientist() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const job = {
    title: "Data Scientist",
    location: "London, UK",
    type: "Full-time",
    salary: "£75,000 - £95,000",
    description:
      "Apply statistical and machine learning techniques to solve complex business problems. Work with large datasets to extract insights and build predictive models.",
    requirements: [
      "4+ years of experience in data science",
      "Strong background in statistics and machine learning",
      "Proficiency in Python and data analysis libraries",
      "Experience with big data technologies",
      "Excellent communication and presentation skills",
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
        title="Data Scientist | Careers | Digitrans"
        description="Join our team as a Data Scientist and apply statistical and machine learning techniques to solve complex business problems and extract insights from large datasets."
        canonicalUrl="/careers/data-scientist"
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
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80"
                    alt="Data Science"
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
                        Digitrans is seeking an experienced Data Scientist to
                        join our team in London. In this role, you will apply
                        statistical and machine learning techniques to solve
                        complex business problems for our enterprise clients.
                        You will work with large datasets to extract meaningful
                        insights and build predictive models that drive business
                        value.
                      </p>
                      <p>
                        As a Data Scientist, you will collaborate with
                        cross-functional teams including data engineers,
                        software developers, and business stakeholders to
                        understand requirements and deliver data-driven
                        solutions. You will be responsible for the full data
                        science lifecycle, from problem formulation and data
                        exploration to model development, validation, and
                        deployment.
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
                        <div className="flex items-start gap-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-800/30">
                          <div className="w-8 h-8 rounded-full bg-blue-900/50 flex-shrink-0 flex items-center justify-center text-blue-400 mt-1">
                            <BarChart className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Data Analysis & Modeling
                            </h3>
                            <p>
                              Analyze large, complex datasets using statistical
                              methods and machine learning techniques. Develop
                              predictive models, recommendation systems, and
                              other data-driven solutions. Evaluate model
                              performance, validate results, and iterate on
                              approaches to improve outcomes. Implement feature
                              engineering techniques to enhance model
                              performance.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-800/30">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <Brain className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Machine Learning Implementation
                            </h3>
                            <p>
                              Design and implement machine learning algorithms
                              for various business applications. Develop
                              solutions for classification, regression,
                              clustering, and natural language processing
                              problems. Research and apply state-of-the-art
                              techniques to solve complex business challenges.
                              Collaborate with ML engineers to deploy models to
                              production environments.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-800/30">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Data Exploration & Visualization
                            </h3>
                            <p>
                              Perform exploratory data analysis to understand
                              data characteristics and identify patterns. Create
                              compelling data visualizations to communicate
                              insights to technical and non-technical
                              stakeholders. Develop interactive dashboards and
                              reports using tools like Tableau, Power BI, or
                              custom solutions. Translate complex findings into
                              actionable business recommendations.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 backdrop-blur-sm p-4 rounded-lg border border-blue-800/30">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <Cloud className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Cloud-Based Data Science
                            </h3>
                            <p>
                              Leverage AWS cloud services for data science
                              workflows and model deployment. Implement scalable
                              solutions using services like SageMaker, EMR, and
                              Athena. Optimize data processing pipelines for
                              large-scale analytics. Collaborate with data
                              engineers to design efficient data architectures
                              for analytics workloads.
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
                        statistics, machine learning, and data analysis, with
                        experience applying these skills to solve real-world
                        business problems.
                      </p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-blue-800/30">
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
                                Experience with deep learning frameworks
                                (TensorFlow, PyTorch)
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Knowledge of SQL and NoSQL databases</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-blue-800/30">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Education & Experience
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                MSc or PhD in Computer Science, Statistics,
                                Mathematics, or related field
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                4+ years of professional experience in data
                                science
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Experience in financial services, healthcare, or
                                retail industries preferred
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Strong portfolio of data science projects
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Excellent communication and storytelling skills
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
                          candidate will have experience with the following AWS
                          services:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                SageMaker for model training and deployment
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>EMR for big data processing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Athena and Glue for data querying and cataloging
                              </span>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>S3 and DynamoDB for data storage</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Lambda for serverless computing</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>QuickSight for data visualization</span>
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
                        <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-blue-800/30">
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
                              <span>Private health insurance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Pension scheme with employer contributions
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                25 days annual leave plus bank holidays
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-900/50 backdrop-blur-sm p-5 rounded-lg border border-blue-800/30">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Growth & Development
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                £5,000 annual learning & development budget
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Conference attendance and speaking opportunities
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Mentorship program and career advancement
                                framework
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Regular knowledge sharing sessions and tech
                                talks
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="mb-6">
                          We also offer flexible working arrangements with 3
                          days per week in our London office, access to the
                          latest hardware and software tools, opportunities to
                          publish research papers, and the chance to work on
                          challenging projects with cutting-edge technologies
                          for major enterprise clients.
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
