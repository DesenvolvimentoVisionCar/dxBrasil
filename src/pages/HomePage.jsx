import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import WhatsAppPopUp from "../components/WhatsAppPopup";
import Home from "../components/Home";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation(); // Pega a URL atual (incluindo o #)

  useEffect(() => {
    if (location.hash === "#produtos") {
      // Espera 100ms para garantir que o DOM esteja pronto
      setTimeout(() => {
        const element = document.getElementById("produtos");
        if (element) {
          element.scrollIntoView({ behavior: "smooth" }); // Scroll suave
        }
      }, 100);
    }
  }, [location]);

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
