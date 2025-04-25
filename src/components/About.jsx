"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const  About = () => {
  const [activeTab, setActiveTab] = useState("missao");
  const navigate = useNavigate();

  const handleClickContactUs = () => {
    navigate("/contato"); // Redireciona para a tela inicial
  };

  const handleClickProducts = () => {
    navigate("/home/#produtos"); // Redireciona para a tela inicial
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col items-center sm:mt-12 mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-tighter font-medium">
          Sobre a<span className="text-primaryg bg-clip-text"> Dx Brasil</span>
        </h1>
        <p className="mt-4 text-center text-[#666666] max-w-xl sm:max-w-3xl lg:max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed">
          A DX BRASIL é uma empresa sólida com mais de 40 anos de experiência,
          especializada em soluções tecnológicas de segurança eletrônica.
        </p>
      </div>

      {/* Company Overview */}
      <div className="flex flex-col lg:flex-row gap-8 mb-20">
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
            alt="Sede da Dx Brasil"
            className="w-full h-auto rounded-lg border border-emerald-400 object-cover"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl sm:text-3xl tracking-tighter font-bold mb-4">
            Excelência em Segurança Eletrônica
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-6">
            Fundada em 1980, a Dx Brasil se consolidou como referência no
            mercado de segurança eletrônica, oferecendo soluções inovadoras e de
            alta qualidade para residências, empresas e indústrias em todo o
            Brasil. Nossa trajetória é marcada pelo compromisso com a excelência
            e pela constante busca por inovação tecnológica.
          </p>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-8">
            Ao longo de mais de quatro décadas, desenvolvemos um portfólio
            completo de produtos e serviços que atendem às mais diversas
            necessidades de nossos clientes, sempre com foco na qualidade,
            confiabilidade e eficiência.
          </p>
        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            className={`mr-4 py-2 px-4 text-sm sm:text-base font-medium transition-all ${
              activeTab === "missao"
                ? "border-b-2 border-[#65bc3c] text-[#40b346]"
                : "text-[#666666] hover:text-[#5cb41d]"
            }`}
            onClick={() => setActiveTab("missao")}
          >
            Missão e Valores
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          {activeTab === "missao" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-4">
                  Nossa Missão
                </h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  Desenvolver e fornecer soluções tecnológicas de segurança
                  eletrônica que proporcionem tranquilidade e conforto aos
                  nossos clientes, contribuindo para um ambiente mais seguro e
                  protegido.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-4">
                  Nossa Visão
                </h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  Ser reconhecida como a empresa líder em soluções de segurança
                  eletrônica no Brasil, referência em inovação, qualidade e
                  atendimento ao cliente.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-4">
                  Nossos Valores
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">
                      Inovação
                    </h4>
                    <p className="text-[#666666] text-sm">
                      Buscamos constantemente novas tecnologias e soluções para
                      atender às necessidades de nossos clientes.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">
                      Qualidade
                    </h4>
                    <p className="text-[#666666] text-sm">
                      Comprometemo-nos com a excelência em todos os nossos
                      produtos e serviços.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">
                      Integridade
                    </h4>
                    <p className="text-[#666666] text-sm">
                      Agimos com ética, transparência e respeito em todas as
                      nossas relações.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">
                      Responsabilidade
                    </h4>
                    <p className="text-[#666666] text-sm">
                      Assumimos o compromisso com a segurança e o bem-estar de
                      nossos clientes.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">
                      Sustentabilidade
                    </h4>
                    <p className="text-[#666666] text-sm">
                      Desenvolvemos produtos e processos que respeitam o meio
                      ambiente e contribuem para um futuro sustentável.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">
                      Colaboração
                    </h4>
                    <p className="text-[#666666] text-sm">
                      Valorizamos o trabalho em equipe e a cooperação para
                      alcançar resultados excepcionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#40b346] to-[#cad01f] rounded-lg p-8 text-white text-center mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Quer conhecer mais sobre a Dx Brasil?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Entre em contato conosco e descubra como nossas soluções podem atender
          às suas necessidades de segurança eletrônica.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={handleClickContactUs}
            className="py-2 px-6 bg-white text-[#40b346] rounded-lg font-medium transition-all hover:-translate-y-2"
          >
            Fale Conosco
          </button>
          <button
            onClick={handleClickProducts}
            className="py-2 px-6 border border-white rounded-lg font-medium transition-all hover:-translate-y-2"
          >
            Conheça Nossos Produtos
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
