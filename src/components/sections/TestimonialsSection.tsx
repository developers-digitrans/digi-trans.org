import React, { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Weber",
    position: "CEO & Founder",
    company: "TechFlow SaaS",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Digitrans transformed our MVP idea into a market-ready SaaS platform in just 10 weeks. We've already secured €2M in funding and onboarded 500+ customers. Their team didn't just build our product - they became our strategic partner.",
    rating: 5,
    industry: "SaaS Platform",
    results: ["€2M Funding Raised", "500+ Customers", "10 Week Delivery"],
  },
  {
    name: "Sophie Laurent",
    position: "Co-founder",
    company: "DataSync Pro",
    image: "/images/testimonials/ben-amarti.jpeg",
    quote: "Their product strategy expertise helped us pivot early and find our product-market fit. Revenue grew 400% in our first year thanks to their guidance. They understand both the technical and business sides perfectly.",
    rating: 5,
    industry: "Data Integration",
    results: ["400% Revenue Growth", "Perfect PMF", "Zero Technical Debt"],
  },
  {
    name: "James Mitchell",
    position: "CTO",
    company: "CloudOps Solutions",
    image: "/images/testimonials/ayoub.jpeg",
    quote: "Working with Digitrans was like having a world-class engineering team from day one. They built our entire infrastructure to scale from 100 to 100,000 users seamlessly. Their DevOps expertise is unmatched.",
    rating: 5,
    industry: "DevOps SaaS",
    results: ["99.99% Uptime", "Auto-Scaling", "100K+ Users"],
  },
];

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-purple-900/10 rounded-full filter blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-blue-900/10 rounded-full filter blur-[120px] -z-10"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-3 px-4 py-1 bg-purple-900/40 text-purple-300 text-sm rounded-full border border-purple-500/30">Client Success</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-400">
            Trusted by SaaS Founders Across EMEA
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what founders say about working with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Main Testimonial Card */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-900/50 backdrop-blur-sm border border-blue-800/30 shadow-2xl">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-600/10 to-transparent"></div>
            
            <div className="p-8 md:p-12 relative z-10">
              <div className="absolute top-8 right-12 text-purple-500/20">
                <Quote size={120} strokeWidth={1} />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Founder Info */}
                <div className="flex flex-col items-center lg:items-start">
                  <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-purple-500/30">
                    <img 
                      src={testimonials[activeTestimonial].image} 
                      alt={testimonials[activeTestimonial].name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center lg:text-left mb-4">
                    <h4 className="text-xl font-bold text-white mb-1">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-purple-300 mb-1">
                      {testimonials[activeTestimonial].position}
                    </p>
                    <p className="text-gray-400">
                      {testimonials[activeTestimonial].company}
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-lg px-3 py-1 mb-3 text-sm text-gray-300">
                    {testimonials[activeTestimonial].industry}
                  </div>
                  <div className="flex">
                    {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                </div>
                
                {/* Testimonial Content */}
                <div className="lg:col-span-2">
                  <motion.blockquote
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-xl md:text-2xl text-white mb-8 font-light leading-relaxed"
                  >
                    "{testimonials[activeTestimonial].quote}"
                  </motion.blockquote>
                  
                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {testimonials[activeTestimonial].results.map((result, index) => (
                      <div 
                        key={index}
                        className="bg-gradient-to-br from-purple-900/30 to-blue-900/30 rounded-lg p-3 text-center border border-blue-500/10"
                      >
                        <p className="text-purple-300 font-bold text-sm">{result}</p>
                      </div>
                    ))}
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <button 
                        onClick={prevTestimonial}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 hover:bg-gray-700/80 border border-gray-700 transition-colors"
                        aria-label="Previous testimonial"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={nextTestimonial}
                        className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-800/50 hover:bg-gray-700/80 border border-gray-700 transition-colors"
                        aria-label="Next testimonial"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                    
                    {/* Indicators */}
                    <div className="flex space-x-2">
                      {testimonials.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setActiveTestimonial(index)}
                          className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                            index === activeTestimonial ? 'bg-blue-500 w-8' : 'bg-gray-600'
                          }`}
                          aria-label={`Go to testimonial ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>


      </div>
    </section>
  );
}