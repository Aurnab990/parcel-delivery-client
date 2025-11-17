import {
  Rocket,
  ShieldCheck,
  Timer,
  Truck,
  MapPinned,
  ScanSearch,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Rocket,
    title: "Fast Parcel Delivery",
    desc: "Experience lightning-fast delivery with real-time updates, ensuring your parcel reaches its destination quickly.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    desc: "Your parcels are protected with our advanced tracking, verification, and secure handling technology.",
  },
  {
    icon: Timer,
    title: "Real-Time Tracking",
    desc: "Track your parcel at every stage of its journey with live updates and smart notifications.",
  },
  {
    icon: Truck,
    title: "Flexible Pickup",
    desc: "Choose from multiple pickup locations and schedule deliveries at your convenience.",
  },
  {
    icon: MapPinned,
    title: "Smart Routing",
    desc: "Optimized routes powered by intelligent algorithms ensure on-time and efficient delivery.",
  },
  {
    icon: ScanSearch,
    title: "Tracking ID Lookup",
    desc: "Easily check parcel status using your tracking ID on our intuitive tracking dashboard.",
  },
];

const Feature = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Powerful Features for Modern Delivery
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Everything you need to send, track, and manage parcels effortlessly.
          </p>
        </div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border border-border/40 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all bg-white/70 dark:bg-background/60 backdrop-blur"
            >
              <CardContent className="p-8">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-5">
                  <feature.icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
