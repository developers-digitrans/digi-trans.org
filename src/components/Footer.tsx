import React from "react";
import { Card } from "./ui/card";
import { motion } from "framer-motion";
import {
  Linkedin,
  Twitter,
  Facebook,
  Github,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

interface FooterProps {
  clientLogos?: string[];
  testimonials?: { author: string; company: string; text: string }[];
}

const defaultTestimonials = [
  {
    author: "Marcus Weber",
    company: "CEO & Founder at TechFlow SaaS",
    text: "Digitrans transformed our MVP idea into a market-ready SaaS platform in just 10 weeks. We've already secured €2M in funding and onboarded 500+ customers.",
  },
  {
    author: "Sophie Laurent",
    company: "Co-founder at DataSync Pro",
    text: "Their product strategy expertise helped us pivot early and find our product-market fit. Revenue grew 400% in our first year thanks to their guidance.",
  },
  {
    author: "James Mitchell",
    company: "CTO at CloudOps Solutions",
    text: "Working with Digitrans was like having a world-class engineering team from day one. They built our infrastructure to scale from 100 to 100,000 users seamlessly.",
  },
  {
    author: "Lisa Chen",
    company: "Founder at MedCare Connect",
    text: "From concept to production in 12 weeks. Their full-stack development team delivered a HIPAA-compliant platform that now serves 50+ healthcare providers.",
  },
  {
    author: "Roberto Silva",
    company: "CEO at FinanceFlow",
    text: "Digitrans didn't just build our product - they became our technology partner. Their ongoing support helped us scale to €5M ARR in 18 months.",
  },
  {
    author: "Ahmed Hassan",
    company: "Founder at EduFlow",
    text: "As a non-technical founder, I was worried about building a SaaS platform. Digitrans made the entire process transparent and stress-free.",
  },
  {
    author: "Maria Rodriguez",
    company: "Co-founder at RetailFlow",
    text: "Our e-commerce SaaS platform handles 1M+ transactions daily with zero downtime. Digitrans built it to enterprise standards from day one.",
  },
  {
    author: "David Kumar",
    company: "CEO at AnalyticsHub",
    text: "The data visualization SaaS they built scaled to 10,000+ daily users. Their DevOps expertise ensured perfect performance throughout our growth.",
  },
  {
    author: "Elena Petrov",
    company: "Founder at LogiTrack",
    text: "Digitrans helped us launch our logistics SaaS in 11 weeks. We're now processing 50K+ shipments monthly with 99.9% accuracy.",
  },
  {
    author: "Thomas Wright",
    company: "CTO at SecureVault",
    text: "Their cybersecurity SaaS platform achieved SOC 2 Type II certification on first audit. Enterprise clients trust us because of Digitrans' security expertise.",
  },
];

const defaultClientLogos = [
  "https://api.dicebear.com/7.x/initials/svg?seed=TC",
  "https://api.dicebear.com/7.x/initials/svg?seed=FV",
  "https://api.dicebear.com/7.x/initials/svg?seed=GI",
  "https://api.dicebear.com/7.x/initials/svg?seed=ST",
];

const locations = [
  {
    city: "Dubai, UAE",
    address: "Downtown Dubai, UAE",
    email: "info@digi-trans.org",
    phone: "+971 50 205 5733",
  },
  {
    city: "London, UK",
    address: "London, UK",
    email: "info@digi-trans.org",
    phone: "+44 777 11 51 435",
  },
  {
    city: "Paris, France",
    address: "Paris, France",
    email: "info@digi-trans.org",
    phone: "+33 6 13 70 97 58",
  },
  {
    city: "Casablanca, Morocco",
    address: "Casablanca, Morocco",
    email: "info@digi-trans.org",
    phone: "+212 6 6719 71 88",
  },
];

const Footer = ({
  clientLogos = defaultClientLogos,
  testimonials = defaultTestimonials,
}: FooterProps) => {
  return (
    <footer
      className="relative bg-black/50 backdrop-blur-sm text-white py-16 border-t border-purple-500/20"
      style={{ zIndex: 1 }}
    >
      <div className="container mx-auto px-4">
        {/* Social Proof Section */}
        <div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-8">
              Trusted by SaaS Founders Across EMEA
            </h2>
            <div className="relative max-w-5xl mx-auto overflow-hidden mb-12 h-32">
              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black to-transparent z-10" />
              <motion.div
                className="flex gap-6 absolute whitespace-nowrap"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {[...Array(11)].map((_, index) => (
                  <div
                    key={index}
                    className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-lg border border-blue-800/30 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                  >
                    <img
                      src={`/images/${index + 1}.svg`}
                      alt={`Logo ${index + 1}`}
                      className="w-24 h-24 object-contain p-2"
                    />
                  </div>
                ))}
                {[...Array(11)].map((_, index) => (
                  <div
                    key={`repeat-${index}`}
                    className="w-32 h-32 flex items-center justify-center bg-gradient-to-br from-purple-600/20 to-indigo-600/20 backdrop-blur-sm rounded-lg border border-blue-800/30 shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
                  >
                    <img
                      src={`/images/${index + 1}.svg`}
                      alt={`Logo ${index + 1}`}
                      className="w-24 h-24 object-contain p-2"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
            <div className="relative w-full overflow-hidden mt-8">
              <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-transparent z-10" />
              <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-transparent z-10" />

              <motion.div
                className="flex gap-8"
                initial={{ x: 0 }}
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                  repeatType: "loop",
                }}
              >
                {[...testimonials, ...testimonials].map(
                  (testimonial, index) => (
                    <div
                      key={index}
                      className="flex-shrink-0 w-[380px] bg-gradient-to-br from-gray-900/70 via-purple-900/20 to-indigo-900/30 backdrop-blur rounded-lg p-6 border border-purple-500/10 shadow-lg"
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
        <div className="border-t border-purple-500/20 pt-16 mt-16">
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
                    MVP Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Product Strategy & Design
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Full-Stack Development
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    DevOps & Scaling
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
                    href="https://linkedin.com/company/digitranslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Linkedin className="h-4 w-4" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com/digitranslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Twitter className="h-4 w-4" /> X (Twitter)
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/digitranslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Facebook className="h-4 w-4" /> Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/digitranslab"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" /> GitHub
                  </a>
                </li>

              </ul>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="border-t border-purple-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                © 2025 Digitrans, Inc. All rights reserved.
              </p>
              <div className="text-gray-400 text-sm">
                <span>Empowering SaaS founders across EMEA 🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
