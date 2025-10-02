"use client";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeaturesSection";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import WhatsAppPopUp from "../components/WhatsAppPopup";
import Home from "../components/Home";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import OutubroRosaImg from "../assets/Outubro_Rosa.png";

const HomePage = () => {
  const location = useLocation();
  const [usePlaceholder, setUsePlaceholder] = useState(false);

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

      {/* Card flutuante - abaixo da navbar (canto superior esquerdo) */}
      <div className="fixed left-4 top-20 sm:top-23 z-50">
        <div
          className="group relative flex items-center"
          tabIndex={0}
          aria-label="Informações Outubro Rosa - passe o mouse ou foque para ver mais"
        >
          {!usePlaceholder ? (
            <img
              src={OutubroRosaImg}
              alt="Laço Outubro Rosa - Conscientização sobre câncer de mama"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg object-cover cursor-default transition-transform transform hover:scale-105"
              onError={() => {
                setUsePlaceholder(true);
                console.warn(
                  "Erro ao carregar Outubro_Rosa.png — usando placeholder"
                );
              }}
            />
          ) : (
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg bg-pink-400 flex items-center justify-center text-white font-semibold">
              Rosa
            </div>
          )}

          <div
            className="absolute left-0 top-full mt-3 w-72 sm:w-80 p-4 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0"
            role="dialog"
            aria-label="Mensagem Outubro Rosa"
          >
            <h4 className="text-sm sm:text-base font-semibold text-pink-600 mb-1">
              Outubro Rosa — Prevenção é Amor
            </h4>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
              Outubro se veste de rosa para lembrar que a vida é preciosa. Cuidar de si é um ato de amor que se espalha, colorindo o mundo de esperança.
            </p>
          </div>
        </div>
      </div>

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
