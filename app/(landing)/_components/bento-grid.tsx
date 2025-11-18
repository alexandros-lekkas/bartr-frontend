"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import {
  Bot,
  GraduationCap,
  ShoppingBag,
  Trophy,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Glow text component
function GlowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative inline-block", className)}>
      <h2
        className={cn(
          "text-4xl font-bold md:text-5xl lg:text-6xl",
          "bg-gradient-to-r from-primary via-primary/80 to-primary",
          "bg-clip-text text-transparent",
          "drop-shadow-[0_0_15px_rgba(25,70,250,0.5)]",
          "dark:drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]"
        )}
        style={{
          textShadow:
            "0 0 20px rgba(25, 70, 250, 0.3), 0 0 40px rgba(25, 70, 250, 0.2)",
        }}
      >
        {children}
      </h2>
    </div>
  );
}

export function BentoGridSection() {
  return (
    <div className="flex flex-col gap-12 py-16">
      {/* Glow Text Section */}
      <div className="flex justify-center items-center">
        <GlowText>Trade all over your neighborhood</GlowText>
      </div>

      {/* Bento Grid */}
      <BentoGrid className="md:grid-cols-3 lg:grid-cols-4">
        {/* AI Buddy Card */}
        <BentoCard
          name="AI Buddy"
          description="Get personalized trading assistance with our AI-powered buddy that helps you find the best trades and negotiate deals."
          href="#"
          cta="Learn more"
          Icon={Bot}
          className="col-span-3 md:col-span-1"
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5" />
          }
        />

        {/* Training Card */}
        <BentoCard
          name="Training & Education"
          description="Learn the art of bartering with our comprehensive training programs designed to help you become a skilled trader."
          href="#"
          cta="Start learning"
          Icon={GraduationCap}
          className="col-span-3 md:col-span-1"
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/5" />
          }
        />

        {/* Trading Goods Card */}
        <BentoCard
          name="Trading Goods"
          description="Find and trade goods for barter credits. Discover amazing items from your local community and trade what you have for what you need."
          href="#"
          cta="Explore trades"
          Icon={ShoppingBag}
          className="col-span-3 md:col-span-1"
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/5" />
          }
        />

        {/* Active Trader Rewards Card */}
        <BentoCard
          name="Active Trader Rewards"
          description="Win rewards for being an active trader. The more you trade, the more you earn. Unlock exclusive benefits and special offers."
          href="#"
          cta="View rewards"
          Icon={Trophy}
          className="col-span-3 md:col-span-1"
          background={
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5" />
          }
        />

        {/* Globe Card - Full Width */}
        <BentoCard
          name="Global Trading Network"
          description="Connect with traders from around the world. See where trades are happening in real-time on our interactive globe."
          href="#"
          cta="Explore globe"
          Icon={Sparkles}
          className="col-span-3 md:col-span-3 lg:col-span-4"
          background={
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-primary/10 to-blue-500/10" />
              <Globe className="relative" />
            </div>
          }
        />
      </BentoGrid>
    </div>
  );
}

