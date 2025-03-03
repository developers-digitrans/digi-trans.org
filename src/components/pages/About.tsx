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
        headline="Designed to deliver success"
        subheadline="Our unique culture and processes set us apart from other IT consultancies"
        showCards={false}
      />

      {/* Mission Section */}
      <section className="pt-4 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              Digitrans exists to redefine the enterprise technology consulting
              experience. We forge strategic partnerships with our clients,
              building transformative solutions that deliver measurable business
              outcomes through our unique blend of technical excellence,
              industry expertise, and innovative thinking.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Our vision is to be the global leader in enterprise technology
              transformation, setting new standards for consulting excellence
              while building a community of visionary technologists who drive
              positive change across industries. We don't just solve today's
              problems—we architect tomorrow's opportunities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Helping You Succeed Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-5xl font-bold mb-6">
                  <span className="text-blue-950">Helping </span>
                  <span className="text-orange-500">you</span>
                  <br />
                  <span className="text-blue-950">succeed</span>
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  At Digitrans, our commitment to delivering exceptional results
                  is backed by our deep market insight. We harness the
                  collective expertise of our consultants, as well as our
                  technology and service providers, to ensure the best outcomes
                  for you. Our set of best practice tools also enables us to
                  expedite project delivery and achieve optimal efficiency, even
                  during peak demand periods.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-[4/3] w-full"
            >
              <img
                src="/images/ceo.png"
                alt="CEO"
                className="w-full h-full object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-center mb-16"
          >
            Our values define everything we do
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center space-y-4"
            >
              <h3 className="text-2xl font-semibold text-[#FF6B6B]">
                Demonstrate Commitment
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We take ownership and drive outcomes. We're proudly ambitious,
                and we want to see success for our clients as much as for
                ourselves. We're also not afraid to challenge each other – it's
                how we develop our services and share knowledge. As better
                consultants, we go beyond what's expected, every time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center space-y-4"
            >
              <h3 className="text-2xl font-semibold text-[#FF6B6B]">
                Show Consideration
              </h3>
              <p className="text-gray-300 leading-relaxed">
                We strive to do what's right, from corporate social
                responsibility to environmental, social and governance, to
                everyday courtesy. We pride ourselves on our ability to adapt
                and integrate into client teams. Sometimes we need to have
                difficult conversations, but we do so with objectivity and care.
                Our knowledge and advice is always relevant and impactful.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center space-y-4"
            >
              <h3 className="text-2xl font-semibold text-[#FF6B6B]">
                Emphasise Trust
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Confidentiality is key. We work with integrity, transparency and
                honesty – with clients and colleagues alike. We say what is
                right, not necessarily what is popular. We are open-minded and
                ego-free; we don't take on work if we can't add value. Most
                importantly, we deliver on our promises.
              </p>
            </motion.div>
          </div>

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

      {/* Journey Timeline Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Digitrans' journey so far
            </h2>
            <p className="text-xl text-gray-400">
              Better consulting is a journey, not a destination. Here are the
              major milestones on our journey to date.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gray-800 -translate-y-1/2" />

            <motion.div
              className="flex justify-between relative"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div className="flex gap-32">
                {/* Feb 2016 */}
                <div className="relative w-64">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B6B] rounded-full left-0" />
                  <div className="pl-8">
                    <h3 className="text-[#FF6B6B] text-2xl font-semibold mb-2">
                      Feb 2016
                    </h3>
                    <p className="text-gray-300">
                      Achieve £2m+ of revenue in a single financial year
                    </p>
                  </div>
                </div>

                {/* Feb 2019 */}
                <div className="relative w-64">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B6B] rounded-full left-0" />
                  <div className="pl-8">
                    <h3 className="text-[#FF6B6B] text-2xl font-semibold mb-2">
                      Feb 2019
                    </h3>
                    <p className="text-gray-300">40+ clients helped in total</p>
                  </div>
                </div>

                {/* Feb 2020 */}
                <div className="relative w-64">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B6B] rounded-full left-0" />
                  <div className="pl-8">
                    <h3 className="text-[#FF6B6B] text-2xl font-semibold mb-2">
                      Feb 2020
                    </h3>
                    <p className="text-gray-300">
                      We achieve £20m revenue since inception
                    </p>
                  </div>
                </div>

                {/* Feb 2021 */}
                <div className="relative w-64">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B6B] rounded-full left-0" />
                  <div className="pl-8">
                    <h3 className="text-[#FF6B6B] text-2xl font-semibold mb-2">
                      Feb 2021
                    </h3>
                    <p className="text-gray-300">Grow to 30+ employees</p>
                  </div>
                </div>

                {/* Jan 2022 */}
                <div className="relative w-64">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B6B] rounded-full left-0" />
                  <div className="pl-8">
                    <h3 className="text-[#FF6B6B] text-2xl font-semibold mb-2">
                      Jan 2022
                    </h3>
                    <p className="text-gray-300">
                      Recognised by our Peers in FT's UK's Leading Management
                      Consultants 2022
                    </p>
                  </div>
                </div>

                {/* Feb 2023 */}
                <div className="relative w-64">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B6B] rounded-full left-0" />
                  <div className="pl-8">
                    <h3 className="text-[#FF6B6B] text-2xl font-semibold mb-2">
                      Feb 2023
                    </h3>
                    <p className="text-gray-300">
                      Exceed £5m of revenue in a single financial year
                    </p>
                  </div>
                </div>

                {/* Duplicate for seamless loop */}
                {/* Feb 2016 */}
                <div className="relative w-64">
                  <div className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF6B6B] rounded-full left-0" />
                  <div className="pl-8">
                    <h3 className="text-[#FF6B6B] text-2xl font-semibold mb-2">
                      Feb 2016
                    </h3>
                    <p className="text-gray-300">
                      Achieve £2m+ of revenue in a single financial year
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 bg-black text-white">
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
      <section className="py-8 bg-black text-white">
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

      {/* Team Video Testimonials */}
      <section className="py-8 bg-black text-white">
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
