import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import { Linkedin, Twitter, Facebook } from "lucide-react";

interface FooterProps {
  clientLogos?: string[];
  testimonials?: { author: string; company: string; text: string }[];
}

const defaultTestimonials = [
  {
    author: "Sarah Johnson",
    company: "TechCorp Global",
    text: "Digitrans transformed our data infrastructure, delivering insights we never thought possible.",
  },
  {
    author: "Mohammed Al-Rashid",
    company: "Future Ventures",
    text: "Their AI solutions have given us a competitive edge in our market.",
  },
  {
    author: "Emily Chen",
    company: "InnovateTech",
    text: "The cloud migration was seamless, and our performance metrics improved significantly.",
  },
  {
    author: "David Miller",
    company: "FinanceFirst",
    text: "Outstanding service and technical expertise. They delivered exactly what we needed.",
  },
  {
    author: "Sophia Rodriguez",
    company: "HealthTech Solutions",
    text: "Their healthcare solutions comply with all regulations while being user-friendly.",
  },
  {
    author: "James Wilson",
    company: "RetailPro",
    text: "The e-commerce platform they built has dramatically increased our online sales.",
  },
  {
    author: "Aisha Patel",
    company: "EduTech Global",
    text: "Their learning management system has transformed how we deliver education.",
  },
  {
    author: "Michael Chang",
    company: "LogisticsPro",
    text: "The supply chain optimization solution has reduced our costs by 30%.",
  },
  {
    author: "Laura Martinez",
    company: "MediaStream",
    text: "Their streaming platform handles millions of users without any performance issues.",
  },
  {
    author: "Alex Thompson",
    company: "GreenEnergy",
    text: "The IoT solution they implemented has revolutionized our energy management.",
  },
];

const defaultClientLogos = [
  "https://api.dicebear.com/7.x/initials/svg?seed=TC",
  "https://api.dicebear.com/7.x/initials/svg?seed=FV",
  "https://api.dicebear.com/7.x/initials/svg?seed=GI",
  "https://api.dicebear.com/7.x/initials/svg?seed=ST",
];

const Footer = ({
  clientLogos = defaultClientLogos,
  testimonials = defaultTestimonials,
}: FooterProps) => {
  return (
    <footer className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-4">
        {/* Social Proof Section */}
        <div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">
              Trusted by Industry Leaders
            </h2>
            <div className="relative max-w-4xl mx-auto overflow-hidden mb-12 h-48">
              <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-black to-transparent z-10" />
              <motion.div
                className="flex gap-12 absolute whitespace-nowrap"
                animate={{
                  x: ["-100%", "0%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...Array(11)].map((_, index) => (
                  <div
                    key={index}
                    className="w-48 h-48 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg"
                  >
                    <img
                      src={`/images/${index + 1}.svg`}
                      alt={`Logo ${index + 1}`}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                ))}
                {[...Array(11)].map((_, index) => (
                  <div
                    key={`repeat-${index}`}
                    className="w-48 h-48 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-lg"
                  >
                    <img
                      src={`/images/${index + 1}.svg`}
                      alt={`Logo ${index + 1}`}
                      className="w-40 h-40 object-contain"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="relative w-full overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

              <motion.div
                className="flex gap-8"
                initial={{ x: 0 }}
                animate={{ x: ["-50%", "0%"] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[400px] bg-gray-900/50 backdrop-blur rounded-lg p-6"
                    >
                      <p className="text-gray-300 italic mb-4 text-lg">
                        "{testimonial.text}"
                      </p>
                      <div>
                        <p className="font-semibold text-white">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-gray-400">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  ),
                )}
              </motion.div>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="border-t border-gray-800 pt-16 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-white font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Web Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Mobile Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cloud Solutions
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    UI/UX Design
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a
                    href="/cookies"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Cookie Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/security"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Twitter className="h-4 w-4" /> Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" /> Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2024 Digitrans. All rights reserved.
              </p>
              <div className="text-gray-400 text-sm">
                <span>Made with ❤️ by Digitrans</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
