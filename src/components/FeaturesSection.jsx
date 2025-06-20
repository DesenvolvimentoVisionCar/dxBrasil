import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div className="mt-24 md:mt-24 border-b border-stone-400">
      <div className="text-center">
        <h2 className="text-2xl sm:text-5xl lg:text-5xl mt-10 lg:mt-20 tracking-wide">
        Monitoramento via Rádio<br/>

          <span className="text-2xl lg:text-4xl mt-2 text-primaryg bg-clip-text">
          A Solução Completa para Segurança
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap mt-10 lg:mt-20">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3">
            <div className="flex">
              <div className="flex mx-3 h-10 w-10 p-2 border shadow-md text-emerald-600 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h5 className="mt-1 mb-3 text-xl text-start">{feature.text}</h5>
                <p className="text-md p-2 mb-6 sm:mb-20 text-start text-stone-500">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;