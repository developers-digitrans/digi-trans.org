import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Hero from "../Hero";
import { motion } from "framer-motion";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight, Users, Target, Award, Rocket, Play } from "lucide-react";
import { Dialog, DialogContent } from "../ui/dialog";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Team Members", value: "50+" },
  { label: "Projects Delivered", value: "200+" },
  { label: "Global Clients", value: "100+" },
];

const values = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "People First",
    description: "We believe in empowering our team and clients alike.",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do.",
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Innovation",
    description:
      "Constantly pushing boundaries and embracing new technologies.",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Growth",
    description: "Committed to continuous learning and improvement.",
  },
];

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Senior Developer",
    quote:
      "Working at Digitrans has been an incredible journey of growth and innovation.",
    videoId: "hvY3DIky5_A",
  },
  {
    name: "Michael Chen",
    role: "Technical Lead",
    quote: "The culture of innovation and collaboration here is unmatched.",
    videoId: "hvY3DIky5_A",
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    quote: "We're building solutions that make a real impact in the world.",
    videoId: "hvY3DIky5_A",
  },
];

function About() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <Hero
        headline="About Us"
        subheadline="We are a team of passionate technologists building the future of digital solutions."
        showCards={false}
      />

      {/* Stats Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-blue-500 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative group"
            >
              <div className="relative max-w-[400px] mx-auto overflow-hidden">
                <img
                  src="/images/ceo.png"
                  alt="CEO"
                  className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-4 text-white">
                Meet Our CEO
              </h2>
              <p className="text-gray-400 mb-6">
                With over 15 years of experience in technology and business
                leadership, our CEO has led multiple successful digital
                transformation initiatives for Fortune 500 companies. Their
                vision drives our commitment to innovation and excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              These core values guide everything we do and shape our company
              culture.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800">
                  <div className="text-blue-500 mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {value.title}
                  </h3>
                  <p className="text-gray-400">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Video Testimonials */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Meet Our Team
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hear directly from our team members about what it's like to work
              at Digitrans.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow bg-gray-900/50 backdrop-blur border-gray-800"
                  onClick={() => setSelectedVideo(member.videoId)}
                >
                  <div className="aspect-video relative">
                    <img
                      src={`https://img.youtube.com/vi/${member.videoId}/maxresdefault.jpg`}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center">
                        <Play className="w-8 h-8 text-white fill-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1 text-white">
                      {member.name}
                    </h3>
                    <p className="text-gray-400 mb-4">{member.role}</p>
                    <p className="text-gray-400">"{member.quote}"</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog
        open={!!selectedVideo}
        onOpenChange={() => setSelectedVideo(null)}
      >
        <DialogContent className="sm:max-w-[900px] p-0 bg-black border-none">
          <div className="aspect-video w-full">
            {selectedVideo && (
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Team Member Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}

export default About;
