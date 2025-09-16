import { Link as RouterLink } from "react-router-dom";
import video1 from "../assets/video01.mp4";
import video2 from "../assets/video02.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-32 sm:mt-14 px-2">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center tracking-tighter">
      Soluções Completas do <br />
        <span className="text-primaryg bg-clip-text"> PROJETO</span> à{" "}
        <span className="text-primaryg bg-clip-text">PRODUÇÃO</span>
      </h1>
      <p className="mt-4 text-center text-[#666666] max-w-xl sm:max-w-3xl lg:max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed">
      Do hardware ao software, desenvolvemos e fabricamos nossos próprios equipamentos com linha SMT e equipe de PTH. Mais controle, qualidade e inovação em cada detalhe.
      </p>
      <div className="flex flex-col sm:flex-row mt-8 justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <RouterLink to="/sobre" className="flex flex-col sm:flex-row mt-8 justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-full sm:w-1/3 border border-emerald-400"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg object-cover w-full sm:w-1/3 border border-emerald-400"
        >
          <source className="object-cover" src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </RouterLink>
      </div>
    </div>
  );
};

export default HeroSection;
