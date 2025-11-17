import ContactUs from "@/components/layouts/ContactUs";
import HowItWorks from "@/components/layouts/HowItWorks";
import SearchSection from "@/components/layouts/SearchSection";
import ServiceHighlights from "@/components/layouts/ServiceHighlights";
import Testimonials from "@/components/layouts/Testimonials";

const Home = () => {
    return (
        <div>
            <SearchSection />
            <ServiceHighlights />
            <HowItWorks />
            <Testimonials />
            <ContactUs />
        </div>
    );
};

export default Home;