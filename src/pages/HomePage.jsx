import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import TimelineSection from "../components/TimelineSection";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import WhatsAppPopUp from "../components/WhatsAppPopup";
import Home from "../components/Home";


const HomePage = () => {
  return (
    <>
      <div className="p-3 lg:p-8 srl">
        <Navbar />
        <Home/>
        <HeroSection />
        <FeatureSection />
        <Pricing id="produtos" />
      </div>
      <Footer />
      <WhatsAppPopUp />
    </>
  );
};

export default HomePage;
