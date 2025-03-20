import Link from "next/link";
import { Mail, Github, Linkedin } from "lucide-react";

export function ContactUs() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 animate-in fade-in duration-500">
            Get in Touch
          </h2>
          <p className="text-muted-foreground mb-8 animate-in fade-in duration-500">
            Have questions or need support? Our team is here to help you make the most of your food sharing journey.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 animate-in fade-in duration-500">
            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">For General Support</h3>
              <p className="text-muted-foreground mb-4">
                Need help with your account or have general questions?
              </p>
              <Link 
                href="mailto:team@barternow.app"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                team@barternow.app
              </Link>
            </div>

            <div className="p-6 bg-background rounded-lg shadow-sm border">
              <h3 className="text-lg font-semibold mb-2">Contact the CEO</h3>
              <p className="text-muted-foreground mb-4">
                Want to discuss partnerships or have strategic inquiries?
              </p>
              <Link 
                href="mailto:antony@barternow.app"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                antony@barternow.app
              </Link>
            </div>
          </div>

          <div className="mt-12 animate-in fade-in duration-500">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center gap-6">
              <Link
                href="https://github.com/barter-team"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="https://linkedin.com/company/barternow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 