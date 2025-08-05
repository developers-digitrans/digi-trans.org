import { Card } from "../ui/card";
import { motion, useAnimation } from "framer-motion";
import { Code2, Cloud, Database, Bot, GitMerge, Brain, LineChart, ArrowRight, CheckCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";

const services = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Big Data & AI Consultancy",
    description:
      "Transform your business with intelligent data strategies, machine learning models, and AI-powered insights that drive measurable results.",
    technologies: ["Python", "TensorFlow", "Apache Spark", "Data Warehousing"],
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "AI-Assisted Accounting SaaS",
    description:
      "Intelligent financial management platform that automates bookkeeping, detects anomalies, and provides predictive analytics for smarter decisions.",
    technologies: ["AI/ML", "Real-time Processing", "Financial APIs", "Predictive Analytics"],
  },
  {
    icon: <GitMerge className="w-8 h-8" />,
    title: "AI Project Management SaaS",
    description:
      "Smart collaboration platform that predicts project outcomes, optimizes resource allocation, and automates workflow management for maximum efficiency.",
    technologies: ["Predictive AI", "Workflow Automation", "Team Analytics", "Integration APIs"],
  },
  {
    icon: <Database className="w-8 h-8" />,
    title: "AI Platform Integration",
    description:
      "Custom AI ecosystems that connect your apps, documents, and team workflows into one intelligent platform (inspired by solutions like Onyx.app).",
    technologies: ["API Integration", "Document AI", "Workflow Intelligence", "Custom Platforms"],
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState(null);
  const controls = useAnimation();

  useEffect(() => {
    // Start the animation sequence immediately and repeat indefinitely
    const startAnimation = async () => {
      await controls.start("visible");
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Pause at the end
      await controls.start("hidden");
      await new Promise((resolve) => setTimeout(resolve, 500)); // Brief pause before restarting
      startAnimation(); // Restart the animation
    };

    startAnimation();
  }, [controls]);

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative z-10"
        >
          <span className="inline-block mb-3 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">Our Expertise</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">AI-Powered Business Solutions</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From intelligent data strategies to custom AI platforms, we transform businesses with cutting-edge artificial intelligence and automation.
          </p>
          
          {/* Metrics that stand out */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-purple-400">200+</span>
              <span className="text-gray-300">AI Models Deployed</span>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-blue-400">300%</span>
              <span className="text-gray-300">Average ROI Improvement</span>
            </div>
            <div className="w-px h-8 bg-gray-700"></div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-indigo-400">85%</span>
              <span className="text-gray-300">Faster Business Insights</span>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative w-full"
            >
              {/* Card with glass morphism and hover effects */}
              <div
                onClick={() => setSelectedService(service)}
                className="group relative h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-xl blur-sm transform scale-105 group-hover:scale-110 transition-all duration-300 -z-10"></div>
                <Card className="h-full w-full p-8 bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 hover:border-purple-400/40 relative shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden group">
                  {/* Hovering glow effect */}
                  <div className="absolute -inset-px bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
                  
                  {/* Icon with glow */}
                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br from-purple-900/50 to-blue-900/50 border border-purple-500/30">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className="text-purple-300"
                      >
                        {service.icon}
                      </motion.div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-white relative z-10 group-hover:text-purple-300 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow relative z-10 group-hover:text-gray-200 transition-colors duration-300">{service.description}</p>
                  
                  {/* Technology tags */}
                  <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                    {service.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 rounded-full bg-purple-900/50 text-purple-300 border border-purple-500/30">
                        {tech}
                      </span>
                    ))}
                    {service.technologies.length > 2 && (
                      <span className="text-xs px-2 py-1 rounded-full bg-blue-900/50 text-blue-300 border border-blue-500/30">
                        +{service.technologies.length - 2} more
                      </span>
                    )}
                  </div>
                  
                  {/* Learn more button with arrow */}
                  <div className="flex items-center text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors duration-300 relative z-10">
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>



        <Dialog
          open={!!selectedService}
          onOpenChange={() => setSelectedService(null)}
        >
          {selectedService && (
            <DialogContent className="sm:max-w-[650px] bg-gradient-to-br from-gray-900 to-gray-950 text-white border-purple-500/30 backdrop-blur-sm shadow-xl shadow-purple-500/10">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex-shrink-0"
                  >
                    {selectedService.icon}
                  </motion.div>
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-gray-300">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-purple-900/30 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-purple-300">
                    Key Features
                  </h4>
                  <ul className="space-y-3 text-gray-300">
                    {selectedService.title === "MVP Development" &&
                      [
                        "User research and market validation",
                        "Technical architecture and planning",
                        "Agile development with weekly demos",
                        "Production deployment and launch",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-purple-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    {selectedService.title === "Product Strategy & Design" &&
                      [
                        "Product strategy and roadmap development",
                        "User persona definition and research",
                        "Wireframing and prototyping",
                        "UX/UI design with conversion optimization",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-purple-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    {selectedService.title === "Full-Stack Development" &&
                      [
                        "Modern frontend development with React/Next.js",
                        "Scalable backend APIs with Python/Node.js",
                        "Database design and optimization",
                        "Third-party integrations and APIs",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-purple-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    {selectedService.title === "DevOps & Scaling" &&
                      [
                        "Cloud infrastructure setup (AWS/Azure/GCP)",
                        "Automated CI/CD pipelines",
                        "Monitoring, logging, and alerting",
                        "Auto-scaling and performance optimization",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-full bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-purple-400" />
                          </div>
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
                <div className="pt-4 mt-4 border-t border-purple-500/20">
                  <Button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    onClick={() => {
                      setSelectedService(null);
                      window.open(`/services/${selectedService.title.toLowerCase().replace(/\s+/g, '-')}`, "_self");
                    }}
                  >
                    <span className="flex items-center">
                      Learn more about {selectedService.title}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
