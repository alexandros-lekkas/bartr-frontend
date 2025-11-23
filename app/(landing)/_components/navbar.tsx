"use client";

import { Logo } from "@/components/logo";

const WAITLIST_FORM_URL = "https://forms.gle/6rDABPGVGvh745Jc9";

export function Navbar() {
  return (
    <nav className="absolute top-0 right-0 left-0 z-50 backdrop-blur-sm bg-background/80">
      <div className="container flex justify-between items-center px-4 mx-auto h-14">
        <Logo showText />
        <div className="flex gap-6 items-center">
          <a
            href={WAITLIST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium transition-colors cursor-pointer hover:text-primary"
          >
            Join the Waitlist
          </a>
          <a
            href="mailto:admin@bartr.it.com"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Contact us
          </a>
        </div>
      </div>
    </nav>
  );
}
