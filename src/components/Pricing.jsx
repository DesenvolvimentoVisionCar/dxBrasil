import { useState, useTransition, useRef, useEffect } from "react";
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { pricingOptions } from "../constants";
import TabButton from "./TabButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Pricing = () => {
  const [tab, setTab] = useState("all");
  const [isPending, startTransition] = useTransition();
  const [isAtStart, setIsAtStart] = useState(true); // Estado para controlar se está no início
  const [isAtEnd, setIsAtEnd] = useState(false); // Estado para controlar se está no final
  const swiperRef = useRef(null); // Ref para o Swiper
  const navigate = useNavigate();

  const handleTab = (id) => {
    startTransition(() => {
      setTab(id);
    });
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
  
  // Lógica para calcular se o número de slides visíveis é menor que o total de slides
  const slidesPerView = window.innerWidth < 640 ? 1 : window.innerWidth < 1024 ? 2 : 3;

  useEffect(() => {
    // Atualiza a visibilidade dos botões a cada mudança no tamanho da tela
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
    <div className="mt-20 z-0">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide">
        Produtos
      </h2>
      <div className="flex flex-row mt-8 w-full justify-center">
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
            className="absolute -left-10 top-1/2 transform -translate-y-1/2 z-10 text-white rounded-full"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <ChevronLeft size={40} />
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
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className=""
        >
          {filteredOptions.map((option, index) => (
            <SwiperSlide key={index}>
              <div className="p-10 border border-stone-700 min-h-[560px] rounded-xl flex flex-col justify-between">
                <p className="text-4xl mb-8">
                  {option.title}
                  {(option.title === "Transmissor Full DS" || option.title === "Módulo IP Lite") && (
                    <span className="bg-gradient-to-r from-[#b7ff4a] to-[#cad01f] text-transparent bg-clip-text text-xl mb-4 ml-2">
                      (Mais Popular)
                    </span>
                  )}
                </p>
                <ul>
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="mt-8 flex items-center">
                      <CheckCircle2 />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  key={option.id}
                  onClick={() => navigate(`/produto/${option.id}`)}
                  className="inline-flex justify-center items-center text-center px-[.1em] py-1 w-full h-12 mt-16 tracking-tight text-xl hover:bg-orange-900 gradient-animation rounded-md transition duration-200"
                >
                  <span className="block bg-[#121212] hover:bg-[#1a1a1a] rounded-md w-full px-5 py-2">
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
            <ChevronRight size={40} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Pricing;
