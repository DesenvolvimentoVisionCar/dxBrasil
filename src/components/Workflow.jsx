import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/comfundo.jpeg";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div className="mt-20 border-b border-stone-400">
      <h2 className="text-3xl mb-3 sm:text-3xl lg:text-5xl text-center mt-6 tracking-wide">
      <h2 className="text-2xl sm:text-5xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
        Transmissor Dx Brasil<br/>

          <span className="text-2xl lg:text-4xl mt-2 bg-gradient-to-r from-[#40b346] to-[#fff200] text-transparent bg-clip-text">
          A Melhor Escolha do Mercado
          </span>
        </h2>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="w-full lg:w-2/5 mt-12 h-fit object-cover">
          <img src={codeImg} alt="Coding" className="object-cover" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 shadow-md h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-start text-xl">{item.title}</h5>
                <p className="text-md text-start text-stone-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;