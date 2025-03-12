import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";
import { Card } from "../../ui/card";
import { Button } from "../../ui/button";
import { BlogCard } from "../../ui/blog-card";
import {
  Brain,
  Bot,
  Cpu,
  Network,
  ArrowRight,
  CheckCircle,
  Workflow,
  Share2,
} from "lucide-react";

const features = [
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Visual Flow Builder",
    description:
      "Build and customize LLM flows with an intuitive drag-and-drop interface.",
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "LangChain Integration",
    description:
      "Seamlessly integrate with LangChain components and create complex chains.",
  },
  {
    icon: <Workflow className="w-8 h-8" />,
    title: "Flow Management",
    description:
      "Save, edit, and share your flows with your team or the community.",
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: "API Generation",
    description:
      "Automatically generate APIs from your flows for easy integration.",
  },
];

const benefits = [
  "Open Source",
  "LangChain Native",
  "Visual Builder",
  "API Generation",
  "Flow Templates",
  "Version Control",
  "Team Sharing",
  "Custom Agents",
];

export default function KozmoAI() {
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
            Build LLM Apps Visually
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              No Code Required
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create, visualize, and deploy LangChain applications with a powerful
            flow editor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02]"
              onClick={() => window.open("https://kozmoai.cloud", "_blank")}
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
              Democratizing LLM Application Development
            </h2>

            <p>
              KozmoAI is revolutionizing how organizations build and deploy AI
              applications by making LLM development accessible to everyone. Our
              visual flow editor eliminates the complexity of coding while
              preserving the power and flexibility that advanced AI applications
              require.
            </p>

            <p>
              Built with LangChain at its core, KozmoAI provides a seamless
              interface for creating sophisticated AI workflows through an
              intuitive drag-and-drop experience. From simple chatbots to
              complex multi-agent systems, KozmoAI enables teams to build
              production-ready AI applications in hours instead of weeks.
            </p>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Bridging the Gap Between Vision and Implementation
            </h3>

            <p>
              The promise of large language models is transformative, but the
              technical barriers to implementation have been substantial.
              KozmoAI bridges this gap by providing:
            </p>

            <ul>
              <li>
                <strong>Visual Flow Building:</strong> Create complex LLM chains
                and agents with an intuitive drag-and-drop interface that
                visualizes the entire application flow.
              </li>
              <li>
                <strong>LangChain Integration:</strong> Leverage the full power
                of LangChain components including prompts, memory, agents, and
                tools without writing code.
              </li>
              <li>
                <strong>Instant Testing:</strong> Test your flows in real-time
                as you build them, with a built-in chat interface that shows
                exactly how your application will respond.
              </li>
              <li>
                <strong>One-Click Deployment:</strong> Deploy your LLM
                applications with a single click, generating production-ready
                APIs that can be integrated into any application.
              </li>
              <li>
                <strong>Version Control:</strong> Track changes, collaborate
                with team members, and maintain a history of your LLM
                application development.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold mt-8 mb-4">
              Enterprise-Ready AI Development
            </h3>

            <p>
              KozmoAI isn't just for prototyping—it's built for production. Our
              platform includes enterprise-grade features such as:
            </p>

            <ul>
              <li>
                <strong>Role-Based Access Control:</strong> Manage who can view,
                edit, and deploy different parts of your AI applications.
              </li>
              <li>
                <strong>Monitoring and Analytics:</strong> Track usage,
                performance, and costs of your LLM applications in real-time.
              </li>
              <li>
                <strong>Custom Model Integration:</strong> Connect to your own
                fine-tuned models or use any of the popular LLM providers.
              </li>
              <li>
                <strong>Scalable Infrastructure:</strong> Our cloud
                infrastructure automatically scales to handle any volume of
                requests.
              </li>
              <li>
                <strong>Security and Compliance:</strong> Enterprise-grade
                security with data encryption, audit logs, and compliance
                controls.
              </li>
            </ul>

            <p>
              Whether you're a product manager exploring AI capabilities, a
              developer looking to streamline LLM implementation, or an
              enterprise AI team scaling your operations, KozmoAI provides the
              tools you need to build the next generation of intelligent
              applications.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-300 leading-relaxed">
              KozmoAI is a visual LLM application builder that makes it easy to
              create, test, and deploy AI applications. With our intuitive flow
              editor, LangChain integration, and powerful API generation
              capabilities, you can build production-ready AI applications
              without writing code. Perfect for both developers and
              non-technical users looking to harness the power of LLMs.
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
              Powerful features to help you build LLM applications
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
              Learn more about AI and machine learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <BlogCard
              title="MLOps Best Practices for Production AI Systems"
              description="A comprehensive guide to implementing MLOps in enterprise environments, from model training to production deployment."
              image="https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800"
              date="March 10, 2024"
              readTime="12 min read"
              slug="mlops-best-practices"
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
