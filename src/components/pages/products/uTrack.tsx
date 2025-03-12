import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { BlogCard } from "../../ui/blog-card";
import {
  ClipboardList,
  Users,
  Calendar,
  LineChart,
  ArrowRight,
  CheckCircle,
  Zap,
  Blocks,
  Workflow,
  Layout,
  Filter,
  List,
  Table,
} from "lucide-react";

const features = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Multiple Views",
    description:
      "List, Kanban, Calendar, and Gantt views to visualize your projects.",
  },
  {
    icon: <Filter className="w-8 h-8" />,
    title: "Custom Filters",
    description:
      "Create and save custom filters to quickly find relevant issues.",
  },
  {
    icon: <List className="w-8 h-8" />,
    title: "Issue Planning",
    description: "Plan and track issues with custom fields and properties.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Real-time updates and seamless team communication.",
  },
];

const benefits = [
  "100% Open Source",
  "Self-Hosted Option",
  "Real-time Updates",
  "Multiple Views",
  "Custom Properties",
  "Rich Text Editor",
  "File Attachments",
  "API Access",
];

export default function UTrack() {
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
            Project Management,
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Reimagined
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The open source alternative to Jira. Plan, track, and deliver
            projects with a modern, intuitive interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
              onClick={() => window.open("https://app.getutrack.com", "_blank")}
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
              A Better Way to Manage Projects
            </h2>

            <p>
              uTrack is a modern project management platform designed for teams
              that demand flexibility and power. Born out of frustration with
              rigid, complex tools, uTrack provides a refreshing alternative
              that adapts to how your team actually works.
            </p>

            <p>
              Unlike traditional project management software, uTrack combines
              powerful features with an intuitive interface that teams actually
              enjoy using. With multiple views including Kanban, List, Calendar,
              and Gantt, teams can visualize their work in ways that make sense
              for their specific workflows and preferences.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Designed for Modern Teams
            </h3>

            <p>
              Today's teams work differently. They need tools that support
              asynchronous collaboration, provide real-time updates, and
              integrate seamlessly with their existing tech stack. uTrack
              delivers on all fronts with features built specifically for
              contemporary work environments:
            </p>

            <ul>
              <li>
                <strong>Flexible Workflows:</strong> Customize your process with
                drag-and-drop simplicity. Create the perfect workflow for your
                team's unique needs.
              </li>
              <li>
                <strong>Real-time Collaboration:</strong> See changes as they
                happen. Comment, assign, and update without refresh delays or
                version conflicts.
              </li>
              <li>
                <strong>Custom Fields:</strong> Track exactly what matters to
                your team with customizable properties for any type of
                information.
              </li>
              <li>
                <strong>Powerful Integrations:</strong> Connect seamlessly with
                GitHub, Slack, Google Drive, and dozens of other tools your team
                already uses.
              </li>
              <li>
                <strong>Automation:</strong> Eliminate repetitive tasks with
                rule-based automations that keep your projects moving forward.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Open Source Advantage
            </h3>

            <p>
              As an open source platform, uTrack offers unparalleled
              transparency, customization options, and community support.
              Organizations can self-host for complete data control or use our
              cloud offering for convenience. Our active community continuously
              contributes improvements, integrations, and extensions that
              benefit all users.
            </p>

            <p>
              Whether you're a software development team tracking sprints, a
              marketing team managing campaigns, or a product team organizing
              your roadmap, uTrack provides the flexibility and power you need
              to succeed without the complexity that slows you down.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              uTrack is a modern project management platform designed for teams
              that demand flexibility and power. With multiple views including
              Kanban, List, and Timeline, teams can visualize their work in ways
              that make sense for them. Our real-time collaboration features,
              custom workflows, and powerful automation capabilities help teams
              stay productive and deliver projects on time.
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
              Powerful features to help your team succeed
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
              Learn more about project management and collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
            <BlogCard
              title="MLOps Best Practices for Production AI Systems"
              description="A comprehensive guide to implementing MLOps in enterprise environments, from model training to production deployment."
              image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800"
              date="March 10, 2024"
              readTime="12 min read"
              slug="mlops-best-practices"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
