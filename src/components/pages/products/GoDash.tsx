import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { BlogCard } from "../../ui/blog-card";
import {
  BarChart,
  Code2,
  Workflow,
  Share2,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "dbt-native",
    description:
      "Built for modern data teams using dbt. Version control your metrics alongside your dbt models.",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Self-service analytics",
    description:
      "Empower your team to explore data and create charts without writing SQL.",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Version controlled",
    description:
      "Track changes to metrics and dashboards in Git alongside your dbt project.",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "Collaborative",
    description: "Share insights and work together on metrics definitions.",
  },
];

const benefits = [
  "Open Source",
  "dbt Integration",
  "Git Version Control",
  "SQL Runner",
  "Custom Charts",
  "Metrics Layer",
  "Team Collaboration",
  "Self-hosted Option",
];

export default function GoDash() {
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
            The Open Source Business Intelligence Platform
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Built for dbt
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create and share beautiful dashboards powered by dbt metrics.
            Version controlled in Git.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
              onClick={() => window.open("https://app.getgodash.com", "_blank")}
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
              Analytics for the Modern Data Stack
            </h2>

            <p>
              GoDash is a powerful business intelligence platform built natively
              for dbt (data build tool). It bridges the gap between data
              transformation and visualization, allowing data teams to create
              and share insights directly from their dbt projects without
              switching contexts or duplicating metric definitions.
            </p>

            <p>
              Unlike traditional BI tools that exist in isolation from your data
              transformation layer, GoDash integrates seamlessly with your dbt
              workflow. This means your metrics are version-controlled alongside
              your models, ensuring consistency and eliminating the common
              problem of metric definition drift between teams.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              The dbt-Native Advantage
            </h3>

            <p>
              GoDash leverages the power of dbt's metrics layer to provide a
              unified approach to analytics:
            </p>

            <ul>
              <li>
                <strong>Version-Controlled Metrics:</strong> Define metrics once
                in dbt and use them consistently across all dashboards and
                reports.
              </li>
              <li>
                <strong>Git Integration:</strong> Track changes to dashboards
                and metrics alongside your dbt models, with full version history
                and collaboration features.
              </li>
              <li>
                <strong>Self-Service Analytics:</strong> Empower business users
                to explore data and create visualizations without writing SQL,
                while maintaining governance through the dbt metrics layer.
              </li>
              <li>
                <strong>Seamless Deployment:</strong> Deploy changes to both
                your data models and dashboards in a single workflow, ensuring
                they stay in sync.
              </li>
              <li>
                <strong>Metadata Inheritance:</strong> Automatically inherit
                descriptions, ownership information, and lineage from your dbt
                project.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Built for Data Teams
            </h3>

            <p>
              GoDash is designed with the modern data team workflow in mind,
              addressing the common pain points in the analytics development
              lifecycle:
            </p>

            <ul>
              <li>
                <strong>Collaborative Development:</strong> Work together on
                dashboards with Git-based version control, pull requests, and
                review processes.
              </li>
              <li>
                <strong>Testing and Validation:</strong> Test dashboard changes
                in development environments before deploying to production.
              </li>
              <li>
                <strong>Comprehensive Documentation:</strong> Automatically
                generate and maintain documentation for metrics and dashboards.
              </li>
              <li>
                <strong>Governance and Security:</strong> Implement role-based
                access controls and audit logs to maintain data governance
                standards.
              </li>
              <li>
                <strong>Performance Monitoring:</strong> Track query performance
                and optimize slow-running dashboards with built-in monitoring
                tools.
              </li>
            </ul>

            <p>
              Whether you're a data engineer maintaining the transformation
              layer, an analyst creating insights, or a business stakeholder
              consuming reports, GoDash provides a unified platform that
              respects the principles of the modern data stack while delivering
              powerful visualization capabilities.
            </p>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="pt-4 pb-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-4xl mx-auto"
          >
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur border border-gray-800/50 shadow-[0_0_15px_rgba(0,0,0,0.1)]">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oLZhaiN-FN0"
                title="Product Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              GoDash is a powerful business intelligence platform built natively
              for dbt. With version-controlled metrics, self-service analytics,
              and seamless dbt integration, GoDash empowers data teams to create
              and share insights faster. Our platform combines the power of dbt
              with modern visualization capabilities to help you make
              data-driven decisions.
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
              Powerful features to help your data team succeed
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
              Learn more about data analytics and visualization
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
              title="Building Enterprise Data Lakes"
              description="Learn how to design and implement scalable data lakes that process petabytes of data with real-time analytics capabilities."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
              date="March 15, 2024"
              readTime="15 min read"
              slug="building-enterprise-data-lakes"
            />
            <BlogCard
              title="Cloud-Native Architecture Patterns"
              description="Explore modern architecture patterns for building scalable, resilient cloud-native applications."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
              date="March 5, 2024"
              readTime="10 min read"
              slug="cloud-native-architecture-patterns"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
