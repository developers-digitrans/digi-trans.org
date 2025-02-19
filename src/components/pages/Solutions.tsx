import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Building2, Network, Shield, Workflow } from "lucide-react";

const solutions = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Enterprise Solutions",
    description: "Custom solutions for large organizations",
    href: "/solutions/enterprise-solutions",
    features: [
      "Scalable Architecture",
      "Integration Services",
      "Custom Development",
      "Enterprise Support",
    ],
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Digital Transformation",
    description: "Modernize your business processes",
    href: "/solutions/digital-transformation",
    features: [
      "Process Automation",
      "Legacy Modernization",
      "Cloud Migration",
      "Digital Workplace",
    ],
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Data Security",
    description: "Protect your valuable data assets",
    href: "/solutions/data-security",
    features: [
      "Encryption Solutions",
      "Access Control",
      "Threat Detection",
      "Compliance Management",
    ],
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero
        headline="Enterprise Solutions"
        subheadline="Transform your business with our comprehensive suite of enterprise-grade solutions."
        showCards={false}
      />

      {/* Introduction Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6 text-white">
              Driving Digital Excellence
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              At Digitrans, we understand that every enterprise faces unique
              challenges in today's rapidly evolving digital landscape. Our
              comprehensive suite of solutions is designed to address these
              challenges head-on, combining cutting-edge technology with
              industry best practices.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              From modernizing legacy systems to implementing robust security
              measures, our solutions are tailored to help your organization
              stay competitive and efficient. We leverage our expertise in cloud
              computing, AI, and data analytics to deliver solutions that drive
              real business value.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="text-blue-500 mb-6">{solution.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {solution.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{solution.description}</p>
                  <div className="space-y-3 mb-6">
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href={solution.href}>
                    <Button variant="outline" className="w-full group">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
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
