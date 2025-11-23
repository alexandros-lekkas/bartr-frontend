"use client";

import Image from "next/image";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { Globe } from "@/components/ui/globe";
import { AuroraText } from "@/components/ui/aurora-text";
import { Bot, ShoppingBag, Trophy, Sparkles } from "lucide-react";

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
            Icon={Bot}
            className="col-span-3 md:col-span-1 cursor-default"
            background={
              <div className="absolute inset-0 overflow-hidden p-4 pr-0 flex items-start justify-end">
                <div className="relative">
                  <Image
                    src="/bento/ai-buddy.png"
                    alt="AI Buddy"
                    width={200}
                    height={400}
                    className="w-auto rounded-[30px] object-cover object-top shadow-lg"
                    style={{
                      aspectRatio: "9/16",
                      height: "100%",
                      maxHeight: "100%",
                      transform: "translateX(15%)",
                    }}
                  />
                  <div className="absolute inset-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Trading Goods Card */}
          <BentoCard
            name="Trading Goods"
            description="Find and trade goods for barter credits. Discover amazing items from your local community and trade what you have for what you need."
            Icon={ShoppingBag}
            className="col-span-3 md:col-span-1 cursor-default"
            background={
              <div className="absolute inset-0 overflow-hidden p-4 pr-0 flex items-start justify-end">
                <div className="relative">
                  <Image
                    src="/bento/trading-goods.png"
                    alt="Trading Goods"
                    width={200}
                    height={400}
                    className="w-auto rounded-[30px] object-cover object-top shadow-lg"
                    style={{
                      aspectRatio: "9/16",
                      height: "100%",
                      maxHeight: "100%",
                      transform: "translateX(15%)",
                    }}
                  />
                  <div className="absolute inset-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Active Trader Rewards Card */}
          <BentoCard
            name="Active Trader Rewards"
            description="Win rewards for being an active trader. The more you trade, the more you earn. Unlock exclusive benefits and special offers."
            Icon={Trophy}
            className="col-span-3 md:col-span-1 cursor-default"
            background={
              <div className="absolute inset-0 overflow-hidden p-4 pr-0 flex items-start justify-end">
                <div className="relative">
                  <Image
                    src="/bento/active-trading.png"
                    alt="Active Trading"
                    width={200}
                    height={400}
                    className="w-auto rounded-[30px] object-cover object-top shadow-lg"
                    style={{
                      aspectRatio: "9/16",
                      height: "100%",
                      maxHeight: "100%",
                      transform: "translateX(15%)",
                    }}
                  />
                  <div className="absolute inset-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Globe Card - Centered, 3 columns */}
          <BentoCard
            name="Global Trading Network"
            description="Connect with traders from around the world. See where trades are happening in real-time on our interactive globe."
            Icon={Sparkles}
            className="col-span-3 cursor-default"
            background={
              <div className="overflow-hidden absolute inset-0 bg-gradient-to-b via-white to-white from-neutral-50/50">
                <Globe className="relative" />
              </div>
            }
          />
        </BentoGrid>
      </div>
    </div>
  );
}
