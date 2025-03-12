import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { BlogCard } from "../../ui/blog-card";
import {
  LineChart,
  DollarSign,
  FileText,
  BarChart,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: <LineChart className="w-8 h-8" />,
    title: "Financial Analytics",
    description:
      "Real-time insights into your business finances with powerful reporting tools.",
  },
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "Multi-Currency",
    description:
      "Handle transactions in multiple currencies with automatic exchange rates.",
  },
  {
    icon: <FileText className="w-8 h-8" />,
    title: "Automated Accounting",
    description:
      "Automate your accounting processes with smart transaction matching.",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Business Intelligence",
    description:
      "Make data-driven decisions with advanced analytics and insights.",
  },
];

const benefits = [
  "Cloud-Based",
  "Multi-Currency",
  "Automated Reports",
  "Bank Integration",
  "Custom Fields",
  "Role-Based Access",
  "Audit Trails",
  "API Access",
];

export default function Ledger() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="container mx-auto px-4 pt-32 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Modern Accounting Software
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Built for Growth
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Streamline your financial operations with powerful accounting
            software designed for modern businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
              onClick={() => window.open("https://app.getledger.com", "_blank")}
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </motion.div>
      </div>

      <section className="py-12 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg prose-invert max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-blue-800/30">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Transforming Financial Management for Modern Businesses
            </h2>

            <p>
              Ledgerly is a comprehensive financial management platform designed
              to meet the complex needs of today's growing businesses. Unlike
              traditional accounting software, Ledgerly combines powerful
              financial tools with intuitive design to create a seamless
              experience for finance teams of all sizes.
            </p>

            <p>
              With real-time financial insights, automated reconciliation, and
              advanced reporting capabilities, Ledgerly empowers businesses to
              make data-driven decisions faster and with greater confidence. Our
              platform integrates seamlessly with your existing systems while
              maintaining bank-grade security and compliance standards.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Why Businesses Choose Ledgerly
            </h3>

            <ul>
              <li>
                <strong>Streamlined Workflows:</strong> Automate repetitive
                tasks and reduce manual data entry with intelligent automation
                features.
              </li>
              <li>
                <strong>Real-time Visibility:</strong> Access up-to-the-minute
                financial data across your entire organization from anywhere.
              </li>
              <li>
                <strong>Multi-entity Support:</strong> Manage multiple business
                entities within a single platform with consolidated reporting.
              </li>
              <li>
                <strong>Advanced Security:</strong> Enterprise-grade security
                features protect your sensitive financial data.
              </li>
              <li>
                <strong>Seamless Integrations:</strong> Connect with your
                banking, payroll, and other business systems for a unified
                financial ecosystem.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Built for Financial Teams
            </h3>

            <p>
              Ledgerly is designed with the needs of modern finance
              professionals in mind. From CFOs seeking strategic insights to
              accountants managing day-to-day transactions, our platform
              provides the tools needed to excel in today's fast-paced business
              environment.
            </p>

            <p>
              With customizable dashboards, role-based access controls, and
              collaborative features, Ledgerly adapts to your team's unique
              workflows and processes. Whether you're a small business or a
              large enterprise, Ledgerly scales with your organization's growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              Ledger is more than just accounting software—it's a comprehensive
              financial management platform built for modern businesses. With
              real-time insights, automated workflows, and powerful reporting
              tools, Ledger helps you make informed decisions faster. Our
              platform seamlessly integrates with your existing systems while
              maintaining bank-grade security and compliance standards.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="text-blue-500 mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Everything you need in one place
            </h2>
            <p className="text-xl text-gray-400">
              Powerful features to help your business succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-2"
              >
                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Related Articles
            </h2>
            <p className="text-xl text-gray-400">
              Learn more about fintech and accounting
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard
              title="Real-time Analytics with Apache Kafka"
              description="Building real-time analytics pipelines processing millions of events per second using Apache Kafka and modern streaming technologies."
              image="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800"
              date="March 1, 2024"
              readTime="8 min read"
              slug="real-time-analytics-kafka"
            />
            <BlogCard
              title="Cloud-Native Architecture Patterns"
              description="Explore modern architecture patterns for building scalable, resilient cloud-native applications."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
              date="March 5, 2024"
              readTime="10 min read"
              slug="cloud-native-architecture-patterns"
            />
            <BlogCard
              title="How We Improve Our Website Speed"
              description="Learn about the techniques and tools we used to optimize our website performance and achieve better loading times."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
              date="March 15, 2024"
              readTime="8 min read"
              slug="how-we-improve-our-website-speed"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
