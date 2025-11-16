import type { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchSection from "./SearchSection";
import ServiceHighlights from "./ServiceHighlights";
import HowItWorks from "./HowItWorks";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";

interface IProps {
  children: ReactNode;
}
export default function Commonlayout({ children }: IProps) {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar />
      <SearchSection />
      <ServiceHighlights />
      <HowItWorks />
      <Testimonials />
      <ContactUs />
      <div className="grow-1">{children}</div>
      <Footer />
    </div>
  );
}
