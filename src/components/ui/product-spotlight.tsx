import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card } from "./card";
import { Button } from "./button";
import { ArrowRight, X } from "lucide-react";

interface Product {
  title: string;
  description: string;
  image: string;
  url: string;
}

interface ProductSpotlightProps {
  products: Product[];
}

export function ProductSpotlight({ products }: ProductSpotlightProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 max-w-sm">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="overflow-hidden bg-gray-900/90 backdrop-blur-sm border-gray-800 shadow-2xl">
            <button
              onClick={handleDismiss}
              className="absolute top-2 right-2 text-gray-400 hover:text-white z-10"
              aria-label="Close product spotlight"
            >
              <X size={16} />
            </button>

            <div className="relative aspect-video">
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].title}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 flex justify-between p-2">
                <button
                  onClick={handlePrev}
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                  aria-label="Previous product"
                >
                  <ArrowRight size={16} className="transform rotate-180" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white"
                  aria-label="Next product"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-semibold text-white mb-2">
                {products[currentIndex].title}
              </h3>
              <p className="text-gray-300 text-sm mb-4">
                {products[currentIndex].description}
              </p>
              <Button
                size="sm"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                onClick={() =>
                  window.open(products[currentIndex].url, "_blank")
                }
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
