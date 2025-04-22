"use client";

import { useState } from "react";
import PropTypes from "prop-types";
import { ChevronDown, ChevronUp } from "lucide-react";

const DropdownItem = ({ title, value, description, isOpen, onClick }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <button
        className="w-full px-6 py-5 flex justify-between items-center cursor-pointer bg-white duration-300 focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <div className="flex flex-col items-start">
          <span className="text-sm text-gray-600 uppercase">{title}</span>
          <span className="text-2xl font-bold">{value}</span>
        </div>
        {isOpen ? (
          <ChevronUp className="h-6 w-6 text-green-400" />
        ) : (
          <ChevronDown className="h-6 w-6 text-green-400" />
        )}
      </button>

      <div
        className={`px-6 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 pb-6" : "max-h-0"
        } overflow-hidden`}
      >
        <p className="text-stone-700">{description}</p>
      </div>
    </div>
  );
};

export default function TimelineSection() {
  const [openItem, setOpenItem] = useState(null);

  const items = [
    {
      id: "fundacao",
      title: "Fundação",
      value: "1984",
      description:
        "Fundada em 1984 como Metavision, a empresa se transformou em DX BRASIL, especializada em soluções de alta tecnologia para segurança eletrônica.",
    },
    {
      id: "presenca",
      title: "Presença",
      value: "23 Estados",
      description:
        "A DX BRASIL está presente em 23 estados e 400 cidades, com uma equipe técnica capacitada que atende a mais de 2.000 sistemas de segurança.",
    },
    {
      id: "clientes",
      title: "Clientes",
      value: "2.000+",
      description:
        "Nossa equipe é composta por mais de 2.000 profissionais altamente capacitados, dedicados a fornecer o melhor serviço em segurança eletrônica.",
    },
    {
      id: "inovacao",
      title: "Inovação",
      value: "Pesquisa e Desenvolvimento",
      description:
        "A empresa investe constantemente em pesquisa e desenvolvimento, garantindo produtos inovadores e homologados pela ANATEL.",
    },
  ];

  const handleClick = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="flex justify-center items-center mb-8">
      <div className=" mx-4">
        <h1 className="text-center text-3xl sm:text-5xl py-5 mb-10">
          Sobre Nós
          <p className="text-lg sm:text-xl mt-2 text-stone-500">
            A DX Brasil possui mais de 500+ parceiros
          </p>
        </h1>
        <div className="max-w-2xl mx-auto p-6 space-y-4 mt-10">
          {items.map((item) => (
            <DropdownItem
              key={item.id}
              title={item.title}
              value={item.value}
              description={item.description}
              isOpen={openItem === item.id}
              onClick={() => handleClick(item.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

DropdownItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};
