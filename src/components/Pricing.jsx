import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";
import TabButton from "./TabButton";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const [tab, setTab] = useState("all");
  const navigate = useNavigate();

  const handleTab = (tabName) => {
    setTab((prevTab) => (prevTab === tabName ? "all" : tabName));
  };

  const filteredOptions =
    tab === "all"
      ? pricingOptions
      : pricingOptions.filter((option) => option.category === tab);

  return (
    <div className="mt-20 z-0 mb-14 px-4">
      <h2 className="text-3xl sm:text-5xl text-center my-6 tracking-wide">
        Produtos
      </h2>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 justify-center mb-8 text-xs md:text-lg">
        {["Transmissoras", "Transformadores", "Módulos", "Receptora"].map(
          (item) => (
            <TabButton
              key={item}
              selectTab={() => handleTab(item)}
              active={tab === item}
              >
              {item}
            </TabButton>
          )
        )}
      </div>

      {/* Cards */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16">
        {(tab === "Transmissoras" ? filteredOptions.slice(0, 4) : filteredOptions.slice(0, 3)).map(
          (option, index) => (
            <div
            key={index}
            className="transition-all hover:-translate-y-2 p-6 border border-black/40 shadow-md min-h-[450px] rounded-xl flex flex-col justify-between"
            >
              <p className="text-2xl font-semibold mb-4">{option.title}</p>
              <ul className="flex-1">
                {option.features.map((feature, idx) => (
                  <li key={idx} className="mt-4 flex items-center">
                    <CheckCircle2 size={24} className="text-[#52ee5a]" />
                    <span className="ml-2 text-start">{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => navigate(`/produto/${option.id}`)}
                className="mt-6 text-xl text-center rounded-md bg-white border border-stone-400 hover:bg-gray-100 py-2"
              >
                Saiba mais
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Pricing;
