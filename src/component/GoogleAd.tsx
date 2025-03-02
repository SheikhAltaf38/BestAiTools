"use client";

import { useEffect } from "react";
import { ref, get, set } from "firebase/database";
import { database } from "../utils/lib/firebaseConfig"; // Import Firebase config

export default function GoogleAd({ adSlot }: { adSlot: string }) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbygoogle) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (error) {
        console.error("AdSense error:", error);
      }
    }
  }, []);

  // Function to handle ad clicks
  const handleAdClick = async () => {
    try {
      const adClicksRef = ref(database, "adClicks");
      const snapshot = await get(adClicksRef);

      let currentClicks = snapshot.exists() ? snapshot.val() : 0;
      const newClicks = currentClicks + 1;

      await set(adClicksRef, newClicks);
      console.log(`Ad clicked! New total: ${newClicks}`);
    } catch (error) {
      console.error("Error updating ad clicks:", error);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="your-ad-client-id"
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
        onClick={handleAdClick} // Track clicks
      ></ins>
    </div>
  );
}
