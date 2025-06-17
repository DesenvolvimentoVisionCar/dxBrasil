"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const [activeTab, setActiveTab] = useState("monitoramento");
  const navigate = useNavigate();

  const handleClickContactUs = () => {
    navigate("/contato");
  };

  const handleClickProducts = () => {
    navigate("/home#produtos");
  };

  return (
    <div className="container mx-auto px-4 w-full relative pt-20 md:pt-0">
      <div className="flex flex-col items-center md:mt-20 mb-12">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-tighter font-medium">
          Sobre a<span className="text-primaryg bg-clip-text"> Dx Brasil</span>
        </h1>
        <p className="mt-4 text-center text-[#666666] max-w-xl sm:max-w-3xl lg:max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed">
          Tecnologia <span className="font-bold">nacional</span> desenvolvida
          para proteger o seu patrimônio com máxima{" "}
          <span className="font-bold">inteligência</span>, total{" "}
          <span className="font-bold">confiabilidade</span> e precisão.
        </p>
      </div>

      {/* Company Overview */}
      <div className="w-full mb-16">
        <img
          src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          alt="Sede da Dx Brasil"
          className="w-full h-[400px] sm:h-[500px] lg:h-[400px] object-cover rounded-lg border border-emerald-400"
        />

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-100 justify-center mt-16">
          <h2 className="text-2xl sm:text-3xl tracking-tighter font-bold mb-4 text-green-600">
            Liderança em Segurança Eletrônica
          </h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-6">
            <span className="font-semibold">Fundada há mais de 40 anos</span>, a{" "}
            <span className="font-semibold">Dx Brasil</span> se consolidou como
            referência no mercado de{" "}
            <span className="font-semibold">segurança eletrônica</span>,
            oferecendo soluções inovadoras e de alta qualidade para residências,
            empresas e indústrias em todo o Brasil. Nossa trajetória é marcada
            pelo compromisso com a eficiência e pela constante busca por
            inovação tecnológica.
          </p>

          <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-6">
            Ao longo de mais de quatro décadas, desenvolvemos um{" "}
            <span className="font-semibold">
              portfólio completo de produtos e serviços
            </span>{" "}
            que atendem às mais diversas necessidades de nossos clientes. Sempre
            priorizamos a <span className="font-semibold">qualidade</span>, a{" "}
            <span className="font-semibold">confiabilidade</span> e a{" "}
            <span className="font-semibold">eficiência</span> em todas as nossas
            entregas.
          </p>

          <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-5">
            Com uma equipe técnica qualificada e em constante atualização,
            buscamos oferecer um atendimento personalizado e soluções
            tecnológicas que realmente façam a diferença. A{" "}
            <span className="font-semibold">Dx Brasil</span> é sinônimo de
            tradição, inovação e compromisso com a segurança de seus clientes.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <div className="flex flex-wrap border-b border-gray-200 mb-6">
          <button
            className={`mr-4 py-2 px-4 text-sm sm:text-base font-medium transition-all ${
              activeTab === "monitoramento"
                ? "border-b-2 border-[#65bc3c] text-[#40b346]"
                : "text-[#666666] hover:text-[#5cb41d]"
            }`}
            onClick={() => setActiveTab("monitoramento")}
          >
            Sobre o Monitoramento
          </button>
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
          {activeTab === "monitoramento" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-4">
                  Como funciona o monitoramento via rádio
                </h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-6">
                  O sistema de monitoramento via rádio funciona de forma
                  eficiente e segura, proporcionando proteção contínua
                  independente de infraestruturas convencionais.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold mb-3 text-[#40b346]">
                      Instalação e Configuração
                    </h4>
                    <p className="text-[#666666] text-sm leading-relaxed">
                      A instalação do equipamento começa com a central de
                      monitoramento, que é conectada a uma antena para ampliar o
                      alcance do sinal. No local do cliente, um transmissor é
                      instalado e integrado ao sistema de alarme.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold mb-3 text-[#40b346]">
                      Processamento de Eventos
                    </h4>
                    <p className="text-[#666666] text-sm leading-relaxed">
                      Quando um evento é detectado, como uma intrusão, o
                      transmissor envia um sinal via rádio para a central. Este
                      sinal é criptografado para garantir a segurança da
                      comunicação.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold mb-3 text-[#40b346]">
                      Resposta e Ações
                    </h4>
                    <p className="text-[#666666] text-sm leading-relaxed">
                      A central de monitoramento recebe o sinal, verifica a
                      integridade dos dados e analisa a origem do evento. Em
                      seguida, gera alertas em tempo real para que a resposta
                      possa ser imediata.
                    </p>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="text-lg font-semibold mb-3 text-[#40b346]">
                      Independência Operacional
                    </h4>
                    <p className="text-[#666666] text-sm leading-relaxed">
                      O sistema é projetado para funcionar mesmo em situações
                      críticas como corte de energia, internet ou linhas
                      telefônicas, garantindo monitoramento ininterrupto 24/7.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#40b346] to-[#cad01f] rounded-lg p-6 text-white">
                <h4 className="text-lg font-semibold mb-3">
                  Vantagens do Monitoramento via Rádio
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  <li>Comunicação segura e criptografada</li>
                  <li>Não depende de infraestrutura convencional</li>
                  <li>Resposta imediata a eventos</li>
                  <li>Sistema autônomo e confiável</li>
                  <li>Cobertura em áreas remotas</li>
                </ul>
              </div>
            </div>
          )}
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
                      Comprometemo-nos com o profissionalismo em todos os nossos
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

      <div className="bg-gradient-to-r from-[#40b346] to-[#cad01f] rounded-lg p-8 text-white text-center mb-16">
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