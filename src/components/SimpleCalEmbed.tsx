import React from "react";
import Cal from "@calcom/embed-react";

export default function SimpleCalEmbed() {
  return (
    <div className="h-[600px] w-full">
      <Cal
        calLink="digitransinc/consultation-digitrans"
        style={{ width: "100%", height: "100%" }}
        config={{
          layout: "month_view",
          theme: "dark",
        }}
      />
    </div>
  );
}
