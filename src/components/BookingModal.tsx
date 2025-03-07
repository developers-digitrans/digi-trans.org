import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import Cal, { getCalApi } from "@calcom/embed-react";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  description?: string;
}

export default function BookingModal({
  open,
  onOpenChange,
  title = "Book a Demo",
  description = "Schedule a personalized demo to see how our solutions can transform your business.",
}: BookingModalProps) {
  // Get environment variables
  const calUsername = import.meta.env.VITE_CAL_USERNAME || "digitransinc";
  const calEventName =
    import.meta.env.VITE_CAL_EVENT_NAME || "consultation-digitrans";

  useEffect(() => {
    if (!open) return;

    (async function () {
      const cal = await getCalApi();
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
    })();
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

        <div className="mt-4 h-[600px] overflow-hidden">
          {open && (
            <Cal
              calLink={`${calUsername}/${calEventName}`}
              style={{ width: "100%", height: "100%", overflow: "scroll" }}
              config={{
                layout: "month_view",
                theme: "dark",
              }}
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
