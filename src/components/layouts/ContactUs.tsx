import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ContactUs = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.currentTarget.reset();
  };

  return (
    <section className="min-h-screen p-6 -mt-44">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        Contact Us
      </h1>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="shadow-xl rounded-2xl border">
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <Input type="text" placeholder="Your Name" required />
              <Input type="email" placeholder="Your Email" required />
              <Input type="text" placeholder="Subject" required />
              {/* <Textarea placeholder="Your Message" required className="resize-none" /> */}
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card className="shadow-xl rounded-2xl border bg-orange-50">
          <CardHeader>
            <CardTitle>Our Office</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 text-gray-700">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p>123 Delivery Street, Dhaka, Bangladesh</p>
            </div>
            <div>
              <h3 className="font-semibold">Phone</h3>
              <p>+880 1234 567 890</p>
            </div>
            <div>
              <h3 className="font-semibold">Email</h3>
              <p>support@parcelapp.com</p>
            </div>
            <div>
              <h3 className="font-semibold">Working Hours</h3>
              <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactUs;
