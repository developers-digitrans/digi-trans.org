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
  Code,
  Database,
  Globe,
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

export default function FullStackDeveloper() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const job = {
    title: "Full Stack Developer",
    location: "Remote",
    type: "Full-time",
    salary: "$70,000 - $80,000",
    description:
      "Develop modern web applications using React, Node.js, and cloud services. Work on enterprise-grade applications with a focus on performance and scalability.",
    requirements: [
      "5+ years of full stack development experience",
      "Expertise in React and Node.js",
      "Experience with database design and ORM frameworks",
      "Understanding of CI/CD pipelines",
      "Knowledge of cloud services and serverless architecture",
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
        title="Full Stack Developer | Careers | Digitrans"
        description="Join our team as a Full Stack Developer and build modern web applications using React, Node.js, and cloud services with a focus on performance and scalability."
        canonicalUrl="/careers/full-stack-developer"
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
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80"
                    alt="Full Stack Development"
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
                        Digitrans is looking for an experienced Full Stack
                        Developer to join our global team. In this remote role,
                        you will develop modern web applications using React,
                        Node.js, and cloud services, with a focus on building
                        enterprise-grade solutions that are performant,
                        scalable, and maintainable.
                      </p>
                      <p>
                        As a Full Stack Developer, you will work closely with
                        product managers, designers, and other engineers to
                        build feature-rich applications that solve complex
                        business problems. You will be responsible for both
                        frontend and backend development, ensuring seamless
                        integration between all components of the application
                        stack.
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
                            <Code className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Frontend Development
                            </h3>
                            <p>
                              Build responsive, accessible, and performant user
                              interfaces using React and modern frontend
                              technologies. Implement complex UI components,
                              state management solutions, and client-side
                              business logic. Ensure cross-browser compatibility
                              and optimize for various device sizes.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <Database className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Backend Development
                            </h3>
                            <p>
                              Design and implement RESTful APIs and GraphQL
                              services using Node.js and Express. Develop
                              efficient database schemas and queries using SQL
                              and NoSQL databases. Implement authentication,
                              authorization, and other security measures. Create
                              scalable microservices architectures when
                              appropriate.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <Cloud className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Cloud Integration
                            </h3>
                            <p>
                              Implement and integrate AWS cloud services into
                              applications. Deploy and configure serverless
                              functions, managed databases, storage solutions,
                              and other cloud resources. Optimize for cost,
                              performance, and scalability while ensuring
                              security best practices are followed.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <Globe className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              DevOps & Collaboration
                            </h3>
                            <p>
                              Participate in CI/CD pipeline setup and
                              maintenance. Write automated tests for both
                              frontend and backend code. Collaborate with team
                              members through code reviews and pair programming.
                              Document code, APIs, and architectural decisions.
                              Mentor junior developers when needed.
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
                        both frontend and backend development, with experience
                        building enterprise-grade applications.
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
                                Experience with TypeScript and modern JavaScript
                                features
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Familiarity with testing frameworks (Jest, React
                                Testing Library, etc.)
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
                              <span>Strong problem-solving abilities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Excellent written and verbal communication
                                skills
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Self-motivated with the ability to work
                                independently
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Experience working in remote, distributed teams
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Ability to manage multiple priorities and
                                deadlines
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
                                Lambda and API Gateway for serverless
                                applications
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                DynamoDB, RDS, and other database services
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                S3, CloudFront, and Route 53 for web hosting
                              </span>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Cognito for authentication and authorization
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                CloudFormation or CDK for infrastructure as code
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>CloudWatch for monitoring and logging</span>
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
                              <span>
                                Health insurance stipend for remote employees
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Retirement savings plan with employer match
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Generous paid time off policy</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Remote Work Benefits
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Home office setup allowance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Monthly internet and utilities stipend
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Flexible working hours across time zones
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Annual in-person team retreats</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="mb-6">
                          We also offer a $3,000 annual professional development
                          budget, access to online learning platforms, regular
                          virtual team-building events, and the opportunity to
                          work on challenging projects with cutting-edge
                          technologies.
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
