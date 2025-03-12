import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { BlogCard } from "../../ui/blog-card";
import {
  Database,
  Network,
  Workflow,
  Zap,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: <Database className="w-8 h-8" />,
    title: "Data Orchestration",
    description: "Build, run, and manage data pipelines with a modern UI.",
  },
  {
    icon: <Network className="w-8 h-8" />,
    title: "Data Integration",
    description: "Connect to any data source with 100+ built-in integrations.",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Pipeline Management",
    description:
      "Monitor and debug data pipelines with real-time observability.",
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Real-time Processing",
    description: "Process streaming data with low-latency transformations.",
  },
];

const benefits = [
  "Open Source",
  "Python-based",
  "100+ Integrations",
  "Real-time Processing",
  "Data Quality",
  "Version Control",
  "Monitoring",
  "API Access",
];

export default function BigBytes() {
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
            The Modern Data Pipeline Platform
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Built for Scale
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build, run, and scale data pipelines for ETL, ML, and real-time
            analytics.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
              onClick={() =>
                window.open("https://app.getbigbytes.com", "_blank")
              }
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
              Data Pipeline Orchestration Reimagined
            </h2>

            <p>
              BigBytes is a modern data pipeline platform that simplifies ETL
              and data processing at scale. Designed for data engineers and
              analytics teams, BigBytes combines the power of distributed
              computing with an intuitive user interface to make building and
              maintaining data pipelines accessible to everyone.
            </p>

            <p>
              Unlike traditional ETL tools that struggle with modern data
              volumes and complexity, BigBytes was built from the ground up to
              handle petabyte-scale data processing, real-time streaming, and
              complex transformation workflows. Our platform empowers teams to
              build reliable, scalable data pipelines without getting bogged
              down in infrastructure management.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              End-to-End Data Pipeline Management
            </h3>

            <p>
              BigBytes provides a comprehensive solution for the entire data
              pipeline lifecycle:
            </p>

            <ul>
              <li>
                <strong>Data Integration:</strong> Connect to over 100 data
                sources and destinations with pre-built connectors for
                databases, APIs, file systems, and cloud services.
              </li>
              <li>
                <strong>Data Transformation:</strong> Transform data using SQL,
                Python, or our visual transformation builder with support for
                complex operations and custom functions.
              </li>
              <li>
                <strong>Workflow Orchestration:</strong> Design and schedule
                complex workflows with dependencies, conditional execution, and
                error handling.
              </li>
              <li>
                <strong>Real-time Processing:</strong> Process streaming data
                with low-latency transformations using our integrated streaming
                engine.
              </li>
              <li>
                <strong>Monitoring and Observability:</strong> Track pipeline
                health, performance metrics, and data quality with comprehensive
                monitoring tools.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Built for Enterprise Scale
            </h3>

            <p>
              BigBytes is designed to meet the demands of enterprise data
              environments with features that ensure reliability, security, and
              governance:
            </p>

            <ul>
              <li>
                <strong>Horizontal Scaling:</strong> Automatically scale
                processing resources based on workload demands, from gigabytes
                to petabytes.
              </li>
              <li>
                <strong>High Availability:</strong> Built-in redundancy and
                failover mechanisms ensure your data pipelines keep running even
                during infrastructure failures.
              </li>
              <li>
                <strong>Data Quality:</strong> Integrated data quality checks
                and validation rules to ensure the integrity of your data
                throughout the pipeline.
              </li>
              <li>
                <strong>Version Control:</strong> Track changes to pipeline
                definitions with Git integration and rollback capabilities.
              </li>
              <li>
                <strong>Security and Compliance:</strong> Role-based access
                control, audit logging, and encryption features to meet
                enterprise security requirements.
              </li>
              <li>
                <strong>Metadata Management:</strong> Automatically track data
                lineage, schema changes, and pipeline dependencies.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Deployment Flexibility
            </h3>

            <p>
              BigBytes offers flexible deployment options to suit your
              organization's needs:
            </p>

            <ul>
              <li>
                <strong>Cloud-Native:</strong> Deploy on AWS, Azure, or GCP with
                optimized configurations for each cloud provider.
              </li>
              <li>
                <strong>Self-Hosted:</strong> Run BigBytes in your own
                infrastructure with our enterprise distribution.
              </li>
              <li>
                <strong>Hybrid:</strong> Combine cloud and on-premises resources
                in a unified data platform.
              </li>
            </ul>

            <p>
              Whether you're building data lakes, data warehouses, or real-time
              analytics systems, BigBytes provides the foundation for reliable,
              scalable data pipelines that grow with your organization's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              BigBytes is a modern data pipeline platform that simplifies ETL
              and data processing at scale. With support for 100+ integrations,
              real-time processing capabilities, and built-in monitoring,
              BigBytes helps data teams build and maintain reliable data
              pipelines. Our platform combines ease of use with enterprise-grade
              features to handle your most demanding data workflows.
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
              Learn more about data engineering and analytics
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard
              title="Building Enterprise Data Lakes: A Complete Guide"
              description="Learn how to design and implement scalable data lakes that process petabytes of data with real-time analytics capabilities."
              image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800"
              date="March 15, 2024"
              readTime="15 min read"
              slug="building-enterprise-data-lakes"
            />
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
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
