import React, { useState } from "react";
import BookingModal from "./BookingModal";

export default function PromoBanner() {
  const [showBookingModal, setShowBookingModal] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 w-full bg-gradient-to-r from-purple-600 via-sky-500 to-blue-600 animate-gradient-x z-50 bg-[length:200%_200%]">
        <div className="container mx-auto px-4 py-3 text-center text-white flex items-center justify-center gap-2">
          Get in touch with our Data and AI experts with a free 30 min
          consultation.
          <button
            onClick={() => setShowBookingModal(true)}
            className="text-white font-semibold hover:text-purple-200 transition-colors underline underline-offset-2"
          >
            Get started now →
          </button>
        </div>
      </div>

      <BookingModal
        open={showBookingModal}
        onOpenChange={setShowBookingModal}
        title="Book a Free Consultation"
        description="Schedule a 30-minute consultation with our Data and AI experts."
      />
    </>
  );
}
