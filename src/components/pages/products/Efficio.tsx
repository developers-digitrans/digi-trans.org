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
      "List, Kanban, Calendar, and Gantt views to visualize your business data.",
  },
  {
    icon: <Filter className="w-8 h-8" />,
    title: "Custom Filters",
    description:
      "Create and save custom filters to quickly find relevant information.",
  },
  {
    icon: <List className="w-8 h-8" />,
    title: "Business Planning",
    description:
      "Plan and track business metrics with custom fields and properties.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description: "Real-time updates and seamless team communication.",
  },
];

const benefits = [
  "All-in-One Platform",
  "Self-Hosted Option",
  "Real-time Updates",
  "Multiple Views",
  "Custom Properties",
  "Rich Text Editor",
  "File Attachments",
  "API Access",
];

function Efficio() {
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
            Business Management,
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Reimagined
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The everything app for your business. Plan, track, and deliver
            results with a modern, intuitive interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
              onClick={() => window.open("https://app.efficio.ai", "_blank")}
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
              One Platform for Your Entire Business
            </h2>

            <p>
              Efficio is a revolutionary all-in-one business management platform
              that consolidates the functionality of dozens of specialized tools
              into a single, cohesive system. In today's fragmented software
              landscape, businesses waste valuable time and resources managing
              multiple disconnected applications, leading to data silos,
              inefficient workflows, and unnecessary complexity.
            </p>

            <p>
              Efficio solves this problem by providing a comprehensive platform
              that handles everything from project management and customer
              relationships to finance, HR, and operations—all with a
              consistent, intuitive interface that eliminates the learning curve
              associated with multiple specialized tools.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              The End of Software Fragmentation
            </h3>

            <p>
              Efficio brings together essential business functions that
              traditionally require separate software subscriptions:
            </p>

            <ul>
              <li>
                <strong>Project & Task Management:</strong> Plan, track, and
                collaborate on projects with flexible views including Kanban,
                list, calendar, and Gantt charts.
              </li>
              <li>
                <strong>CRM & Sales Pipeline:</strong> Manage leads, track
                opportunities, and nurture customer relationships throughout the
                entire sales cycle.
              </li>
              <li>
                <strong>Document Management:</strong> Create, edit, and organize
                documents, spreadsheets, and presentations with real-time
                collaboration.
              </li>
              <li>
                <strong>Team Communication:</strong> Chat, video meetings, and
                threaded discussions integrated directly into your workflows.
              </li>
              <li>
                <strong>Financial Management:</strong> Track expenses, generate
                invoices, manage budgets, and gain financial insights.
              </li>
              <li>
                <strong>HR & Talent:</strong> Streamline hiring, onboarding,
                time tracking, and performance management.
              </li>
              <li>
                <strong>Knowledge Base:</strong> Build and maintain an internal
                wiki with searchable documentation and standard operating
                procedures.
              </li>
              <li>
                <strong>Analytics & Reporting:</strong> Generate custom reports
                and dashboards across all aspects of your business.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Designed for Business Efficiency
            </h3>

            <p>
              Efficio is built around the principles of efficiency and
              productivity:
            </p>

            <ul>
              <li>
                <strong>Unified Data:</strong> Eliminate duplicate data entry
                and inconsistencies with a single source of truth for all
                business information.
              </li>
              <li>
                <strong>Seamless Workflows:</strong> Create end-to-end processes
                that flow naturally across traditional department boundaries.
              </li>
              <li>
                <strong>Automation:</strong> Reduce manual work with powerful
                automation capabilities that handle routine tasks and complex
                workflows.
              </li>
              <li>
                <strong>Contextual Collaboration:</strong> Discuss work directly
                in context, with conversations attached to the relevant
                projects, documents, or customer records.
              </li>
              <li>
                <strong>Customization:</strong> Adapt the platform to your
                specific business needs with custom fields, workflows, and
                modules.
              </li>
              <li>
                <strong>Mobile Access:</strong> Manage your business from
                anywhere with fully-featured mobile applications.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              For Businesses of All Sizes
            </h3>

            <p>
              Whether you're a small business looking to consolidate your tech
              stack or a growing company seeking to streamline operations,
              Efficio scales to meet your needs:
            </p>

            <ul>
              <li>
                <strong>Small Business:</strong> Replace 5-10 separate software
                subscriptions with a single, affordable platform.
              </li>
              <li>
                <strong>Mid-Market:</strong> Eliminate departmental silos and
                create cross-functional visibility and collaboration.
              </li>
              <li>
                <strong>Enterprise:</strong> Provide a unified experience across
                departments while maintaining advanced security and compliance
                features.
              </li>
            </ul>

            <p>
              By bringing everything your business needs into one platform,
              Efficio reduces costs, improves productivity, and provides
              unprecedented visibility into your operations—allowing you to
              focus on growth and innovation rather than managing disparate
              systems.
            </p>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="pt-8 pb-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full max-w-4xl mx-auto"
          >
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-900/50 backdrop-blur border border-gray-800">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/CCJJl66t4Ak"
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
              Efficio is a modern business management platform designed for
              organizations that demand flexibility and power. With multiple
              views including Kanban, List, and Timeline, teams can visualize
              their work in ways that make sense for them. Our real-time
              collaboration features, custom workflows, and powerful automation
              capabilities help businesses stay productive and achieve their
              goals.
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
              Learn more about business management and collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard
              title="The Rise of Everything Apps in Enterprise"
              description="How consolidated platforms are replacing fragmented software ecosystems in modern businesses."
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
              date="April 5, 2024"
              readTime="10 min read"
              slug="rise-of-everything-apps"
            />
            <BlogCard
              title="Reducing Context Switching for Productivity"
              description="Research shows that constant app switching can reduce productivity by up to 40%. Learn how to minimize this cognitive drain."
              image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800"
              date="April 12, 2024"
              readTime="8 min read"
              slug="reducing-context-switching"
            />
            <BlogCard
              title="The Total Cost of Software Fragmentation"
              description="Understanding the hidden costs of maintaining multiple specialized applications versus a unified platform approach."
              image="https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800"
              date="April 18, 2024"
              readTime="12 min read"
              slug="cost-of-software-fragmentation"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Efficio;
