"use client";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import WhatsAppPopUp from "../components/WhatsAppPopup";
import Home from "../components/Home";
import RibbonMonth from "../components/RibbonMonth";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#produtos") {
      setTimeout(() => {
        const element = document.getElementById("produtos");
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  useEffect(() => {
    const section = sessionStorage.getItem("scrollToSection");
    if (section) {
      sessionStorage.removeItem("scrollToSection");
      setTimeout(() => {
        const el = document.getElementById(section);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, []);

  return (
    <>
      <Navbar />
      <RibbonMonth />
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
