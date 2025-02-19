import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
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

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Machine Learning & Data Science",
    description:
      "End-to-end ML solutions from data preparation to model deployment",
    features: [
      "Custom ML Model Development",
      "Deep Learning Solutions",
      "Computer Vision Systems",
      "NLP & Text Analytics",
      "Predictive Analytics",
      "Time Series Analysis",
    ],
    technologies: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "OpenCV"],
    successStory: {
      title: "Global Retail Analytics Platform",
      description:
        "Built an enterprise ML platform for a Fortune 500 retailer, enabling automated demand forecasting and inventory optimization across 2,000+ stores. The system processes 50TB+ of daily data, providing real-time insights and predictions.",
      metrics: [
        "40% reduction in stockouts",
        "25% increase in inventory turnover",
        "$100M+ annual savings",
        "99.9% prediction accuracy",
      ],
    },
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI & LLM Solutions",
    description:
      "Custom AI solutions and LLM model fine-tuning for enterprise needs",
    features: [
      "LLM Model Fine-tuning",
      "Custom AI Agents",
      "Prompt Engineering",
      "RAG Implementation",
      "AI Model Optimization",
      "Enterprise AI Integration",
    ],
    technologies: [
      "OpenAI",
      "LangChain",
      "Anthropic",
      "Hugging Face",
      "LlamaIndex",
    ],
    successStory: {
      title: "Enterprise AI Assistant Platform",
      description:
        "Developed a custom LLM-powered platform for a financial institution, handling complex queries across 1M+ documents. Implemented RAG with enterprise security and compliance measures.",
      metrics: [
        "85% reduction in query time",
        "95% accuracy in responses",
        "500K+ queries processed daily",
        "60% cost reduction vs. traditional methods",
      ],
    },
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud Migration & Data Engineering",
    description:
      "Seamless cloud migration and robust data pipeline development",
    features: [
      "Cloud Infrastructure Design",
      "Data Pipeline Development",
      "ETL Process Automation",
      "Data Warehouse Solutions",
      "Real-time Analytics",
      "Data Lake Architecture",
    ],
    technologies: ["AWS", "Azure", "GCP", "Snowflake", "Apache Spark"],
    successStory: {
      title: "Enterprise Data Platform Migration",
      description:
        "Led the migration of a healthcare provider's data infrastructure to cloud, implementing a modern data mesh architecture. Automated ETL processes and established real-time analytics capabilities.",
      metrics: [
        "100TB+ data migrated",
        "Zero downtime during migration",
        "70% faster data processing",
        "$2M annual infrastructure savings",
      ],
    },
  },
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Software Development",
    description:
      "Full-stack development with modern technologies and best practices",
    features: [
      "Web Applications",
      "Mobile Development",
      "API Development",
      "Microservices",
      "DevOps Automation",
      "Quality Assurance",
    ],
    technologies: ["React", "Node.js", "Python", "TypeScript", "Docker"],
    successStory: {
      title: "E-commerce Platform Modernization",
      description:
        "Rebuilt a legacy e-commerce platform using microservices architecture, enabling the client to handle 10x more traffic and implement new features rapidly.",
      metrics: [
        "99.99% uptime achieved",
        "3x faster feature deployment",
        "5M+ daily active users",
        "50% improvement in page load times",
      ],
    },
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "IT Consultancy",
    description: "Strategic technology consulting and digital transformation",
    features: [
      "Technology Strategy",
      "Digital Transformation",
      "Architecture Design",
      "Security Assessment",
      "Performance Optimization",
      "Tech Stack Selection",
    ],
    technologies: [
      "Enterprise Architecture",
      "Agile",
      "DevOps",
      "Cloud Native",
    ],
    successStory: {
      title: "Digital Transformation Strategy",
      description:
        "Guided a traditional manufacturing company through complete digital transformation, implementing IoT solutions and modernizing their entire IT infrastructure.",
      metrics: [
        "30% operational cost reduction",
        "45% increase in productivity",
        "100% digital process adoption",
        "ROI achieved in 18 months",
      ],
    },
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Remote Team Building",
    description: "Build and manage high-performing remote development teams",
    features: [
      "Team Assessment",
      "Talent Acquisition",
      "Team Management",
      "Process Implementation",
      "Performance Tracking",
      "Knowledge Transfer",
    ],
    technologies: ["Agile", "Scrum", "Kanban", "DevOps", "GitLab"],
    successStory: {
      title: "Global Development Team Setup",
      description:
        "Helped a SaaS startup scale their development capabilities by building and managing a distributed team across multiple time zones, implementing efficient workflows and communication practices.",
      metrics: [
        "Team scaled from 5 to 50+ developers",
        "90% retention rate",
        "2x faster product delivery",
        "24/7 development coverage",
      ],
    },
  },
];

export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero
        headline="Our Services"
        subheadline="Comprehensive technology solutions to drive your business forward with AI, cloud, and modern software development."
        showCards={false}
      />

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
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800 hover:scale-[1.02] transition-all duration-200">
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
        <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border-gray-800">
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
    </div>
  );
}
