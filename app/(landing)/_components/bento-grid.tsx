"use client";

import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { AuroraText } from "@/components/ui/aurora-text";
import { Bot, ShoppingBag, Trophy, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function BentoGridSection() {
  return (
    <div className="flex flex-col gap-10">
      {/* Aurora Text Section */}
      <div className="flex justify-center items-center">
        <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl">
          Trade all over{" "}
          <AuroraText
            colors={["#1946fa", "#3b82f6", "#60a5fa", "#93c5fd"]}
            className="font-medium"
          >
            in your neighborhood
          </AuroraText>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="mx-auto w-full max-w-4xl">
        <BentoGrid className="md:grid-cols-3">
          {/* AI Buddy Card */}
          <BentoCard
            name="AI Buddy"
            description="Get personalized trading assistance with our AI-powered buddy that helps you find the best trades and negotiate deals."
            href="#"
            cta="Learn more"
            Icon={Bot}
            className="col-span-3 md:col-span-1 cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22><text x=%2212%22 y=%2218%22 font-size=%2220%22 text-anchor=%22middle%22>🤖</text></svg>'),auto]"
            background={
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-white to-white" />
            }
          />

          {/* Trading Goods Card */}
          <BentoCard
            name="Trading Goods"
            description="Find and trade goods for barter credits. Discover amazing items from your local community and trade what you have for what you need."
            href="#"
            cta="Explore trades"
            Icon={ShoppingBag}
            className="col-span-3 md:col-span-1 cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22><text x=%2212%22 y=%2218%22 font-size=%2220%22 text-anchor=%22middle%22>🛍️</text></svg>'),auto]"
            background={
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-white to-white" />
            }
          />

          {/* Active Trader Rewards Card */}
          <BentoCard
            name="Active Trader Rewards"
            description="Win rewards for being an active trader. The more you trade, the more you earn. Unlock exclusive benefits and special offers."
            href="#"
            cta="View rewards"
            Icon={Trophy}
            className="col-span-3 md:col-span-1 cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22><text x=%2212%22 y=%2218%22 font-size=%2220%22 text-anchor=%22middle%22>🏆</text></svg>'),auto]"
            background={
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-white to-white" />
            }
          />

          {/* Globe Card - Centered, 3 columns */}
          <BentoCard
            name="Global Trading Network"
            description="Connect with traders from around the world. See where trades are happening in real-time on our interactive globe."
            href="#"
            cta="Explore network"
            Icon={Sparkles}
            className="col-span-3 cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22><text x=%2212%22 y=%2218%22 font-size=%2220%22 text-anchor=%22middle%22>🌍</text></svg>'),auto]"
            background={
              <div className="overflow-hidden absolute inset-0 bg-gradient-to-b from-neutral-50/50 via-white to-white">
                <Globe className="relative" />
              </div>
            }
          />
        </BentoGrid>
      </div>
    </div>
  );
}
