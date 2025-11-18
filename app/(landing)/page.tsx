"use client";

import { useState } from "react";
import { Hero } from "./_components/hero";
import { Navbar } from "./_components/navbar";

export default function HomePage() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Navbar onJoinWaitlistClick={() => setIsDialogOpen(true)} />
      <Hero isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />
    </>
  );
}
