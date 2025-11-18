"use client";

import { Logo } from "@/components/logo";
import { WaitlistDialog } from "@/app/(landing)/_components/waitlist-dialog";

export function Navbar() {
  return (
    <nav className="absolute top-0 right-0 left-0 z-50 backdrop-blur-sm bg-background/80">
      <div className="container flex justify-between items-center px-4 mx-auto h-14">
        <Logo showText />
        <div className="flex gap-6 items-center">
          <WaitlistDialog>
            <button
              type="button"
              className="text-sm font-medium transition-colors cursor-pointer hover:text-primary"
            >
              Join the waitlist
            </button>
          </WaitlistDialog>
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
