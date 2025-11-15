import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";


export const Header = () => {
  

  return (
    <div className="mb-20">

      {/* HERO SECTION */}
      <div className="px-4 py-20 mx-auto max-w-screen-xl text-center">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight"
        >
          Track & Manage{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">
            Deliveries in One Tap
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto"
        >
          A powerful parcel management solution to help you track shipments,
          streamline deliveries, and stay updated instantly.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-8 flex justify-center gap-4"
        >
          <Button className="bg-orange-600 hover:bg-orange-700 px-6 py-6 text-lg rounded-full">
            Get Started
          </Button>

          <Button variant="outline" className="px-6 py-6 text-lg rounded-full">
            Learn More
          </Button>
        </motion.div>
      </div>


    </div>
  );
};
