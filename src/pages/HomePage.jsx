import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import WhatsAppPopUp from "../components/WhatsAppPopup";
import Home from "../components/Home";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Home />
      <HeroSection />
      <FeatureSection />
      <Pricing id="produtos" />
      <Footer />
      <WhatsAppPopUp />
    </>
  );
};

export default HomePage;
