import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Building2, Landmark, Rocket } from "lucide-react";

const clientCategories = [
  {
    icon: <Building2 className="w-8 h-8" />,
    title: "Fortune 500 Companies",
    description: "Enterprise solutions for industry leaders",
    href: "/clients/fortune-500-companies",
    features: [
      "Global Data Platforms",
      "Enterprise AI Solutions",
      "Cloud Transformation",
      "Digital Innovation",
    ],
  },
  {
    icon: <Landmark className="w-8 h-8" />,
    title: "Government Agencies",
    description: "Secure solutions for public sector",
    href: "/clients/gov-agencies",
    features: [
      "FedRAMP Solutions",
      "Secure Infrastructure",
      "Data Analytics",
      "Compliance Systems",
    ],
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Tech Startups",
    description: "Agile solutions for rapid growth",
    href: "/clients/tech-startups",
    features: [
      "MVP Development",
      "Scalable Architecture",
      "Cloud Solutions",
      "DevOps Automation",
    ],
  },
];

export default function Clients() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero
        headline="Our Clients"
        subheadline="Trusted by leading organizations across industries, from Fortune 500 companies to innovative startups."
        showCards={false}
        videoUrl="/videos/clients.mp4"
      />

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="text-blue-500 mb-6">{category.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    {category.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  <div className="space-y-3 mb-6">
                    {category.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                        <span className="text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <a href={category.href}>
                    <Button variant="outline" className="w-full group">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Trust Section */}
          <section className="py-24">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="prose prose-invert max-w-none"
              >
                <h2 className="text-3xl font-bold mb-6">
                  Trusted by Industry Leaders
                </h2>
                <p className="text-xl text-gray-400 mb-8">
                  From Fortune 500 companies to innovative startups, we've
                  helped organizations across industries achieve their digital
                  transformation goals. Our proven track record includes
                  successful partnerships with global banks, healthcare
                  providers, and technology leaders.
                </p>
                <p className="text-xl text-gray-400">
                  Join our growing network of satisfied clients and experience
                  the difference of working with a dedicated team of technology
                  experts committed to your success.
                </p>
              </motion.div>
            </div>
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
