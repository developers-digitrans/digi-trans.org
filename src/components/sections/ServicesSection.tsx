import { Card } from "../ui/card";
import { motion } from "framer-motion";
import { Code2, Cloud, Smartphone, Blocks } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { useState } from "react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900 border-gray-800 cursor-pointer transform hover:scale-[1.02] transition-all duration-200"
                onClick={() => setSelectedService(service)}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-sm px-3 py-1 bg-blue-50 text-blue-600 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <Dialog
          open={!!selectedService}
          onOpenChange={() => setSelectedService(null)}
        >
          {selectedService && (
            <DialogContent className="sm:max-w-[600px] bg-gray-900 text-white border-gray-800">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center gap-4">
                  {selectedService.icon}
                  {selectedService.title}
                </DialogTitle>
                <DialogDescription className="text-gray-400">
                  {selectedService.description}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2 text-gray-400">
                    {selectedService.title ===
                      "Enterprise Software Development" &&
                      [
                        "Custom enterprise solutions with scalable architecture",
                        "API-first development approach",
                        "Microservices architecture",
                        "Event-driven systems",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
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
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
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
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
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
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
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
