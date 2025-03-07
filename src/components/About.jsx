"use client"

import { useState } from "react"

const About = () => {
  const [activeTab, setActiveTab] = useState("historia")

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mt-10 sm:mt-16 mb-16">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center tracking-tighter font-medium">
          Sobre a
          <span className="bg-gradient-to-r from-[#40b346] to-[#fff200] text-transparent bg-clip-text"> Dx Brasil</span>
        </h1>
        <p className="mt-4 text-center text-[#666666] max-w-xl sm:max-w-3xl lg:max-w-4xl text-sm sm:text-base lg:text-lg leading-relaxed">
          A DX BRASIL é uma empresa sólida com mais de 40 anos de experiência, especializada em soluções tecnológicas de
          segurança eletrônica.
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
          <h2 className="text-2xl sm:text-3xl tracking-tighter font-bold mb-4">Excelência em Segurança Eletrônica</h2>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-6">
            Fundada em 1980, a Dx Brasil se consolidou como referência no mercado de segurança eletrônica, oferecendo
            soluções inovadoras e de alta qualidade para residências, empresas e indústrias em todo o Brasil. Nossa
            trajetória é marcada pelo compromisso com a excelência e pela constante busca por inovação tecnológica.
          </p>
          <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-8">
            Ao longo de mais de quatro décadas, desenvolvemos um portfólio completo de produtos e serviços que atendem
            às mais diversas necessidades de nossos clientes, sempre com foco na qualidade, confiabilidade e eficiência.
          </p>
          <button className="self-start py-2 px-4 text-white rounded-lg bg-gradient-to-r from-[#65bc3c] to-[#cad01f] transition-all hover:-translate-y-2">
            Conheça nossa história
          </button>
        </div>
      </div>

      <div className="mb-20">
        <div className="flex flex-wrap border-b border-gray-200 mb-8">
          <button
            className={`mr-4 py-2 px-4 text-sm sm:text-base font-medium transition-all ${
              activeTab === "historia"
                ? "border-b-2 border-[#65bc3c] text-[#40b346]"
                : "text-[#666666] hover:text-[#5cb41d]"
            }`}
            onClick={() => setActiveTab("historia")}
          >
            Nossa História
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
          <button
            className={`mr-4 py-2 px-4 text-sm sm:text-base font-medium transition-all ${
              activeTab === "equipe"
                ? "border-b-2 border-[#65bc3c] text-[#40b346]"
                : "text-[#666666] hover:text-[#5cb41d]"
            }`}
            onClick={() => setActiveTab("equipe")}
          >
            Nossa Equipe
          </button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg p-6 shadow-sm">
          {activeTab === "historia" && (
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tighter">Nossa Trajetória</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-[#40b346]">1980 - Fundação</h4>
                    <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                      A Dx Brasil foi fundada com o objetivo de trazer soluções inovadoras em segurança eletrônica para
                      o mercado brasileiro.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-[#40b346]">1995 - Expansão Nacional</h4>
                    <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                      Ampliamos nossa atuação para todo o território nacional, estabelecendo parcerias estratégicas com
                      distribuidores em todas as regiões.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-[#40b346]">2005 - Inovação Tecnológica</h4>
                    <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                      Lançamos nossa primeira linha de produtos com tecnologia própria, desenvolvida inteiramente por
                      nossa equipe de engenharia.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-[#40b346]">2010 - Centro de Pesquisa</h4>
                    <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                      Inauguramos nosso Centro de Pesquisa e Desenvolvimento, dedicado à criação de novas tecnologias e
                      aprimoramento de nossos produtos.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-[#40b346]">2018 - Certificação ISO</h4>
                    <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                      Conquistamos a certificação ISO 9001, reconhecendo nosso compromisso com a qualidade e a melhoria
                      contínua.
                    </p>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2 text-[#40b346]">2023 - Presente</h4>
                    <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                      Hoje, somos referência em soluções de segurança eletrônica, com uma linha completa de produtos e
                      serviços que atendem às mais diversas necessidades.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "missao" && (
            <div className="space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-4">Nossa Missão</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  Desenvolver e fornecer soluções tecnológicas de segurança eletrônica que proporcionem tranquilidade e
                  conforto aos nossos clientes, contribuindo para um ambiente mais seguro e protegido.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-4">Nossa Visão</h3>
                <p className="text-[#666666] text-sm sm:text-base leading-relaxed">
                  Ser reconhecida como a empresa líder em soluções de segurança eletrônica no Brasil, referência em
                  inovação, qualidade e atendimento ao cliente.
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tighter mb-4">Nossos Valores</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">Inovação</h4>
                    <p className="text-[#666666] text-sm">
                      Buscamos constantemente novas tecnologias e soluções para atender às necessidades de nossos
                      clientes.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">Qualidade</h4>
                    <p className="text-[#666666] text-sm">
                      Comprometemo-nos com a excelência em todos os nossos produtos e serviços.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">Integridade</h4>
                    <p className="text-[#666666] text-sm">
                      Agimos com ética, transparência e respeito em todas as nossas relações.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">Responsabilidade</h4>
                    <p className="text-[#666666] text-sm">
                      Assumimos o compromisso com a segurança e o bem-estar de nossos clientes.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">Sustentabilidade</h4>
                    <p className="text-[#666666] text-sm">
                      Desenvolvemos produtos e processos que respeitam o meio ambiente e contribuem para um futuro
                      sustentável.
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[#65bc3c] hover:shadow-md transition-all">
                    <h4 className="font-semibold mb-2 text-[#40b346]">Colaboração</h4>
                    <p className="text-[#666666] text-sm">
                      Valorizamos o trabalho em equipe e a cooperação para alcançar resultados excepcionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "equipe" && (
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tighter">Nossa Equipe</h3>
              <p className="text-[#666666] text-sm sm:text-base leading-relaxed mb-8">
                Contamos com uma equipe altamente qualificada e comprometida, formada por profissionais especializados
                em diversas áreas, que trabalham em conjunto para oferecer as melhores soluções aos nossos clientes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="CEO"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-lg">Carlos Mendes</h4>
                    <p className="text-[#40b346] font-medium mb-2">CEO & Fundador</p>
                    <p className="text-[#666666] text-sm">
                      Com mais de 30 anos de experiência no setor de segurança eletrônica, lidera a Dx Brasil com visão
                      inovadora e estratégica.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
                    alt="CTO"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-lg">Ana Silva</h4>
                    <p className="text-[#40b346] font-medium mb-2">Diretora de Tecnologia</p>
                    <p className="text-[#666666] text-sm">
                      Engenheira eletrônica com mestrado em Sistemas Embarcados, responsável pelo desenvolvimento de
                      novos produtos e soluções.
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <img
                    src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                    alt="COO"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-bold text-lg">Roberto Almeida</h4>
                    <p className="text-[#40b346] font-medium mb-2">Diretor de Operações</p>
                    <p className="text-[#666666] text-sm">
                      Especialista em gestão de operações, com vasta experiência em otimização de processos e logística.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 rounded-lg p-8 mb-20">
        <h2 className="text-2xl sm:text-3xl tracking-tighter font-bold mb-8 text-center">Dx Brasil em Números</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#40b346] to-[#fff200] text-transparent bg-clip-text">
              40+
            </p>
            <p className="text-[#666666] mt-2">Anos de experiência</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#40b346] to-[#fff200] text-transparent bg-clip-text">
              500+
            </p>
            <p className="text-[#666666] mt-2">Colaboradores</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#40b346] to-[#fff200] text-transparent bg-clip-text">
              10k+
            </p>
            <p className="text-[#666666] mt-2">Clientes atendidos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-[#40b346] to-[#fff200] text-transparent bg-clip-text">
              100+
            </p>
            <p className="text-[#666666] mt-2">Produtos desenvolvidos</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-[#40b346] to-[#cad01f] rounded-lg p-8 text-white text-center mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">Quer conhecer mais sobre a Dx Brasil?</h2>
        <p className="max-w-2xl mx-auto mb-8 text-sm sm:text-base">
          Entre em contato conosco e descubra como nossas soluções podem atender às suas necessidades de segurança
          eletrônica.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="py-2 px-6 bg-white text-[#40b346] rounded-lg font-medium transition-all hover:-translate-y-2">
            Fale Conosco
          </button>
          <button className="py-2 px-6 border border-white rounded-lg font-medium transition-all hover:-translate-y-2">
            Conheça Nossos Produtos
          </button>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-2xl sm:text-3xl tracking-tighter font-bold mb-8 text-center">
          Certificações e Reconhecimentos
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
              <span className="text-[#40b346] font-bold">ISO 9001</span>
            </div>
            <p className="text-[#666666] text-sm">Gestão de Qualidade</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
              <span className="text-[#40b346] font-bold">ISO 14001</span>
            </div>
            <p className="text-[#666666] text-sm">Gestão Ambiental</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
              <span className="text-[#40b346] font-bold">ABESE</span>
            </div>
            <p className="text-[#666666] text-sm">Associação Brasileira</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center bg-gray-100 rounded-full">
              <span className="text-[#40b346] font-bold">INMETRO</span>
            </div>
            <p className="text-[#666666] text-sm">Produtos Certificados</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

