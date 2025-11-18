import { DottedMap } from "@/components/ui/dotted-map";
import { Button } from "@/components/ui/button";
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";

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
      <div className="relative h-[750px] w-full overflow-hidden rounded-lg">
        <div className="to-background absolute inset-0 bg-radial from-transparent to-70%" />
        <DottedMap markers={markers} markerColor="var(--primary)" />

        {/* Overlay Content */}
        <div className="flex absolute inset-0 justify-center items-center">
          <div className="flex flex-col gap-6 items-center px-4 max-w-2xl text-center">
            {/* Main Heading */}
            <h1 className="text-6xl font-medium leading-none text-primary">
              Bartr, Trade Anything
              <br />
              for Anything
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg text-gray-600">
              Speak directly with avatars to practice counseling skills, explore
              different scenarios, and get instant feedback.
            </p>

            {/* CTA Buttons */}
            <div className="flex gap-4 items-center">
              <Button className="px-6 h-12 text-lg text-white rounded-full transition-all bg-primary hover:px-7 hover:bg-primary/90">
                Get started
              </Button>

              <Button
                variant="secondary"
                className="px-8 h-12 text-lg text-white bg-black rounded-full transition-all hover:px-9 hover:bg-gray-900"
              >
                Book a demo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
