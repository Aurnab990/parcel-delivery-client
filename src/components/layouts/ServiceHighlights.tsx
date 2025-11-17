import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Truck, Clock, ShieldCheck, MapPin, Smartphone, Package } from "lucide-react";

const services = [
  {
    title: "Super Fast Delivery",
    desc: "We ensure lightning-fast delivery to your doorsteps.",
    icon: <Truck className="w-10 h-10 text-orange-500" />,
  },
  {
    title: "Real-Time Tracking",
    desc: "Track your parcel anytime with live location updates.",
    icon: <MapPin className="w-10 h-10 text-blue-600" />,
  },
  {
    title: "Instant Notifications",
    desc: "Get notified instantly about your parcel’s status.",
    icon: <Smartphone className="w-10 h-10 text-purple-600" />,
  },
  {
    title: "Secure Packaging",
    desc: "Your items are packed with care for safe delivery.",
    icon: <Package className="w-10 h-10 text-teal-600" />,
  },
  {
    title: "On-Time Guarantee",
    desc: "We pride ourselves on timely and reliable delivery.",
    icon: <Clock className="w-10 h-10 text-green-600" />,
  },
  {
    title: "Trusted & Safe",
    desc: "Top-level security ensures your parcels stay protected.",
    icon: <ShieldCheck className="w-10 h-10 text-red-600" />,
  },
];

const ServiceHighlights = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900"
        >
          Why Choose Our Service?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 mt-3 text-lg max-w-2xl mx-auto"
        >
          We provide fast, safe, and reliable delivery services to ensure your parcels reach their destinations without hassle.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="p-6 rounded-2xl shadow-md border hover:shadow-xl transition-all bg-gray-50">
                <CardContent className="text-center flex flex-col items-center">
                  <div className="mb-4">{item.icon}</div>

                  <h3 className="text-xl font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ServiceHighlights;
