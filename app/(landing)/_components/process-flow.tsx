"use client";

import { ArrowRight } from "lucide-react";
import { Package, Coins, Globe, CheckCircle } from "lucide-react";

const steps = [
  {
    title: "Tell Us What You’re Selling",
    description: "Choose the items you want to trade with the hub.",
    icon: Package,
  },
  {
    title: "Bring Items for Check-In",
    description:
      "Bring your items (like electronics, clothes, or home goods) to the hub for inspection.",
    icon: Globe,
  },
  {
    title: "Receive Bartr Credits",
    description: "Once approved, get credits added to your Bartr account.",
    icon: Coins,
  },
  {
    title: "Buy What You Need",
    description:
      "Use your credits to buy food and other essentials from the online inventory.",
    icon: CheckCircle,
  },
];

export function ProcessFlow() {
  return (
    <section className="px-4 pt-20 pb-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col gap-2 text-center">
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              How It Works
            </h2>
            <p className="text-muted-foreground">
              Turn what you have into what you need
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between md:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="flex flex-col md:flex-row items-center gap-4 md:flex-1"
                >
                  {/* Step Card */}
                  <div className="flex flex-col gap-3 items-center text-center p-6 rounded-lg border bg-card w-full shadow-md">
                    <div className="flex justify-center items-center w-16 h-16 rounded-full bg-primary/10">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:flex items-center justify-center text-muted-foreground">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                  {index < steps.length - 1 && (
                    <div className="flex md:hidden items-center justify-center text-muted-foreground">
                      <ArrowRight className="w-6 h-6 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
