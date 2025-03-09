import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { BlogCard } from "../../ui/blog-card";
import {
  CheckCircle,
  ArrowRight,
  Calendar,
  Users,
  MessageSquare,
  Clock,
  BarChart,
  Layers,
  Zap,
  Workflow,
  GitBranch,
  Repeat,
} from "lucide-react";

const features = [
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Task Management",
    description:
      "Organize tasks with customizable boards, lists, and cards. Track progress with intuitive drag-and-drop interfaces.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Team Collaboration",
    description:
      "Work together seamlessly with real-time updates, comments, and notifications. Assign tasks and track team workloads.",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Workflow Automation",
    description:
      "Automate repetitive processes with custom triggers and actions. Create rules to streamline your team's workflow.",
  },
  {
    icon: <BarChart className="w-8 h-8" />,
    title: "Insights & Reporting",
    description:
      "Gain visibility into project progress with customizable dashboards and reports. Track metrics that matter to your team.",
  },
];

const benefits = [
  "Intuitive Interface",
  "Customizable Workflows",
  "Real-time Collaboration",
  "Powerful Integrations",
  "Time Tracking",
  "Mobile Access",
  "Detailed Analytics",
  "Enterprise Security",
];

const useCases = [
  {
    title: "Software Development",
    description:
      "Track features, bugs, and sprints with customizable workflows that adapt to your development process. Integrate with GitHub, GitLab, and other developer tools.",
    icon: <GitBranch className="w-8 h-8" />,
  },
  {
    title: "Marketing Teams",
    description:
      "Plan campaigns, manage content calendars, and track performance metrics. Collaborate on creative assets and maintain brand consistency across channels.",
    icon: <Layers className="w-8 h-8" />,
  },
  {
    title: "Product Management",
    description:
      "Organize product roadmaps, gather customer feedback, and prioritize features. Keep stakeholders informed with customizable dashboards and reports.",
    icon: <Repeat className="w-8 h-8" />,
  },
];

export default function Ember() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative w-full h-[800px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          <source src="/videos/utrack.mp4" type="video/mp4" />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Work Management,
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              Reimagined
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl"
          >
            The all-in-one workspace for modern teams. Plan, track, and deliver
            projects with a flexible, intuitive platform.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
              onClick={() =>
                window.open("https://app.huly.io/signup", "_blank")
              }
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200"
              onClick={() => window.open("https://docs.huly.io", "_blank")}
            >
              View Documentation
            </Button>
          </motion.div>
        </div>
      </div>

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
                src="https://www.youtube.com/embed/WKmpm0ms_Sg"
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
              Huly is a powerful work management platform designed for modern
              teams that need flexibility and efficiency. With customizable
              workflows, real-time collaboration features, and powerful
              integrations, Huly helps teams stay organized, communicate
              effectively, and deliver projects on time. Whether you're managing
              software development, marketing campaigns, or product roadmaps,
              Huly adapts to your team's unique processes and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Powerful Features for Modern Teams
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to plan, track, and deliver your best work
            </p>
          </motion.div>

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

      {/* Multiple Views Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Multiple Views for Every Workflow
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Visualize your work in the way that makes the most sense for
                your team. Switch between views with a single click.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                    <Layers className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Board View
                    </h4>
                    <p className="text-gray-400">
                      Kanban-style boards for visual task management and
                      workflow tracking
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                    <Layers className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      List View
                    </h4>
                    <p className="text-gray-400">
                      Structured lists for detailed task management and
                      prioritization
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                    <Calendar className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Calendar View
                    </h4>
                    <p className="text-gray-400">
                      Time-based visualization for scheduling and deadline
                      management
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-blue-500/20 p-2 rounded-full mt-1">
                    <BarChart className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-white">
                      Dashboard View
                    </h4>
                    <p className="text-gray-400">
                      Customizable dashboards with charts and metrics for
                      project insights
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-xl overflow-hidden border border-gray-800 shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80"
                alt="Multiple views in Huly"
                className="w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tailored for Every Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how Huly adapts to different workflows and team
              structures
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="text-blue-500 mb-6">{useCase.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4 text-white">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400">{useCase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Seamless Integrations
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Connect with the tools you already use to create a unified
              workflow
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-5xl mx-auto">
            {[
              "GitHub",
              "Slack",
              "Google Drive",
              "Dropbox",
              "Figma",
              "Zapier",
              "Microsoft Teams",
              "Zoom",
              "GitLab",
              "Jira",
              "Notion",
              "Trello",
            ].map((integration, index) => (
              <motion.div
                key={integration}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-4 bg-gray-800/30 backdrop-blur rounded-lg border border-gray-700 hover:border-blue-500/50 transition-colors"
              >
                <span className="text-white font-medium">{integration}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black">
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Trusted by Teams Worldwide
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              See what our customers have to say about Huly
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-900/50 backdrop-blur p-8 rounded-xl border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=John"
                    alt="John Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">John Smith</h4>
                  <p className="text-gray-400 text-sm">CTO, TechCorp</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Huly has transformed how our development team works. The
                customizable workflows and GitHub integration have made our
                process much more efficient."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-gray-900/50 backdrop-blur p-8 rounded-xl border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
                    alt="Sarah Johnson"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Sarah Johnson</h4>
                  <p className="text-gray-400 text-sm">
                    Marketing Director, BrandCo
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "The calendar view and content planning features in Huly have
                been game-changers for our marketing team. We can now visualize
                our entire campaign schedule at a glance."
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gray-900/50 backdrop-blur p-8 rounded-xl border border-gray-800"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Michael"
                    alt="Michael Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Michael Chen</h4>
                  <p className="text-gray-400 text-sm">
                    Product Manager, InnovateCo
                  </p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                "Huly's reporting features give me the insights I need to make
                informed decisions about our product roadmap. The customizable
                dashboards are incredibly useful."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Workflow?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of teams already using Huly to work more
              efficiently
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
                onClick={() =>
                  window.open("https://app.huly.io/signup", "_blank")
                }
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-500 hover:bg-blue-500/10 font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200"
                onClick={() =>
                  window.open("https://calendly.com/huly-demo/30min", "_blank")
                }
              >
                Schedule a Demo
              </Button>
            </div>
          </motion.div>
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
              Learn more about productivity and team collaboration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard
              title="10 Ways to Boost Team Productivity"
              description="Discover proven strategies to enhance your team's efficiency and output with the right tools and processes."
              image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800"
              date="April 10, 2024"
              readTime="8 min read"
              slug="boost-team-productivity"
            />
            <BlogCard
              title="The Future of Work Management"
              description="Explore how modern work management platforms are evolving to meet the needs of distributed and hybrid teams."
              image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800"
              date="April 15, 2024"
              readTime="10 min read"
              slug="future-of-work-management"
            />
            <BlogCard
              title="Building Effective Remote Teams"
              description="Learn how to foster collaboration, communication, and productivity in remote and distributed team environments."
              image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800"
              date="April 20, 2024"
              readTime="12 min read"
              slug="building-effective-remote-teams"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
