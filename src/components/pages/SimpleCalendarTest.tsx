import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SimpleCalEmbed from "../SimpleCalEmbed";

export default function SimpleCalendarTest() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="pt-32 pb-16 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Simple Calendar Test
            </h1>
            <p className="text-xl text-gray-300">
              This is a simplified test of the Cal.com integration.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800">
            <SimpleCalEmbed />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
