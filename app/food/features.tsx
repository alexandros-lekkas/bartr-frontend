import Image from "next/image";

const features = [
  {
    title: "List Your Items",
    description: "Upload photos and details of the food items you want to share. Our AI-powered system helps you create attractive listings that catch attention.",
    image: "/features/listing.png",
    direction: "left",
  },
  {
    title: "Smart Matching",
    description: "Our AI analyzes your preferences and available items to suggest perfect matches within your community. Never miss an opportunity to trade!",
    image: "/features/matching.png",
    direction: "right",
  },
  {
    title: "Seamless Trading",
    description: "Arrange trades and share food items with your community. Track your exchanges and build your reputation as a trusted member.",
    image: "/features/trading.png",
    direction: "left",
  },
];

export function Features() {
  return (
    <div className="bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground animate-in fade-in duration-500">
          How It Works
        </h2>
        
        {features.map((feature, index) => (
          <div 
            key={index}
            className={`flex flex-col ${
              feature.direction === "right" ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-12 py-24 border-b last:border-b-0`}
          >
            <div className="flex-1 space-y-6 animate-in fade-in duration-500">
              <h3 className="text-3xl font-bold text-foreground">
                {feature.title}
              </h3>
              <p className="text-xl text-muted-foreground">
                {feature.description}
              </p>
            </div>
            
            <div className="flex-1 relative h-[400px] w-full animate-in slide-in-from-bottom-4 duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="relative w-full h-full">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 