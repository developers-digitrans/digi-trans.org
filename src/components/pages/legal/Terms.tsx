import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import UniverseLights from "../../UniverseLights";
import { motion } from "framer-motion";

export default function Terms() {
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
            <h1 className="text-4xl font-bold mb-8">Terms & Conditions</h1>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-400 mb-6">Last updated: March 20, 2024</p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-300 mb-6">
                By accessing and using this website, you accept and agree to be
                bound by these terms and conditions.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                2. Use License
              </h2>
              <p className="text-gray-300 mb-6">
                Permission is granted to temporarily access the materials on
                Digitrans's website. This is the grant of a license, not a
                transfer of title.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                3. Disclaimer
              </h2>
              <p className="text-gray-300 mb-6">
                The materials on Digitrans's website are provided on an 'as is'
                basis. Digitrans makes no warranties, expressed or implied.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                4. Limitations
              </h2>
              <p className="text-gray-300 mb-6">
                In no event shall Digitrans or its suppliers be liable for any
                damages arising out of the use or inability to use the
                materials.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">
                5. Governing Law
              </h2>
              <p className="text-gray-300 mb-6">
                These terms and conditions are governed by and construed in
                accordance with the laws of France.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
