import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A full-featured online shopping platform with real-time inventory management.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Healthcare App",
    description:
      "Mobile application for patient management and telemedicine services.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800",
    tags: ["React Native", "Firebase", "HIPAA Compliant"],
  },
  {
    title: "FinTech Dashboard",
    description:
      "Real-time financial analytics dashboard with advanced data visualization.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    tags: ["Vue.js", "D3.js", "AWS"],
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-slate-600">
              Explore our recent projects and see how we've helped businesses
              achieve their goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-sm px-3 py-1 bg-slate-100 text-slate-600 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="https://app.get-ledger.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="w-full group">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
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
