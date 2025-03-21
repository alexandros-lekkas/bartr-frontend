"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";

export function Hero() {
  const scrollToFeatures = () => {
    const featuresSection = document.getElementById("features");
    featuresSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent" />

      <div className="relative w-full max-w-4xl px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Logo className="justify-center mb-6" size="xl" variant="default" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <div className="inline-flex items-center px-4 py-1 text-sm rounded-full bg-primary/10">
            <span className="mr-2 font-medium text-primary">New</span>
            <span className="text-muted-foreground">
              Demo Now Available in Select Communities
            </span>
          </div>
        </motion.div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
            className="mb-6 text-5xl font-bold tracking-tight md:text-7xl text-foreground"
          >
            <span className="text-transparent bg-gradient-to-r from-primary to-primary/80 bg-clip-text">
              AI-Powered
            </span>{" "}
            Peer-to-Peer Marketplace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="max-w-2xl mx-auto mb-6 text-xl"
          >
            Connect directly with others to exchange items and services.
            <br />
            Join our community marketplace to save money and reduce waste.
            <br />
            Together, let's build a more sustainable future.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            className="flex flex-col items-center gap-4"
          >
            <Button
              onClick={scrollToFeatures}
              size="lg"
              variant="outline"
              className="h-auto px-8 py-3 text-base font-semibold rounded-full cursor-pointer group"
            >
              See How It Works
              <ArrowDown className="w-4 h-4 ml-2 transition-transform group-hover:translate-y-1" />
            </Button>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-sm text-muted-foreground"
            >
              Scroll to explore
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
