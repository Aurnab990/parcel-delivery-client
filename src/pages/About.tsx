import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Our Parcel Delivery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We provide reliable, fast, and secure parcel delivery services with real-time tracking
            and exceptional customer support.
          </p>
        </div>

        {/* About Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <Card className="rounded-xl shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-primary/10 text-primary rounded-full">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Team</h3>
              <p className="text-muted-foreground">A dedicated team of professionals ensuring every parcel is handled with care.</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-primary/10 text-primary rounded-full">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Our Experience</h3>
              <p className="text-muted-foreground">Years of experience in the logistics industry delivering reliable services worldwide.</p>
            </CardContent>
          </Card>

          <Card className="rounded-xl shadow-md hover:shadow-lg transition-all">
            <CardContent className="p-8 text-center">
              <div className="w-12 h-12 flex items-center justify-center mx-auto mb-4 bg-primary/10 text-primary rounded-full">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
              <p className="text-muted-foreground">Connecting people and businesses globally with our trusted parcel delivery network.</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Send Your Parcel?</h3>
          <p className="text-muted-foreground mb-6">Experience seamless parcel delivery with our modern logistics system.</p>
          <Button asChild size="lg" className="px-8 rounded-full">
            <a href="/feature">Get Started</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
