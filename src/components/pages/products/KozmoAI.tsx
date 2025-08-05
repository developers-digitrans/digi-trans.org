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

      {/* Enhanced Hero Section */}
      <div className="container mx-auto px-4 pt-32 pb-12 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <span className="inline-block mb-4 px-4 py-1 bg-blue-900/40 text-blue-300 text-sm rounded-full border border-blue-500/30">
            Visual LLM Flow Builder
          </span>
          
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
              className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 hover:from-blue-600 hover:via-blue-700 hover:to-purple-700 text-white font-medium px-8 py-6 text-lg rounded-lg transition-all duration-200 ease-in-out transform hover:scale-[1.02] relative group"
              onClick={() => window.open("https://kozmoai.cloud", "_blank")}
            >
              <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></span>
              <span className="relative flex items-center">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-blue-500 text-white hover:bg-blue-950/30 px-8 py-6 text-lg rounded-lg transition-all duration-300"
              onClick={() => window.open("https://docs.kozmoai.cloud", "_blank")}
            >
              <span className="flex items-center">
                View Documentation
              </span>
            </Button>
          </div>
        </motion.div>
        
        {/* Preview image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 relative rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>
          <img 
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80" 
            alt="KozmoAI Visual Builder Interface" 
            className="w-full h-auto rounded-xl"
          />
        </motion.div>
      </div>

      {/* Value Proposition Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="prose prose-lg prose-invert max-w-4xl mx-auto bg-gradient-to-br from-gray-900/70 to-blue-900/20 backdrop-blur-sm p-8 rounded-xl border border-blue-800/30 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
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

            <h3 className="text-2xl font-semibold mt-8 mb-4 text-blue-300">
              Bridging the Gap Between Vision and Implementation
            </h3>

            <p>
              The promise of large language models is transformative, but the
              technical barriers to implementation have been substantial.
              KozmoAI bridges this gap by providing:
            </p>

            <ul className="space-y-2">
              {[
                "<strong>Visual Flow Building:</strong> Create complex LLM chains and agents with an intuitive drag-and-drop interface that visualizes the entire application flow.",
                "<strong>LangChain Integration:</strong> Leverage the full power of LangChain components including prompts, memory, agents, and tools without writing code.",
                "<strong>Instant Testing:</strong> Test your flows in real-time as you build them, with a built-in chat interface that shows exactly how your application will respond.",
                "<strong>One-Click Deployment:</strong> Deploy your LLM applications with a single click, generating production-ready APIs that can be integrated into any application.",
                "<strong>Version Control:</strong> Track changes, collaborate with team members, and maintain a history of your LLM application development."
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-500/30">
                    <CheckCircle className="w-3 h-3 text-blue-400" />
                  </div>
                  <span dangerouslySetInnerHTML={{ __html: item }}></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Features Grid - Enhanced */}
      <section className="py-24 bg-black text-white relative overflow-hidden">
        {/* Background gradients */}
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block mb-3 px-4 py-1 bg-blue-900/40 text-blue-300 text-sm rounded-full border border-blue-500/30">Powerful Features</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Everything You Need to Build LLM Apps
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              KozmoAI provides all the tools you need to create sophisticated LLM applications without writing code.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="h-full p-8 relative backdrop-blur-sm bg-gradient-to-br from-gray-900/90 via-gray-900/60 to-gray-900/90 border border-blue-800/30 hover:border-blue-500/50 transition-all duration-300 overflow-hidden group shadow-lg hover:shadow-blue-500/20">
                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500"></div>
                  
                  <div className="p-3 bg-gradient-to-br from-blue-900/30 to-purple-900/30 rounded-lg w-fit mb-6 border border-blue-500/30">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {feature.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300 relative z-10">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 relative z-10">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block mb-3 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">Why Choose KozmoAI</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
              Benefits That Set Us Apart
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              KozmoAI provides unique advantages that make it the preferred choice for LLM application development.
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
                className="bg-gradient-to-br from-gray-900/90 to-gray-900/60 backdrop-blur-sm p-6 rounded-xl border border-blue-800/30 hover:border-purple-500/40 transition-all duration-300 text-center"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-900/30 border border-purple-500/30 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-purple-400" />
                  </div>
                </div>
                <div className="text-white font-medium">{benefit}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="p-8 rounded-2xl bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-indigo-900/20 border border-blue-500/20 backdrop-blur-sm shadow-xl">
              <h2 className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
                Ready to Build Your LLM Application?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Get started with KozmoAI today and see how easy it is to create powerful LLM applications without writing code.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition-all duration-300 relative group px-8 py-3"
                  onClick={() => window.open("https://kozmoai.cloud", "_blank")}
                >
                  <span className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-1000 group-hover:duration-200"></span>
                  <span className="relative flex items-center">
                    Start Building Now <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
                <Button
                  variant="outline" 
                  className="border-blue-500 text-white hover:bg-blue-950/30 transition-all duration-300 px-8 py-3"
                  onClick={() => window.open("https://github.com/kozmoai", "_blank")}
                >
                  <span className="flex items-center">
                    View on GitHub <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </Button>
              </div>
            </div>
          </motion.div>
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
