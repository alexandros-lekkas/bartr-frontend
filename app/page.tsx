import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-32 relative">
        {/* Green gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />

        {/* New badge */}
        <div className="relative mb-8 flex justify-center lg:justify-start">
          <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1 text-sm">
            <span className="text-primary font-medium mr-2">New</span>
            <span className="text-muted-foreground">
              AI Food Matching Now Available
            </span>
          </div>
        </div>

        <div className="relative text-center lg:text-left max-w-4xl mx-auto lg:mx-0">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Your Food Sharing Success,{" "}
            <span className="bg-gradient-to-r from-primary to-primary/80 text-transparent bg-clip-text">
              AI-Powered
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
            Seamlessly connect with your community, get AI-powered food
            matching, and never miss an opportunity to share. Join thousands of
            people transforming their neighborhood.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-6 h-auto text-lg"
            >
              <Link href="/signup">Sign Up & Start Sharing</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-input text-muted-foreground hover:bg-accent rounded-full px-8 py-6 h-auto text-lg"
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-card py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                List Your Items
              </h3>
              <p className="text-muted-foreground">
                Upload photos and details of the food items you want to share.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Connect
              </h3>
              <p className="text-muted-foreground">
                Browse items from others and connect with members in your
                community.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">
                Trade & Share
              </h3>
              <p className="text-muted-foreground">
                Arrange trades and share food items with your community.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of people who are already sharing food and making
            their communities stronger.
          </p>
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-background text-primary hover:bg-background/90"
          >
            <Link href="/signup">Start Sharing Today</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
