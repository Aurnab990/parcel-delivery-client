import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const blogPosts = [
  {
    title: "How to Optimize Your Parcel Delivery Process",
    excerpt: "Learn the best practices for managing deliveries efficiently and reducing delivery times.",
    link: "/blog/parcel-optimization",
  },
  {
    title: "Top 10 Parcel Tracking Tools",
    excerpt: "Explore the most reliable tracking tools to keep your customers updated in real-time.",
    link: "/blog/tracking-tools",
  },
  {
    title: "The Future of Logistics in 2025",
    excerpt: "Discover how technology is shaping the future of parcel delivery and logistics industry.",
    link: "/blog/future-logistics",
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Insights, news, and guides to help you improve your parcel delivery experience.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                </div>
                <Button asChild size="sm" variant="outline" className="mt-auto">
                  <a href={post.link}>Read More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;