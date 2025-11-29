"use client";

import { DottedMap } from "@/components/ui/dotted-map";
import { Button } from "@/components/ui/button";

const WAITLIST_FORM_URL = "https://forms.gle/6rDABPGVGvh745Jc9";

const markers = [
  {
    lat: 40.7128,
    lng: -74.006,
    size: 0.3,
  }, // New York
  {
    lat: 34.0522,
    lng: -118.2437,
    size: 0.3,
  }, // Los Angeles
  {
    lat: 51.5074,
    lng: -0.1278,
    size: 0.3,
  }, // London
  {
    lat: -33.8688,
    lng: 151.2093,
    size: 0.3,
  }, // Sydney
  {
    lat: 48.8566,
    lng: 2.3522,
    size: 0.3,
  }, // Paris
  {
    lat: 35.6762,
    lng: 139.6503,
    size: 0.3,
  }, // Tokyo
  {
    lat: 55.7558,
    lng: 37.6176,
    size: 0.3,
  }, // Moscow
  {
    lat: 39.9042,
    lng: 116.4074,
    size: 0.3,
  }, // Beijing
  {
    lat: 28.6139,
    lng: 77.209,
    size: 0.3,
  }, // New Delhi
  {
    lat: -23.5505,
    lng: -46.6333,
    size: 0.3,
  }, // São Paulo
  {
    lat: 1.3521,
    lng: 103.8198,
    size: 0.3,
  }, // Singapore
  {
    lat: 25.2048,
    lng: 55.2708,
    size: 0.3,
  }, // Dubai
  {
    lat: 52.52,
    lng: 13.405,
    size: 0.3,
  }, // Berlin
  {
    lat: 19.4326,
    lng: -99.1332,
    size: 0.3,
  }, // Mexico City
  {
    lat: -26.2041,
    lng: 28.0473,
    size: 0.3,
  }, // Johannesburg
];

export function Hero() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative h-[650px] w-full overflow-hidden rounded-lg">
        <div className="to-background absolute inset-0 bg-radial from-transparent to-70%" />
        <DottedMap markers={markers} markerColor="var(--primary)" />

        {/* Overlay Content */}
        <div className="flex absolute inset-0 z-10 justify-center items-center">
          <div className="flex relative flex-col gap-6 items-center px-4 max-w-2xl text-center">
            {/* Main Heading */}
            <div className="relative">
              {/* Individual blur backdrop for heading */}
              <div
                className="absolute inset-0 -inset-y-3 -inset-x-6 backdrop-blur-md bg-white/20"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 80% 70% at center, black 50%, transparent 90%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 80% 70% at center, black 50%, transparent 90%)",
                }}
              />
              <h1 className="relative z-10 text-6xl font-medium leading-none text-primary cursor-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2224%22 height=%2224%22><text x=%2212%22 y=%2218%22 font-size=%2220%22 text-anchor=%22middle%22>🤝</text></svg>'),auto]">
                Turn what you have
                <br />
                into what you need
              </h1>
            </div>

            {/* Description */}
            <div className="relative">
              {/* Individual blur backdrop for description */}
              <div
                className="absolute inset-0 -inset-y-2 -inset-x-4 backdrop-blur-md bg-white/20"
                style={{
                  maskImage:
                    "radial-gradient(ellipse 85% 60% at center, black 50%, transparent 90%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse 85% 60% at center, black 50%, transparent 90%)",
                }}
              />
              <p className="relative z-10 max-w-xl text-lg">
                Bartr makes trading simple and accessible. Trade your items for
                barter credits and access a global network of goods. Turn what
                you have into what you need, sustainably and efficiently.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex relative z-10 gap-4 items-center">
              <Button
                className="px-6 h-12 text-lg text-white rounded-full transition-all bg-primary hover:bg-primary/90"
                asChild
              >
                <a
                  href={WAITLIST_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join the waitlist
                </a>
              </Button>

              <Button
                variant="secondary"
                className="px-8 h-12 text-lg text-white bg-black rounded-full transition-all hover:bg-gray-900"
                asChild
              >
                <a href="mailto:admin@bartr.it.com">Contact us</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
