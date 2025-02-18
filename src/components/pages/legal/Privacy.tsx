import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";

export default function Privacy() {
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
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">Last updated: March 20, 2024</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Information We Collect
              </h2>
              <p className="text-gray-300 mb-4">
                We collect information that you provide directly to us,
                including:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Name and contact information</li>
                <li>Company details</li>
                <li>Usage data and analytics</li>
                <li>Communication preferences</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Provide and improve our services</li>
                <li>Communicate with you about our products</li>
                <li>Analyze and optimize our website performance</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Data Security
              </h2>
              <p className="text-gray-300 mb-6">
                We implement appropriate technical and organizational measures
                to protect your personal information.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Your Rights
              </h2>
              <p className="text-gray-300 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-300 mb-6">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Object to processing</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Contact Us
              </h2>
              <p className="text-gray-300 mb-6">
                For any privacy-related questions, please contact us at
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
