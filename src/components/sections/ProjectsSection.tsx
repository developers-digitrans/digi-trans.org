import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "Global Financial Data Platform",
    description:
      "Built a secure, scalable data platform processing 15TB+ daily transactions with real-time fraud detection for a Fortune 100 bank, reducing operational costs by $45M annually.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=60",
    tags: ["Snowflake", "Apache Spark", "Kubernetes", "ML Ops"],
    blogUrl: "/blog/digital-transformation-banking-success-story",
  },
  {
    title: "Healthcare AI Diagnostic System",
    description:
      "Developed a HIPAA-compliant AI system for medical image analysis achieving 97.8% accuracy in early cancer detection, now used by 200+ hospitals nationwide.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60",
    tags: ["TensorFlow", "AWS", "HIPAA Compliant", "MLflow"],
    blogUrl: "/blog/cloud-migration-healthcare-case-study",
  },
  {
    title: "Enterprise E-commerce Analytics",
    description:
      "Engineered a cloud-native analytics platform processing 3M+ events/sec with sub-100ms latency, enabling real-time personalization that increased conversion rates by 32%.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60",
    tags: ["Apache Kafka", "Elasticsearch", "Grafana", "AWS"],
    blogUrl: "/blog/ai-retail-personalization-case-study",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Explore some of our recent work and see how we've helped businesses
            achieve their goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-800/30 hover:border-blue-700/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 z-10"></div>
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
              />
              <div className="relative z-20 p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.blogUrl}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-auto"
                >
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
