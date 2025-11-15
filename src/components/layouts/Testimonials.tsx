import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Pritha Das",
    role: "Frequent User",
    message:
      "The delivery was incredibly fast and the tracking system is super convenient!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 2,
    name: "Halloween Alam",
    role: "Shop Owner",
    message:
      "Managing shipments has never been easier. Highly recommended for small businesses.",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    id: 3,
    name: "John Doe",
    role: "Customer",
    message:
      "I love the live parcel tracking. It makes sending gifts effortless!",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        What Our Users Say
      </h1>

      <div className="relative max-w-3xl mx-auto">
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="shadow-xl rounded-2xl p-6">
            <CardHeader className="flex items-center gap-4">
              <img
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].name}
                className="w-16 h-16 rounded-full border-2 border-orange-500"
              />
              <div>
                <CardTitle className="text-lg font-semibold">
                  {testimonials[currentIndex].name}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mt-4">{testimonials[currentIndex].message}</p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Navigation */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-orange-500 hover:text-white transition"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-orange-500 hover:text-white transition"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full ${
              idx === currentIndex ? "bg-orange-500" : "bg-gray-300"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
