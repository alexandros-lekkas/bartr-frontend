import Link from "next/link";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent" />

      <div className="relative w-full max-w-4xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm animate-in fade-in duration-500">
            <span className="text-primary font-medium mr-2">New</span>
            <span className="text-muted-foreground">
              Demo Version Now Available in Select Communities
            </span>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight animate-in slide-in-from-bottom-4 duration-500">
            Your Food Sharing Success,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              AI-Powered
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in duration-500">
            Seamlessly connect with your community, get AI-powered food
            matching, and never miss an opportunity to share. Join thousands of
            people transforming their neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-in fade-in duration-500">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-3 h-auto text-base"
            >
              <Link href="/signup">Sign Up & Start Sharing</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-input text-muted-foreground hover:bg-accent rounded-full px-5 py-3 h-auto text-base"
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
