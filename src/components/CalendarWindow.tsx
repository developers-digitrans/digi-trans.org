import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

interface CalendarWindowProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export default function CalendarWindow({
  open = false,
  onOpenChange,
  title = "Book a Consultation",
  description = "Schedule a consultation with our team to discuss your project needs.",
}: CalendarWindowProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return;

    let isMounted = true;
    setIsLoading(true);
    setError("");

    const initializeCal = async () => {
      try {
        console.log("Initializing Cal.com");
        const cal = await getCalApi();

        if (!cal) {
          console.error("Failed to load Cal API");
          if (isMounted)
            setError("Failed to load calendar. Please try again later.");
          return;
        }

        cal("ui", {
          theme: "dark",
          styles: { branding: { brandColor: "#3b82f6" } },
          hideEventTypeDetails: false,
          layout: "month_view",
        });

        // Set up webhook handler for successful bookings
        cal("on", {
          action: "bookingSuccessful",
          callback: (e) => {
            console.log("Booking successful:", e.detail);
            // Close the dialog after successful booking with a small delay
            setTimeout(() => onOpenChange(false), 2000);
          },
        });

        if (isMounted) setIsLoading(false);
      } catch (err) {
        console.error("Error initializing Cal.com:", err);
        if (isMounted)
          setError("Failed to initialize calendar. Please try again later.");
      }
    };

    initializeCal();

    return () => {
      isMounted = false;
    };
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] bg-slate-900 text-white border-slate-800 z-[100]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {title}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 h-[600px] overflow-hidden relative">
          {error ? (
            <div className="absolute inset-0 flex items-center justify-center text-red-400">
              {error}
            </div>
          ) : (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80 z-10">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
              {open && (
                <Cal
                  calLink="digitransinc/consultation-digitrans"
                  style={{ width: "100%", height: "100%", overflow: "scroll" }}
                  config={{
                    layout: "month_view",
                    theme: "dark",
                    hideEventTypeDetails: false,
                  }}
                />
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
