import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";

export default function Cookies() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative pt-32 pb-16">
        <UniverseLights />
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">Last updated: March 20, 2024</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. What Are Cookies
              </h2>
              <p className="text-gray-300 mb-6">
                Cookies are small text files that are placed on your computer by
                websites that you visit.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. How We Use Cookies
              </h2>
              <p className="text-gray-300 mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Essential website functionality</li>
                <li>Analytics and performance</li>
                <li>User preferences</li>
                <li>Marketing and advertising</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Types of Cookies We Use
              </h2>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Session Cookies</li>
                <li>Persistent Cookies</li>
                <li>Third-Party Cookies</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Managing Cookies
              </h2>
              <p className="text-gray-300 mb-6">
                You can control and manage cookies in your browser settings.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Contact Us
              </h2>
              <p className="text-gray-300 mb-6">
                For questions about our cookie policy, contact
                privacy@digitrans.ai
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
