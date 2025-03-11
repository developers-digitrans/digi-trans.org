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
  GitBranch,
  Server,
  Terminal,
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

export default function DevOpsEngineer() {
  const [activeSection, setActiveSection] = useState("overview");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const job = {
    title: "DevOps Engineer",
    location: "Dubai, UAE",
    type: "Full-time",
    salary: "$70,000 - $80,000",
    description:
      "Implement and manage CI/CD pipelines, containerization, and infrastructure automation. Focus on Kubernetes, Terraform, and cloud-native technologies.",
    requirements: [
      "6+ years of DevOps experience",
      "Strong knowledge of Kubernetes and container orchestration",
      "Experience with infrastructure as code (Terraform, Pulumi)",
      "Expertise in CI/CD tools (Jenkins, GitHub Actions, GitLab CI)",
      "Understanding of observability and monitoring solutions",
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
        title="DevOps Engineer | Careers | Digitrans"
        description="Join our team as a DevOps Engineer and implement CI/CD pipelines, containerization, and infrastructure automation with a focus on Kubernetes, Terraform, and cloud-native technologies."
        canonicalUrl="/careers/devops-engineer"
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
                    src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=1200&q=80"
                    alt="DevOps Engineering"
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
                        Digitrans is seeking an experienced DevOps Engineer to
                        join our team in Dubai. In this role, you will implement
                        and manage CI/CD pipelines, containerization, and
                        infrastructure automation with a focus on Kubernetes,
                        Terraform, and cloud-native technologies. You will work
                        closely with development teams to streamline software
                        delivery processes and ensure high availability and
                        reliability of our systems.
                      </p>
                      <p>
                        As a DevOps Engineer, you will be responsible for
                        building and maintaining the infrastructure that powers
                        our applications and services. You will collaborate with
                        cross-functional teams to implement best practices for
                        deployment, monitoring, and scaling of our systems. Your
                        expertise will be crucial in ensuring our infrastructure
                        is secure, efficient, and resilient.
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
                            <GitBranch className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              CI/CD Pipeline Development
                            </h3>
                            <p>
                              Design, implement, and maintain CI/CD pipelines
                              using tools like Jenkins, GitHub Actions, and
                              GitLab CI. Automate build, test, and deployment
                              processes to enable frequent and reliable software
                              releases. Implement quality gates and security
                              checks within the pipeline to ensure code quality
                              and security compliance.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-purple-900/50 flex-shrink-0 flex items-center justify-center text-purple-400 mt-1">
                            <Server className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Container Orchestration
                            </h3>
                            <p>
                              Manage Kubernetes clusters and containerized
                              applications. Design and implement scalable,
                              high-availability container architectures.
                              Optimize container resource utilization and
                              implement auto-scaling strategies. Ensure proper
                              security configurations for containerized
                              workloads and maintain container registries.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-green-900/50 flex-shrink-0 flex items-center justify-center text-green-400 mt-1">
                            <Terminal className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Infrastructure as Code
                            </h3>
                            <p>
                              Implement infrastructure as code using Terraform,
                              CloudFormation, or Pulumi. Develop reusable
                              modules and templates for common infrastructure
                              patterns. Manage infrastructure version control
                              and implement automated testing for infrastructure
                              code. Ensure consistent environments across
                              development, staging, and production.
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-3 bg-gray-900/50 p-4 rounded-lg border border-gray-800">
                          <div className="w-8 h-8 rounded-full bg-orange-900/50 flex-shrink-0 flex items-center justify-center text-orange-400 mt-1">
                            <Cloud className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              Monitoring & Observability
                            </h3>
                            <p>
                              Implement comprehensive monitoring and alerting
                              solutions using tools like Prometheus, Grafana,
                              and ELK stack. Design and maintain logging and
                              metrics collection systems. Create dashboards for
                              system performance visualization and implement
                              automated alerting for critical issues. Conduct
                              regular system performance analysis and
                              optimization.
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
                        DevOps practices, containerization, and cloud
                        infrastructure.
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
                                Experience with Linux/Unix administration
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Knowledge of networking and security principles
                              </span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-900/50 p-5 rounded-lg border border-gray-800">
                          <h3 className="text-xl font-semibold mb-3 text-purple-400">
                            Soft Skills & Qualifications
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Bachelor's degree in Computer Science or related
                                field
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Strong problem-solving and troubleshooting
                                skills
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Excellent communication and collaboration
                                abilities
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Ability to work in a fast-paced environment
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Relevant certifications (AWS, Kubernetes, etc.)
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
                              <span>EC2, ECS, EKS, and Fargate</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>VPC, Security Groups, and IAM</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>CloudFormation and CDK</span>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>CloudWatch, X-Ray, and CloudTrail</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                CodePipeline, CodeBuild, and CodeDeploy
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Route 53, CloudFront, and WAF</span>
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
                              <span>Retirement savings plan</span>
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
                              <span>
                                $5,000 annual certification and training budget
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Conference attendance opportunities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>
                                Mentorship and career advancement programs
                              </span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                              <span>Regular knowledge sharing sessions</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8">
                        <p className="mb-6">
                          We also offer flexible working arrangements, a
                          collaborative and inclusive work environment, and the
                          opportunity to work on challenging projects with
                          cutting-edge technologies for major enterprise clients
                          across various industries.
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
