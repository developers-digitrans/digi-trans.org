import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Building2, Clock, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";
import JobApplicationModal from "../JobApplicationModal";
import UniverseLights from "../UniverseLights";

const positions = [
  {
    title: "Senior Software Engineer",
    location: "Dubai, UAE",
    type: "Full-time",
    department: "Engineering",
    description: "Lead the development of enterprise-grade cloud applications.",
  },
  {
    title: "Data Engineer",
    location: "London, UK",
    type: "Full-time",
    department: "Data",
    description: "Build and maintain data pipelines for analytics and ML.",
  },
  {
    title: "DevOps Engineer",
    location: "Paris, France",
    type: "Full-time",
    department: "Infrastructure",
    description: "Automate and optimize our cloud infrastructure.",
  },
  {
    title: "ML Engineer",
    location: "Casablanca, Morocco",
    type: "Full-time",
    department: "AI/ML",
    description: "Develop and deploy production ML models.",
  },
];

const benefits = [
  {
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with our distributed team.",
  },
  {
    title: "Continuous Learning",
    description: "Access to online courses, conferences, and certifications.",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs.",
  },
  {
    title: "Stock Options",
    description: "Be a part of our growth with equity compensation.",
  },
];

export default function Careers() {
  const [selectedPosition, setSelectedPosition] = useState(null);
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <div className="relative w-full h-[800px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-an-aerial-view-of-a-business-district-1573/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <UniverseLights />

        <div className="relative z-10 container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 max-w-3xl"
          >
            Help us build the future of enterprise technology. We're looking for
            passionate individuals to join our growing team.
          </motion.p>
        </div>
      </div>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          {/* Open Positions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            {positions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-400 text-sm">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {position.department}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-400 mb-6">{position.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group"
                    onClick={() => setSelectedPosition(position)}
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Why Join Us?</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We offer competitive compensation and great benefits to help you
              thrive both personally and professionally.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="p-6 text-center h-full hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <h3 className="text-xl font-semibold mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      {selectedPosition && (
        <JobApplicationModal
          open={!!selectedPosition}
          onOpenChange={(open) => !open && setSelectedPosition(null)}
          jobTitle={selectedPosition.title}
          jobDescription={selectedPosition.description}
        />
      )}
    </div>
  );
}
