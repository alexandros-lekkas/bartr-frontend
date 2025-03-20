"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plus, Search, CheckCircle, ArrowRight } from "lucide-react";
import { ParallaxSection } from "../components/parallax-section";

const features = [
  {
    title: "List Your Items",
    description:
      "Upload photos and details of the food items you want to share. Our AI-powered system helps you create attractive listings that catch attention.",
    direction: "left",
    mockup: ListingMockup,
  },
  {
    title: "Smart Matching",
    description:
      "Our AI analyzes your preferences and available items to suggest perfect matches within your community. Never miss an opportunity to trade!",
    direction: "right",
    mockup: MatchingMockup,
  },
  {
    title: "Seamless Trading",
    description:
      "Arrange trades and share food items with your community. Track your exchanges and build your reputation as a trusted member.",
    direction: "left",
    mockup: TradingMockup,
  },
];

function ListingMockup() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-background rounded-2xl shadow-lg p-6 w-full h-[400px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">Create New Listing</h4>
          <button
            className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-label="Add new item"
          >
            <Plus className="w-5 h-5 text-primary" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="h-32 bg-muted rounded-lg flex items-center justify-center">
            <motion.div
              animate={{ scale: isHovered ? 1.1 : 1 }}
              className="text-muted-foreground"
            >
              Drop your food photos here
            </motion.div>
          </div>

          <div className="space-y-2">
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-4 bg-muted rounded w-1/2" />
            <div className="h-4 bg-muted rounded w-2/3" />
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2 bg-primary text-primary-foreground rounded-lg flex items-center justify-center gap-2"
        >
          Create Listing
        </motion.button>
      </div>
    </div>
  );
}

function MatchingMockup() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className="bg-background rounded-2xl shadow-lg p-6 w-full h-[400px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      <div className="relative space-y-4">
        <div className="flex items-center gap-2">
          <Search className="w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search for items..."
            className="bg-transparent border-none focus:outline-none w-full"
          />
        </div>

        <div className="space-y-3">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: selectedItem === index ? 1.02 : 1,
                backgroundColor:
                  selectedItem === index ? "var(--primary)" : "var(--muted)",
                color:
                  selectedItem === index
                    ? "var(--primary-foreground)"
                    : "var(--foreground)",
              }}
              className="p-4 rounded-lg cursor-pointer flex items-center justify-between"
              onClick={() => setSelectedItem(index)}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-background rounded-lg" />
                <div>
                  <div className="h-4 bg-background rounded w-24" />
                  <div className="h-3 bg-background/80 rounded w-16 mt-1" />
                </div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TradingMockup() {
  const [step, setStep] = useState(0);

  return (
    <div className="bg-background rounded-2xl shadow-lg p-6 w-full h-[400px] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />

      <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold">Trade Details</h4>
          <div className="flex gap-2">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  step >= index ? "bg-primary" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <motion.div
            animate={{ opacity: step >= 0 ? 1 : 0.5 }}
            className="p-4 bg-muted rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-background rounded-lg" />
              <div>
                <div className="h-4 bg-background rounded w-24" />
                <div className="h-3 bg-background/80 rounded w-16 mt-1" />
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ opacity: step >= 1 ? 1 : 0.5 }}
            className="p-4 bg-muted rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-background rounded-lg" />
              <div>
                <div className="h-4 bg-background rounded w-24" />
                <div className="h-3 bg-background/80 rounded w-16 mt-1" />
              </div>
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-2 bg-primary text-primary-foreground rounded-lg flex items-center justify-center gap-2"
            onClick={() => setStep((s) => (s + 1) % 3)}
          >
            {step === 2 ? "Complete Trade" : "Next Step"}
          </motion.button>
        </div>
      </div>
    </div>
  );
}

export function Features() {
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setActiveFeature(index);
          } else if (activeFeature === index) {
            // If the current active feature is leaving the viewport,
            // find the next visible feature
            const features = document.querySelectorAll("[data-feature]");
            for (let i = 0; i < features.length; i++) {
              const feature = features[i];
              const rect = feature.getBoundingClientRect();
              if (rect.top < window.innerHeight / 2) {
                setActiveFeature(i);
                break;
              }
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px",
        threshold: 0,
      }
    );

    const features = document.querySelectorAll("[data-feature]");
    features.forEach((feature) => observer.observe(feature));

    return () => observer.disconnect();
  }, [activeFeature]);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.02]"></div>

      <div className="container mx-auto px-4">
        <div className="relative pb-[50vh]">
          {features.map((feature, index) => (
            <ParallaxSection
              key={index}
              speed={0.5}
              className="sticky top-0 h-[85vh] flex items-center"
            >
              <div data-feature data-index={index} className="w-full">
                <div
                  className={`container mx-auto px-4 flex flex-col ${
                    feature.direction === "right"
                      ? "md:flex-row-reverse"
                      : "md:flex-row"
                  } items-center gap-12`}
                >
                  <motion.div
                    className="flex-1 space-y-6 p-8 rounded-2xl bg-background"
                    animate={{
                      opacity: activeFeature === index ? 1 : 0,
                      scale: activeFeature === index ? 1 : 0.95,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <h3 className="text-4xl font-bold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="text-xl text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>

                  <motion.div
                    className="flex-1 w-full"
                    animate={{
                      opacity: activeFeature === index ? 1 : 0,
                      scale: activeFeature === index ? 1 : 0.95,
                      y: activeFeature === index ? 0 : 20,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <feature.mockup />
                  </motion.div>
                </div>
              </div>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </div>
  );
}
