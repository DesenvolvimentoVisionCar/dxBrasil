import video1 from "../assets/video01.mp4";
import video2 from "../assets/video02.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-32 sm:mt-40 px-2">
      <h1 className="text-3xl sm:text-4xl lg:text-6xl text-center tracking-tighter">
        Dx Brasil desenvolvendo ferramentas
        <span className="bg-gradient-to-r from-[#40b346] to-[#fff200] text-transparent bg-clip-text">
          {" "}
          <br className="hidden lg:block" /> para seu conforto
        </span>
      </h1>
      <p className="mt-4 text-center text-[#666666] max-w-xl sm:max-w-3xl lg:max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed">
        A DX BRASIL é uma empresa sólida com mais de 40 anos de experiência, especializada em soluções tecnológicas de segurança eletrônica.
      </p>
      <div className="flex flex-row mt-7 space-x-5">
        <button className="py-2 px-4 text-white rounded-lg bg-gradient-to-r from-[#65bc3c] to-[#cad01f] transition-all hover:-translate-y-2">
          Comece agora
        </button>
        <button className="py-2 px-4 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br hover:text-[#5cb41d] transition-all hover:-translate-y-2">
          Saiba mais
        </button>
      </div>
      <div className="flex flex-col sm:flex-row mt-10 justify-center space-y-4 sm:space-y-0 sm:space-x-4">
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
      </div>
    </div>
  );
};

export default HeroSection;
