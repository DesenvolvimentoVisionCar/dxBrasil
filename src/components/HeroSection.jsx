import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-40">
      <h1 className="-3/4 text-4xl sm:text-6xl lg:text-6xl  text-center tracking-tighter">
        Dx Brasil desenvolvendo ferramentas
        <span className="bg-gradient-to-r from-[#40b346] to-[#fff200] text-transparent bg-clip-text">
          {" "}
          <br /> para seu conforto
        </span>
      </h1>
      <p className="mt-4 text-center text-[#666666] max-w-4xl text-lg">
      A DX BRASIL é uma empresa sólida com mais de 40 anos de experiência, especializada em soluções tecnológicas de segurança eletrônica.
      </p>
      <div className="flex mt-7 space-x-5">
        <button className="py-2 px-2 text-white rounded-lg bg-gradient-to-r from-[#65bc3c] to-[#cad01f] transition-all hover:-translate-y-2">
          Comece agora
        </button>
        <button className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br hover:text-[#5cb41d] transition-all hover:-translate-y-2">
          Saiba mais
        </button>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-emerald-400 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/3 border border-emerald-400  mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
