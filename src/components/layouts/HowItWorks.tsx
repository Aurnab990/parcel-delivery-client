import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Search, ClipboardList, Truck, CheckCircle } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Search or Book Your Parcel",
    desc: "Enter your parcel details or tracking ID to get started quickly.",
    icon: <Search className="w-10 h-10 text-blue-600" />,
  },
  {
    id: 2,
    title: "We Pick Up Your Parcel",
    desc: "Our delivery partner arrives at your location for secure pickup.",
    icon: <ClipboardList className="w-10 h-10 text-orange-500" />,
  },
  {
    id: 3,
    title: "Fast Delivery in Transit",
    desc: "Your parcel is safely transported with real-time tracking updates.",
    icon: <Truck className="w-10 h-10 text-green-600" />,
  },
  {
    id: 4,
    title: "Delivered Successfully",
    desc: "We deliver your items on time with confirmation notifications.",
    icon: <CheckCircle className="w-10 h-10 text-purple-600" />,
  },
];

const HowItWorks = () => {
  return (
    <div className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-center text-gray-900"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-gray-600 mt-3 text-lg max-w-2xl mx-auto"
        >
          A simple, step-by-step process to send or track parcels effortlessly.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Card className="p-6 bg-white rounded-2xl shadow-md border hover:shadow-xl transition-all">
                <CardContent className="text-center flex flex-col items-center">
                  <div className="mb-4">{step.icon}</div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                    Step {step.id}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mt-1">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {step.desc}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;
