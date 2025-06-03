"use client";
import { motion } from "framer-motion";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";
import banner4 from "../assets/banner4.png";

const Home = () => {
  const lineVariants = {
    hidden: { pathLength: 0 },
    visible: {
      pathLength: 1,
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.2 },
    },
  };

  return (
    <div className="w-full relative" style={{
      background: "radial-gradient(circle at center, #ffffff, #f0f0f0)"
    }}>
      {/* Seção 1 - Texto esquerda, Imagem direita */}
      <section className="min-h-[80vh] w-full relative py-8 mt-20">
        {/* Linhas animadas */}
        <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 100 Q 280 50 500 120 T 1700 10"
            fill="none"
            stroke="rgba(59, 246, 112, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M0 200 Q 240 170 520 230 T 1800 80"
            fill="none"
            stroke="rgba(59, 246, 137, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M0 190 Q 270 140 500 200 T 1500 120"
            fill="none"
            stroke="rgba(59, 246, 137, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>

        <div className="container mx-auto h-full flex flex-col md:flex-row relative z-10">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 order-2 md:order-none">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <h1 className="text-2xl md:text-3x1 lg:text-5xl font-semibold mb-4 text-gray-900">
                Soluções Completas em Monitoramento e Automação
                <span className="block font-medium  text-xl sm:text-xl lg:text-4xl">
                  Tecnologia própria com segurança, praticidade e controle total                </span>
              </h1>
              <p className="text-gray-900 text-base lg:text-lg mb-8">
                Disponibilizamos uma linha completa de equipamentos para monitoramento e automação, com comunicação via rádio e sistemas inteligentes integrados. Controle seus dispositivos com facilidade: ative ou desative alarmes, abra portões, acione luzes e muito mais — tudo com rapidez, segurança e autonomia.
              </p>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 order-1 md:order-none">
            <motion.img
              src={banner1 || "/placeholder.svg"}
              className="w-full max-h-[95vh] object-contain"
              alt="Monitoramento 24 horas"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </section>

      {/* Seção 2 - Imagem esquerda, Texto direita */}
      <section className="min-h-[80vh] w-full relative py-8">
        {/* Linhas animadas */}
        <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 100 Q 280 50 500 120 T 1700 10"
            fill="none"
            stroke="rgba(59, 246, 112, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M0 200 Q 240 170 520 230 T 1800 80"
            fill="none"
            stroke="rgba(59, 246, 137, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>

        <div className="container mx-auto h-full flex flex-col md:flex-row relative z-10">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 order-1 md:order-none">
            <motion.img
              src={banner2 || "/placeholder.svg"}
              className="w-full max-h-[60vh] object-contain"
              alt="Gestão de frota"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 order-2 md:order-none">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-gray-900">
                Transmissão Segura e Instantânea
                <span className="block font-medium text-green-900 text-xl sm:text-xl lg:text-4xl mt-2">
                  Envio rápido e confiável de eventos, sem depender de redes de terceiros
                </span>
              </h1>
              <p className="text-gray-900 text-base lg:text-lg mb-8">
                Nosso transmissor oferece comunicação rápida e segura com a central de monitoramento, utilizando rede própria via rádio. Sem depender de internet ou redes de terceiros, ele garante operação contínua mesmo em locais remotos ou com instabilidade. É a escolha ideal para quem busca autonomia, eficiência e segurança na transmissão de eventos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seção 3 - Texto esquerda, Imagem direita */}
      <section className="min-h-[80vh] w-full relative py-8">
        {/* Linhas animadas */}
        <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 100 Q 280 50 500 120 T 1700 10"
            fill="none"
            stroke="rgba(59, 246, 112, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M0 600 Q 300 500 800 600 T 1700 400"
            fill="none"
            stroke="rgba(59, 246, 137, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>

        <div className="container mx-auto h-full flex flex-col md:flex-row relative z-10">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 order-2 md:order-none">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-gray-900">
                Recepção Rápida e Confiável
                <span className="block font-medium  text-xl sm:text-xl lg:text-4xl mt-2">
                  Cobertura ampliada e análise detalhada de sinal
                </span>
              </h1>
              <p className="text-gray-900 text-base lg:text-lg mb-8">
                Nossa receptora via rádio garante o recebimento estável e seguro dos eventos transmitidos, com alta sensibilidade e confiabilidade. Para ampliar a cobertura em locais com obstáculos ou distâncias maiores, oferecemos repetidoras que fortalecem o sinal sem perdas.

                Com nosso aplicativo exclusivo, é possível analisar a qualidade das transmissões, perdas de eventos, pacotes recebidos e outros dados essenciais — auxiliando o operador na gestão precisa e em tempo real do sistema.

              </p>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 order-1 md:order-none">
            <motion.img
              src={banner3 || "/placeholder.svg"}
              className="w-full max-h-[60vh] object-contain"
              alt="Sistema de rastreamento"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </section>

      <section className="min-h-[80vh] w-full relative py-8">
        {/* Linhas animadas */}
        <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 100 Q 280 50 500 120 T 1700 10"
            fill="none"
            stroke="rgba(59, 246, 112, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
          <motion.path
            d="M0 200 Q 240 170 520 230 T 1800 80"
            fill="none"
            stroke="rgba(59, 246, 137, 0.2)"
            strokeWidth="3"
            variants={lineVariants}
            initial="hidden"
            animate="visible"
          />
        </svg>

        <div className="container mx-auto h-full flex flex-col md:flex-row relative z-10">
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 order-1 md:order-none">
            <motion.img
              src={banner4 || "/placeholder.svg"}
              className="w-full max-h-[60vh] object-contain"
              alt="Gestão de frota"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 order-2 md:order-none">
            <motion.div
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="max-w-2xl"
            >
              <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-4 text-gray-900">
                Automação Inteligente via Internet
                <span className="block font-medium  text-xl sm:text-xl lg:text-4xl mt-2">
                  Controle total com o módulo IP Vision Connection
                </span>
              </h1>
              <p className="text-gray-900 text-base lg:text-lg mb-8">
                O <strong>módulo IP Vision Connection</strong> permite acessar remotamente centrais de alarme e outros dispositivos, com praticidade e segurança. Através do nosso aplicativo exclusivo, você pode ativar ou desativar sistemas, abrir portões, acionar luzes e muito mais — tudo em tempo real, de qualquer lugar.

                É a solução ideal para quem busca autonomia, conectividade e controle completo com apenas alguns toques na tela.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;