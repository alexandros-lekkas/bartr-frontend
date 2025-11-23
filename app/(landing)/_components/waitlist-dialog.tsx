"use client";

import React from "react";

const WAITLIST_FORM_URL = "https://forms.gle/6rDABPGVGvh745Jc9";

export function WaitlistDialog({ children }: { children: React.ReactNode }) {
  const handleClick = () => {
    window.open(WAITLIST_FORM_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {children}
    </div>
  );
}
