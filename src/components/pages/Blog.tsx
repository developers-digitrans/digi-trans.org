import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import Hero from "../Hero";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Clock, Calendar, Tag, User, BookOpen } from "lucide-react";
import SEO from "../SEO";
import LazyImage from "../LazyImage";

export default function Blog() {
  const blogPosts = [
    {
      title: "Digital Transformation in Banking: A $250M Success Story",
      description:
        "Learn how we helped a global banking leader transform their legacy systems, resulting in $250M in operational savings and a 35% increase in customer satisfaction.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
      date: "February 25, 2025",
      readTime: "7 min read",
      slug: "digital-transformation-banking-success-story",
      category: "Case Study",
    },
    {
      title: "Cloud Migration for Healthcare: Improving Patient Care",
      description:
        "Learn how we helped a major healthcare provider migrate to the cloud, resulting in 40% cost savings and improved patient care through real-time data access.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
      date: "February 18, 2025",
      readTime: "6 min read",
      slug: "cloud-migration-healthcare-case-study",
      category: "Case Study",
    },
    {
      title: "AI-Powered Retail Personalization: 70% Revenue Growth",
      description:
        "Learn how we helped a global retailer implement AI-powered personalization that increased online revenue by 70% and customer lifetime value by 45%.",
      image:
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&q=80",
      date: "February 10, 2025",
      readTime: "8 min read",
      slug: "ai-retail-personalization-case-study",
      category: "Case Study",
    },
    {
      title:
        "How We Helped a $3.5B Retailer Transform Their IT into a Strategic Asset",
      description:
        "Learn how our strategic IT assessment unlocked $16M+ in value and created a technology roadmap that became a competitive advantage for a global retail leader.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      date: "February 3, 2025",
      readTime: "5 min read",
      slug: "enabling-our-client-to-maximise-the-business-value-from-it",
      category: "Case Study",
    },
    {
      title: "Building Enterprise Data Lakes: A Complete Guide",
      description:
        "Learn how to design and implement scalable data lakes that process petabytes of data with real-time analytics capabilities.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      date: "January 28, 2025",
      readTime: "15 min read",
      slug: "building-enterprise-data-lakes",
      category: "Data Engineering",
    },
    {
      title: "MLOps Best Practices for Production AI Systems",
      description:
        "A comprehensive guide to implementing MLOps in enterprise environments, from model training to production deployment.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
      date: "January 21, 2025",
      readTime: "12 min read",
      slug: "mlops-best-practices",
      category: "AI/ML",
    },
    {
      title: "Cloud-Native Architecture Patterns",
      description:
        "Explore modern architecture patterns for building scalable, resilient cloud-native applications.",
      image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800",
      date: "January 14, 2025",
      readTime: "10 min read",
      slug: "cloud-native-architecture-patterns",
      category: "Cloud Computing",
    },
    {
      title: "Real-time Analytics with Apache Kafka",
      description:
        "Building real-time analytics pipelines processing millions of events per second using Apache Kafka and modern streaming technologies.",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800",
      date: "January 7, 2025",
      readTime: "8 min read",
      slug: "real-time-analytics-kafka",
      category: "Big Data",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <SEO
        title="Blog | Insights on Big Data, AI & Cloud Computing | Digitrans"
        description="Discover the latest in Big Data, Cloud Computing, and AI through our expert insights and in-depth analysis."
        canonicalUrl="/blog"
        ogType="website"
      />
      <Navbar />

      <Hero
        headline="Insights & Expertise"
        subheadline="Discover the latest in Big Data, Cloud Computing, and AI through our expert insights and in-depth analysis."
        showCards={false}
        videoUrl="/videos/blog.mp4"
      />

      {/* Blog Posts Grid */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Latest Articles</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Discover insights and expertise from our team of specialists in
              Big Data, AI, and Cloud Computing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-sm border border-blue-800/30 hover:border-blue-700/50 transition-all duration-300 h-[450px]"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/60 to-black/90 z-10"></div>
                <img
                  src={post.image}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 z-0"
                />
                <div className="relative z-20 p-8 h-full flex flex-col">
                  <div className="flex flex-wrap items-center gap-2 text-sm text-gray-300 mb-4">
                    <span className="flex items-center gap-1 bg-gray-800/70 px-2 py-1 rounded-full">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1 bg-gray-800/70 px-2 py-1 rounded-full">
                      <Clock className="w-3 h-3 text-blue-400" />
                      {post.readTime}
                    </span>
                    <span className="flex items-center gap-1 bg-gray-800/70 px-2 py-1 rounded-full">
                      <Tag className="w-3 h-3 text-green-400" />
                      {post.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    {post.description}
                  </p>
                  <a
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mt-auto"
                  >
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
