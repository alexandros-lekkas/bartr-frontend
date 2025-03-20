import Link from "next/link";

import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <div className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Make a Difference?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of people who are already sharing food and making their
          communities stronger.
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
  );
}
