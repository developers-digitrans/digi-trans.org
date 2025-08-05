import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import UniverseLights from "../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { ArrowRight } from "lucide-react";
import {
  Brain,
  Code2,
  Cloud,
  Database,
  Users,
  Lightbulb,
  Bot,
  Server,
  BarChart,
  Network,
  Briefcase,
  Globe,
  CheckCircle,
} from "lucide-react";
import { useState } from "react";
import { ProgressBar } from "../ui/progress-bar";
import { BackToTop } from "../ui/back-to-top";
import { StickyCTA } from "../ui/sticky-cta";

const services = [
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "MVP Development",
    description:
      "Transform your SaaS idea into a market-ready MVP in 8-12 weeks",
    features: [
      "User Research & Market Validation",
      "Technical Architecture Planning",
      "Agile Development Process",
      "Weekly Progress Demos",
      "Production Deployment",
      "Launch Strategy Support",
    ],
    technologies: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS"],
    successStory: {
      title: "TechFlow SaaS - Project Management Platform",
      description:
        "Developed a comprehensive project management SaaS platform from concept to production in 10 weeks. The platform secured €2M in funding within 6 months and onboarded 500+ enterprise customers.",
      metrics: [
        "€2M funding raised in 6 months",
        "500+ enterprise customers",
        "10-week development timeline",
        "99.9% uptime since launch",
      ],
    },
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "Product Strategy & Design",
    description:
      "Transform your vision into a winning product strategy that users love",
    features: [
      "Product Strategy Development",
      "User Persona Research",
      "Competitive Analysis",
      "UX/UI Design System",
      "Wireframing & Prototyping",
      "User Testing & Validation",
    ],
    technologies: [
      "Figma",
      "User Research",
      "Product Strategy",
      "Market Validation",
      "Design Systems",
    ],
    successStory: {
      title: "DataSync Pro - Product-Market Fit Success",
      description:
        "Guided a data integration startup through product strategy refinement and UX redesign. Our strategic approach helped them achieve perfect product-market fit and 400% revenue growth in the first year.",
      metrics: [
        "400% revenue growth in year 1",
        "Perfect product-market fit",
        "Zero technical debt",
        "95% user satisfaction score",
      ],
    },
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Full-Stack Development",
    description:
      "Complete technical development with modern, scalable technologies",
    features: [
      "Frontend Development (React/Next.js)",
      "Backend API Development",
      "Database Design & Optimization",
      "Third-party Integrations",
      "Payment Processing Setup",
      "Security Implementation",
    ],
    technologies: ["React", "Next.js", "Python", "Django", "PostgreSQL", "Stripe"],
    successStory: {
      title: "MedCare Connect - Healthcare Platform",
      description:
        "Built a HIPAA-compliant healthcare SaaS platform from the ground up in 12 weeks. The platform now serves 50+ healthcare providers with zero security incidents and full compliance.",
      metrics: [
        "HIPAA-compliant from day one",
        "50+ healthcare providers",
        "12-week development cycle",
        "Zero security incidents",
      ],
    },
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "DevOps & Scaling",
    description:
      "Production-ready infrastructure that grows with your business",
    features: [
      "Cloud Infrastructure Setup",
      "Automated CI/CD Pipelines",
      "Auto-scaling Configuration",
      "Monitoring & Alerting",
      "Security & Compliance",
      "Performance Optimization",
    ],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "Monitoring"],
    successStory: {
      title: "CloudOps Solutions - Infrastructure Excellence",
      description:
        "Architected and deployed auto-scaling infrastructure for a DevOps SaaS platform. The system seamlessly handles traffic spikes from 100 to 100,000+ concurrent users with 99.99% uptime.",
      metrics: [
        "99.99% uptime achieved",
        "Auto-scales to 100K+ users",
        "50% reduction in infrastructure costs",
        "Zero-downtime deployments",
      ],
    },
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "SaaS Consulting",
    description: "Strategic guidance for SaaS success and growth optimization",
    features: [
      "SaaS Business Model Design",
      "Technology Stack Selection",
      "Scaling Strategy Planning",
      "Performance Optimization",
      "Security Assessment",
      "Growth Metrics Analysis",
    ],
    technologies: [
      "SaaS Metrics",
      "Business Intelligence",
      "Growth Strategy",
      "Technical Due Diligence",
    ],
    successStory: {
      title: "FinanceFlow - Strategic SaaS Growth",
      description:
        "Provided strategic consulting for a fintech SaaS platform, optimizing their technology stack and growth strategy. Our guidance helped them achieve €5M ARR in 18 months with exceptional unit economics.",
      metrics: [
        "€5M ARR in 18 months",
        "150% improvement in unit economics",
        "SOC 2 Type II certification",
        "40% reduction in churn rate",
      ],
    },
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Technical Co-founder",
    description: "On-demand technical leadership for non-technical founders",
    features: [
      "Technical Strategy & Roadmap",
      "Team Building & Management",
      "Technology Decision Making",
      "Investor Communication",
      "Due Diligence Support",
      "Ongoing Technical Guidance",
    ],
    technologies: ["Leadership", "Strategy", "Team Management", "Investor Relations"],
    successStory: {
      title: "EduFlow - Technical Leadership Success",
      description:
        "Served as technical co-founder for an EdTech startup led by a non-technical founder. Provided end-to-end technical leadership from MVP to Series A funding round, building a world-class product and team.",
      metrics: [
        "Series A funding achieved",
        "Technical team scaled to 15+",
        "Product launched in 6 months",
        "Zero technical debt accumulated",
      ],
    },
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <ProgressBar />
      <Navbar />
      <div className="relative w-full h-[800px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50 object-center"
          style={{ objectPosition: "center 30%" }}
        >
          <source src="/videos/services.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center pt-32">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Complete SaaS{" "}
            <span className="text-orange-500">Development</span>
            <br />
            Services
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-300 mb-12 max-w-3xl"
          >
            From MVP to scaling success - we provide end-to-end SaaS development 
            services for ambitious founders across EMEA.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl space-y-6"
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              At Digitrans, we don't just build software—we partner with visionary 
              founders to transform innovative ideas into market-leading SaaS products. 
              Our approach begins with deep understanding of your market, users, and 
              business goals. This foundation allows us to assemble the perfect team 
              of product strategists, UX designers, senior developers, and DevOps 
              engineers to build solutions that scale from MVP to market leadership.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our proven 6-step methodology has helped 50+ SaaS companies successfully 
              launch and scale their products. We focus on building technically 
              excellent, user-centric solutions with enterprise-grade security and 
              scalability from day one. Our clients achieve an 80% funding success 
              rate and 98% client satisfaction because we treat your success as our own.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedService(service)}
                className="cursor-pointer"
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-blue-400/20 hover:scale-[1.02] transition-all duration-200">
                  <div className="text-blue-500 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-white">
                      Key Features
                    </h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-gray-400 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3 text-white">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="text-sm px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story Dialog */}
      <Dialog
        open={!!selectedService}
        onOpenChange={() => setSelectedService(null)}
      >
        <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20 text-white border border-blue-500/10 backdrop-blur-sm">
          {selectedService?.successStory && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-white">
                  {selectedService.successStory.title}
                </DialogTitle>
                <DialogDescription className="text-gray-300 mt-4">
                  {selectedService.successStory.description}
                </DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {selectedService.successStory.metrics.map((metric, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800/50 p-4 rounded-lg"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-200">{metric}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
      <BackToTop />
      <StickyCTA />
    </div>
  );
}
