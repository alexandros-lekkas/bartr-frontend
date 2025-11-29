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
          Experience the{" "}
          <AuroraText
            colors={["#1946fa", "#3b82f6", "#60a5fa", "#93c5fd"]}
            className="font-medium"
          >
            future of exchange
          </AuroraText>
        </h2>
      </div>

      {/* Bento Grid */}
      <div className="mx-auto w-full max-w-4xl">
        <BentoGrid className="md:grid-cols-3">
          {/* AI Buddy Card */}
          <BentoCard
            name="AI Buddy"
            description="Get smart trading suggestions with our AI companion. Find the best matches for your items and make exchanges that work for you."
            Icon={Bot}
            className="col-span-3 cursor-default md:col-span-1"
            background={
              <div className="flex overflow-hidden absolute inset-0 justify-end items-start p-4 pr-0">
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
                  <div className="absolute top-2 left-1 right-0 bottom-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Trading Goods Card */}
          <BentoCard
            name="Trade & Acquire"
            description="Exchange your items with the hub and earn barter credits. Browse and find what you need from our global network of traders."
            Icon={ShoppingBag}
            className="col-span-3 cursor-default md:col-span-1"
            background={
              <div className="flex overflow-hidden absolute inset-0 justify-end items-start p-4 pr-0">
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
                  <div className="absolute top-2 left-1 right-0 bottom-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Active Trader Rewards Card */}
          <BentoCard
            name="Rewards"
            description="Earn rewards as you trade. Build up credits with every exchange and unlock more opportunities to get what you need."
            Icon={Trophy}
            className="col-span-3 cursor-default md:col-span-1"
            background={
              <div className="flex overflow-hidden absolute inset-0 justify-end items-start p-4 pr-0">
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
                  <div className="absolute top-2 left-1 right-0 bottom-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Globe Card - Centered, 3 columns */}
          <BentoCard
            name="Global Trading Network"
            description="Join a worldwide network of traders. See exchanges happening in real-time across our interactive globe. Connect with people around the world to trade what you have for what you need."
            Icon={Sparkles}
            className="col-span-3 cursor-default"
            background={
              <div className="overflow-hidden absolute inset-0 via-white to-white bg-linear-to-b from-neutral-50/50">
                <Globe className="relative" />
              </div>
            }
          />
        </BentoGrid>
      </div>
    </div>
  );
}
