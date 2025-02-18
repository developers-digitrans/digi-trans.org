import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import {
  Code2,
  Cloud,
  Smartphone,
  Blocks,
  Database,
  Shield,
  Brain,
  Cog,
} from "lucide-react";

const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Web Development",
    description:
      "Full-cycle web development services with a focus on scalable architecture and modern tech stack.",
    technologies: ["React", "Node.js", "Ruby on Rails", "Vue.js"],
    features: [
      "Custom Web Applications",
      "Progressive Web Apps",
      "E-commerce Solutions",
      "API Development",
    ],
  },
  // ... rest of the services array
];

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero
        headline="Our Services"
        subheadline="We provide end-to-end software development services to help businesses build innovative solutions and achieve digital transformation."
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
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                  <div className="text-blue-600 mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Features</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="text-slate-600 flex items-center"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Technologies</h4>
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
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
