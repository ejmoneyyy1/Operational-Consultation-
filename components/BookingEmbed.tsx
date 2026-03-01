"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BookingEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", { 
        styles: { branding: { brandColor: "#D97757" } }, 
        hideEventTypeDetails: false,
        layout: "month_view"
      });
    })();
  }, []);

  return (
    <div className="w-full bg-[#F0EBE1] rounded-sm overflow-hidden min-h-[600px]">
      <Cal 
        calLink="edwin-alobuia-wkggud/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }} 
        config={{ layout: "month_view" }}
      />
    </div>
  );
}
