import React from "react";
import { motion } from "framer-motion";
import { Card } from "./card";
import { ArrowRight } from "lucide-react";

interface ContentItem {
  title: string;
  description: string;
  image: string;
  url: string;
  type: "blog" | "service" | "product";
}

interface RelatedContentProps {
  items: ContentItem[];
  title?: string;
}

export function RelatedContent({
  items,
  title = "You might also be interested in",
}: RelatedContentProps) {
  return (
    <div className="py-12 bg-gray-900/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <a href={item.url} className="block h-full">
                <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] bg-gray-900/70 border-gray-800">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-2 right-2 px-2 py-1 text-xs font-medium rounded-full bg-blue-600 text-white">
                      {item.type === "blog" && "Blog"}
                      {item.type === "service" && "Service"}
                      {item.type === "product" && "Product"}
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-white mb-2 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {item.description}
                    </p>

                    <div className="flex items-center text-blue-400 text-sm font-medium group">
                      <span>Learn more</span>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
