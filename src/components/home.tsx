import React, { useState } from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ServicesSection from "./sections/ServicesSection";
import ProcessSection from "./sections/ProcessSection";
import ProjectsSection from "./sections/ProjectsSection";
import Footer from "./Footer";
import RegistrationModal from "./RegistrationModal";

export default function Home() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar onRegisterInterest={() => setShowRegistrationModal(true)} />
      <Hero onRegisterInterest={() => setShowRegistrationModal(true)} />
      <ServicesSection />
      <ProcessSection />
      <ProjectsSection />
      <Footer />
      <RegistrationModal
        open={showRegistrationModal}
        onOpenChange={setShowRegistrationModal}
      />
    </div>
  );
}
