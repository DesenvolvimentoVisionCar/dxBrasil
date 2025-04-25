import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import TimelineSection from "../components/TimelineSection";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import WhatsAppPopUp from "../components/WhatsAppPopup";

const HomePage = () => {
  return (
    <>
      <div className="p-3 lg:p-8 srl">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <Pricing />
        <TimelineSection />
      </div>
      <Footer />
      <WhatsAppPopUp />
    </>
  );
};

export default HomePage;
