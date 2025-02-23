import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import Hero from "../Hero";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Clock } from "lucide-react";

function Blog() {
  const blogPosts = [
    {
      title: "Enabling our client to maximise the business value from IT",
      description:
        "How we helped a retailer understand and maximize their IT landscape value through comprehensive evaluation and strategic planning.",
      image: "/images/consult.png",
      date: "March 20, 2024",
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
      date: "March 15, 2024",
      readTime: "15 min read",
      slug: "building-enterprise-data-lakes",
      category: "Data Engineering",
    },
    {
      title: "MLOps Best Practices for Production AI Systems",
      description:
        "A comprehensive guide to implementing MLOps in enterprise environments, from model training to production deployment.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
      date: "March 10, 2024",
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
      date: "March 5, 2024",
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
      date: "March 1, 2024",
      readTime: "8 min read",
      slug: "real-time-analytics-kafka",
      category: "Big Data",
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero
        headline="Insights & Expertise"
        subheadline="Discover the latest in Big Data, Cloud Computing, and AI through our expert insights and in-depth analysis."
        showCards={false}
      />

      {/* Blog Posts Grid */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 mb-6">{post.description}</p>
                    <a href={`/blog/${post.slug}`}>
                      <Button variant="outline" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
