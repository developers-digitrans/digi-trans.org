import React, { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import Cal, { getCalApi } from "@calcom/embed-react";

interface RegistrationModalProps {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}

export default function RegistrationModal({
  open = true,
  onOpenChange,
}: RegistrationModalProps) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30-min-consultation" });
      cal("ui", {
        theme: "dark",
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: {
            "--cal-brand": "#000000",
            "--cal-brand-emphasis": "#000000",
          },
          dark: {
            "--cal-brand": "#000000",
            "--cal-brand-emphasis": "#000000",
          },
        },
      });

      // Set up webhook handler
      cal("on", {
        action: "bookingSuccessful",
        callback: (e) => {
          // Handle successful booking
          console.log("Booking successful:", e.detail);

          // Make API call to webhook
          fetch("https://api.cal.com/v1/hooks", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer Webhook13579*-/",
            },
            body: JSON.stringify({
              event: "BOOKING_CREATED",
              payload: e.detail,
            }),
          });
        },
      });
    })();
  }, []);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-slate-900 text-white border-slate-800 z-[100]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            Book a Call
          </DialogTitle>
          <DialogDescription className="text-slate-400">
            Schedule a 30-minute consultation with our team.
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4">
          <Cal
            namespace="30-min-consultation"
            calLink="team-digitrans/30-min-consultation"
            style={{ width: "100%", height: "500px", overflow: "scroll" }}
            config={{ layout: "month_view", theme: "dark" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
