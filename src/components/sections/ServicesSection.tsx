import { Card } from "../ui/card";
import { motion, useAnimation } from "framer-motion";
import { Code2, Cloud, Smartphone, Blocks } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { useState, useEffect } from "react";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Enterprise Software Development",
    description:
      "Future-proof enterprise solutions built with scalable architecture and modern technology stacks for maximum business impact.",
    technologies: [
      "Microservices",
      "Event-Driven",
      "Cloud-Native",
      "API-First",
    ],
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Data Engineering & Analytics",
    description:
      "Transform raw data into actionable intelligence with our end-to-end data pipelines and advanced analytics solutions.",
    technologies: ["Apache Spark", "Snowflake", "dbt", "Airflow"],
  },
  {
    icon: <Cloud className="w-8 h-8" />,
    title: "Cloud & DevOps",
    description:
      "Accelerate innovation with seamless cloud transformation and DevOps automation that drives operational excellence.",
    technologies: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
  },
  {
    icon: <Blocks className="w-8 h-8" />,
    title: "AI/ML Solutions",
    description:
      "Harness the power of artificial intelligence with custom ML models and production-grade MLOps for enterprise applications.",
    technologies: ["TensorFlow", "PyTorch", "MLflow", "Kubeflow"],
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
    <section className="py-24 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            We deliver end-to-end software development services to help
            businesses grow and succeed in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={service.title} className="relative w-full">
              {/* Arrows between cards removed */}

              {/* Card with continuous animation */}
              <motion.div
                variants={{
                  hidden: { opacity: 0.7, y: 10, scale: 0.98 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate={controls}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
                className="w-full"
                onClick={() => setSelectedService(service)}
              >
                <Card className="w-full h-[400px] p-8 bg-purple-900/20 backdrop-blur border-purple-500/50 hover:border-purple-400 relative shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_25px_rgba(168,85,247,0.3)] transition-all duration-300 flex flex-col cursor-pointer">
                  {/* Service Number removed */}

                  {/* Icon with continuous pulse */}
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
                    className="text-purple-400 mb-6"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  {/* Technology tags removed */}
                </Card>
              </motion.div>
            </div>
          ))}
        </div>

        <Dialog
          open={!!selectedService}
          onOpenChange={() => setSelectedService(null)}
        >
          {selectedService && (
            <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border-purple-500/30 backdrop-blur-sm">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-4 text-purple-300">
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
                  >
                    {selectedService.icon}
                  </motion.div>
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
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
                  <ul className="space-y-2 text-gray-300">
                    {selectedService.title ===
                      "Enterprise Software Development" &&
                      [
                        "Custom enterprise solutions with scalable architecture",
                        "API-first development approach",
                        "Microservices architecture",
                        "Event-driven systems",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    {selectedService.title === "Data Engineering & Analytics" &&
                      [
                        "End-to-end data pipeline development",
                        "Real-time analytics solutions",
                        "Data warehouse design",
                        "Business intelligence dashboards",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    {selectedService.title === "Cloud & DevOps" &&
                      [
                        "Cloud migration and transformation",
                        "Infrastructure as Code (IaC)",
                        "CI/CD pipeline automation",
                        "Kubernetes orchestration",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                    {selectedService.title === "AI/ML Solutions" &&
                      [
                        "Custom ML model development",
                        "MLOps and model deployment",
                        "Computer vision solutions",
                        "Natural language processing",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {feature}
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          )}
        </Dialog>
      </div>
    </section>
  );
}
