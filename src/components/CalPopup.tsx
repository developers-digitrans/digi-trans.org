import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import Cal, { getCalApi } from "@calcom/embed-react";

interface CalPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export default function CalPopup({
  open,
  onOpenChange,
  title = "Book a Consultation",
  description = "Schedule a 30-minute consultation with our team.",
}: CalPopupProps) {
  const [calLoaded, setCalLoaded] = useState(false);
  const [error, setError] = useState("");

  // Hard-code the values directly instead of using env variables
  const calUsername = "digitransinc";
  const calEventName = "30-min-consultation";

  useEffect(() => {
    if (!open) return;

    let isMounted = true;

    const initializeCal = async () => {
      try {
        console.log("Initializing Cal.com with:", {
          calUsername,
          calEventName,
        });
        const cal = await getCalApi();

        if (!cal) {
          console.error("Failed to load Cal API");
          if (isMounted)
            setError("Failed to load calendar. Please try again later.");
          return;
        }

        cal("ui", {
          theme: "dark",
          hideEventTypeDetails: false,
          layout: "month_view",
          cssVarsPerTheme: {
            light: {
              "--cal-brand": "#3b82f6",
              "--cal-brand-emphasis": "#2563eb",
            },
            dark: {
              "--cal-brand": "#3b82f6",
              "--cal-brand-emphasis": "#2563eb",
            },
          },
        });

        // Set up webhook handler for successful bookings
        cal("on", {
          action: "bookingSuccessful",
          callback: (e) => {
            console.log("Booking successful:", e.detail);
            // Close the dialog after successful booking
            setTimeout(() => onOpenChange(false), 2000);
          },
        });

        // Set up error handler
        cal("on", {
          action: "error",
          callback: (e) => {
            console.error("Cal.com error:", e.detail);
            if (isMounted)
              setError(
                "An error occurred with the calendar. Please try again later.",
              );
          },
        });

        if (isMounted) setCalLoaded(true);
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
      <DialogContent className="sm:max-w-[600px] bg-slate-900 text-white border-slate-800 z-[100]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {title}
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            {description}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 h-[500px] overflow-hidden">
          {error ? (
            <div className="flex items-center justify-center h-full text-red-400">
              {error}
            </div>
          ) : (
            <div className="w-full h-full">
              <Cal
                calLink={`${calUsername}/${calEventName}`}
                style={{ width: "100%", height: "100%" }}
                config={{
                  layout: "month_view",
                  theme: "dark",
                  hideEventTypeDetails: false,
                }}
              />
              {!calLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-slate-900/80">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              )}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
