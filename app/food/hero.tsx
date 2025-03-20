"use client";

import Link from "next/link";
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
    <div className="relative min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-transparent to-transparent" />

      <div className="relative w-full max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Logo className="justify-center mb-6" size="xl" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center mb-4"
        >
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm">
            <span className="text-primary font-medium mr-2">New</span>
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
            className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              AI-Powered
            </span>{" "}
            Food Trading
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
            className="text-xl mb-6 max-w-2xl mx-auto"
          >
            Transform your kitchen with instant food matching and trading.
            <br />
            Join our thriving community to eliminate waste and boost savings.
            <br />
            Together, let's revolutionize how we share food.
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
              className="rounded-full px-8 py-3 h-auto text-base font-semibold cursor-pointer group"
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
              className="text-muted-foreground text-sm"
            >
              Scroll to explore
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
