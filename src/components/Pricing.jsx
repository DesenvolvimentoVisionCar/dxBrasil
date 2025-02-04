import { useState, useRef, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { pricingOptions } from "../constants";
import TabButton from "./TabButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/navigation";

const Pricing = () => {
  const [tab, setTab] = useState("all");
  const [isAtStart, setIsAtStart] = useState(true); // Estado para controlar se está no início
  const [isAtEnd, setIsAtEnd] = useState(false); // Estado para controlar se está no final
  const swiperRef = useRef(null); // Ref para o Swiper
  const navigate = useNavigate();

  const handleTab = (tabName) => {
    setTab((prevTab) => (prevTab === tabName ? "all" : tabName));
  };
  const handleSlideChange = (swiper) => {
    setIsAtStart(swiper.isBeginning);
    setIsAtEnd(swiper.isEnd);
  };

  const filteredOptions =
    tab === "all"
      ? pricingOptions
      : pricingOptions.filter((option) => option.category === tab);

  const totalSlides = filteredOptions.length;
  const slidesPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  useEffect(() => {
    const handleResize = () => {
      const swiper = swiperRef.current.swiper;
      if (swiper) {
        setIsAtStart(swiper.isBeginning);
        setIsAtEnd(swiper.isEnd);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="mt-32 z-0">
      <h2 className="text-3xl sm:text-5xl lg:text-5xl text-center my-3 lg:my-3 tracking-wide">
        Produtos
      </h2>
      <div className="flex flex-row text-xs md:text-lg backdrop:mt-8 w-full justify-center">
        <TabButton
          selectTab={() => handleTab("Transmissoras")}
          active={tab === "Transmissoras"}
        >
          Transmissoras
        </TabButton>
        <TabButton
          selectTab={() => handleTab("Transformadores")}
          active={tab === "Transformadores"}
        >
          Transformadores
        </TabButton>
        <TabButton
          selectTab={() => handleTab("Módulos")}
          active={tab === "Módulos"}
        >
          Módulos
        </TabButton>
        <TabButton
          selectTab={() => handleTab("Receptora")}
          active={tab === "Receptora"}
        >
          Receptora
        </TabButton>
      </div>
      <div className="mt-8 relative">
        {/* Botões de navegação */}
        {totalSlides > slidesPerView && !isAtStart && (
          <button
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 text-black rounded-full"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft className="text-black" size={40} />
          </button>
        )}
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Ref para o Swiper
          onSlideChange={handleSlideChange} // Atualiza os estados ao trocar de slide
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          navigation={false} // Desativa os controles padrão
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="min-h-[600px]"
        >
          {filteredOptions.map((option, index) => (
            <SwiperSlide className="mt-2" key={index}>
              <div className="transition-all hover:-translate-y-2 p-4 sm:p-10 border shadow-md  min-h-[500px] sm:min-h-[560px] rounded-xl flex flex-col justify-between">
                <p className="text-4xl mb-8">
                  {option.title}
                  {(option.title === "Transmissor Full DS" || option.title === "Módulo IP Lite") && (
                    <span className="bg-gradient-to-r from-[#52ee5a] to-[#fff200] text-transparent bg-clip-text text-xl mb-4 ml-2">
                      (Mais Popular)
                    </span>
                  )}
                </p>
                <ul>
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="mt-8 flex items-center">
                      <CheckCircle2 size={24} className="text-[#52ee5a]"/>
                      <span className="text-nowrap ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  key={option.id}
                  onClick={() => navigate(`/produto/${option.id}`)}
                  className="inline-flex justify-center items-center text-center px-[.1em] py-1 w-full h-12 mt-16 tracking-tight text-xl rounded-md transition duration-200"
                >
                  <span className="block hover:bg-gray-50 bg-white rounded-md w-full px-5 py-2 border border-stone-400">
                    Saiba mais
                  </span>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {totalSlides > slidesPerView && !isAtEnd && (
          <button
            className="absolute -right-10 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <ChevronRight className="text-black" size={40} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pricing;
