import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Package } from "lucide-react";
import { motion } from "framer-motion";

const SearchSection = () => {
  return (
    <div className="w-full py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">

        {/* Title Section */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900"
        >
          Track Your Parcel Instantly
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mt-3 text-lg"
        >
          Enter your tracking ID to get real-time updates on your delivery.
        </motion.p>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row gap-3 justify-center items-center"
        >
          <div className="relative w-full sm:w-[360px]">
            <Input
              placeholder="Enter Tracking ID"
              className="py-6 pl-12 rounded-xl shadow-md border-gray-300"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
          </div>

          <Button className="py-6 px-8 text-lg bg-orange-500 hover:bg-orange-600 rounded-xl shadow-lg">
            Track Now
          </Button>
        </motion.div>

        {/* Decorative Icons */}
        <div className="mt-12 flex justify-center gap-10 opacity-80">
          <div className="flex items-center gap-2">
            <Package className="w-6 h-6 text-orange-500" />
            <p className="text-gray-700 font-medium">Fast Delivery</p>
          </div>
          <div className="flex items-center gap-2">
            <Search className="w-6 h-6 text-green-500" />
            <p className="text-gray-700 font-medium">Live Tracking</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
