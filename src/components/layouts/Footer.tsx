import { Button } from "@/components/ui/button";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background/90 backdrop-blur-lg border-t border-border py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Parcel Delivery</h3>
          <p className="text-muted-foreground">
            Reliable, fast, and secure parcel delivery with real-time tracking and world-class support.
          </p>
          <div className="flex gap-3">
            <Button asChild variant="ghost" size="icon">
              <a href="https://github.com/Aurnab990" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <Twitter />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon">
              <a href="https://www.linkedin.com/in/aurnab-das-272337197/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </Button>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><a href="/">Home</a></li>
            <li><a href="/feature">Features</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Subscribe</h4>
          <p className="text-muted-foreground">
            Get the latest updates and news about our parcel delivery services.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-md border border-border bg-background text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button>Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Parcel Delivery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;