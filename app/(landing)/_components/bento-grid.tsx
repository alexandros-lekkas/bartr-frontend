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
            description="Experience unparalleled trading intelligence with our sophisticated AI companion. Discover premium opportunities and execute strategic exchanges with precision."
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
                  <div className="absolute top-2 left-1 right-0 bottom-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Trading Goods Card */}
          <BentoCard
            name="Trade & Acquire"
            description="Exchange your items with the hub and earn premium barter credits. Curate your collection from our exclusive global network of distinguished traders."
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
                  <div className="absolute top-2 left-1 right-0 bottom-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Active Trader Rewards Card */}
          <BentoCard
            name="Elite Rewards"
            description="Unlock exclusive rewards through your trading excellence. Elevate your status and accumulate premium credits with every strategic exchange."
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
                  <div className="absolute top-2 left-1 right-0 bottom-0 rounded-[30px] bg-blue-500/5 pointer-events-none" />
                </div>
              </div>
            }
          />

          {/* Globe Card - Centered, 3 columns */}
          <BentoCard
            name="Global Trading Network"
            description="Join an exclusive worldwide network of distinguished traders. Witness premium exchanges unfold in real-time across our interactive globe. Transform the ordinary into the extraordinary."
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
