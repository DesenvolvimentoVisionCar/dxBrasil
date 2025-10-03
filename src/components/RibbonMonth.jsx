import { useState, useEffect } from "react";

// Imports das imagens seguindo o padrão mês_cor.png
import JaneiroBrancoImg from "../assets/ribbons/Janeiro_Branco.png";
import FevereiroRoxoImg from "../assets/ribbons/Fevereiro_Roxo.png";
import MarcoLilasImg from "../assets/ribbons/Março_Lilas.png";
import AbrilAzulImg from "../assets/ribbons/Abril_Azul.png";
import MaioLaranjaImg from "../assets/ribbons/Maio_Laranja.png";
import JunhoVermelhoImg from "../assets/ribbons/Junho_Vermelho.png";
import JulhoVerdeImg from "../assets/ribbons/Julho_Verde.png";
import AgostoDouradoImg from "../assets/ribbons/Agosto_Dourado.png";
import SetembroAmareloImg from "../assets/ribbons/Setembro_Amarelo.png";
import OutubroRosaImg from "../assets/ribbons/Outubro_Rosa.png";
import NovembroAzulImg from "../assets/ribbons/Novembro_Azul.png";
import DezembroVermelhoImg from "../assets/ribbons/Dezembro_Vermelho.png";

const RibbonMonth = () => {
  const [usePlaceholder, setUsePlaceholder] = useState(false);
  const [campaignData, setCampaignData] = useState(null);
  const [isVisible, setIsVisible] = useState(true); // ← ADICIONADO

  const campaigns = {
    1: {
      name: "Janeiro Branco",
      bgColor: "bg-gray-100",
      textColor: "text-gray-700",
      borderColor: "border-gray-300",
      image: JaneiroBrancoImg,
      title: "Janeiro Branco — Paz para a Mente",
      message:
        "Janeiro se pinta de branco para lembrar que a saúde mental merece cuidado. Cuidar do que sentimos é construir um ano mais leve e cheio de equilíbrio.",
      placeholder: "Branco",
    },
    2: {
      name: "Fevereiro Roxo",
      bgColor: "bg-purple-500",
      textColor: "text-purple-600",
      image: FevereiroRoxoImg,
      title: "Fevereiro Roxo — Força que Resiste",
      message:
        "Fevereiro veste roxo para falar de coragem. Lembrar do Alzheimer, do Lúpus e da Fibromialgia é reconhecer a luta de quem não desiste de viver com dignidade.",
      placeholder: "Roxo",
    },
    3: {
      name: "Março Lilás",
      bgColor: "bg-purple-300",
      textColor: "text-purple-500",
      image: MarcoLilasImg,
      title: "Março Lilás — Prevenção que Salva",
      message:
        "Março chega lilás para alertar sobre o câncer do colo do útero. Informação e cuidado transformam o medo em esperança.",
      placeholder: "Lilás",
    },
    4: {
      name: "Abril Azul",
      bgColor: "bg-blue-500",
      textColor: "text-blue-600",
      image: AbrilAzulImg,
      title: "Abril Azul — Inclusão e Consciência",
      message:
        "Abril brilha em azul pelo autismo e pela segurança no trabalho. Respeito, acolhimento e cuidado constroem um futuro mais justo.",
      placeholder: "Azul",
    },
    5: {
      name: "Maio Laranja",
      bgColor: "bg-orange-500",
      textColor: "text-orange-600",
      image: MaioLaranjaImg,
      title: "Maio Laranja — Proteção à Vida",
      message:
        "Maio acende em laranja para lembrar que proteger nossas crianças e combater a violência é um dever de todos. Cada gesto de cuidado fortalece o amanhã.",
      placeholder: "Laranja",
    },
    6: {
      name: "Junho Vermelho",
      bgColor: "bg-red-600",
      textColor: "text-red-600",
      image: JunhoVermelhoImg,
      title: "Junho Vermelho — Doar é Amar",
      message:
        "Junho pulsa em vermelho para lembrar da doação de sangue. Um ato simples, mas que carrega em si o poder de salvar vidas.",
      placeholder: "Vermelho",
    },
    7: {
      name: "Julho Verde",
      bgColor: "bg-green-500",
      textColor: "text-green-600",
      image: JulhoVerdeImg,
      title: "Julho Verde — Esperança que Cuida",
      message:
        "Julho se veste de verde para falar de saúde e prevenção. Cuidar hoje é semear dias mais saudáveis e cheios de esperança.",
      placeholder: "Verde",
    },
    8: {
      name: "Agosto Dourado",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-600",
      image: AgostoDouradoImg,
      title: "Agosto Dourado — Aleitamento é Ouro",
      message:
        "Agosto reluz dourado, exaltando o leite materno como o alimento mais precioso. Amamentar é nutrir de saúde e amor.",
      placeholder: "Dourado",
    },
    9: {
      name: "Setembro Amarelo",
      bgColor: "bg-yellow-400",
      textColor: "text-yellow-600",
      image: SetembroAmareloImg,
      title: "Setembro Amarelo — Vidas Importam",
      message:
        "Setembro se acende em amarelo para quebrar o silêncio e falar de prevenção ao suicídio. Escutar, apoiar e acolher são gestos que salvam.",
      placeholder: "Amarelo",
    },
    10: {
      name: "Outubro Rosa",
      bgColor: "bg-pink-500",
      textColor: "text-pink-600",
      image: OutubroRosaImg,
      title: "Outubro Rosa — Prevenção é Amor",
      message:
        "Outubro se veste de rosa para lembrar que a vida é preciosa. Prevenir o câncer de mama é um ato de cuidado e amor que inspira esperança.",
      placeholder: "Rosa",
    },
    11: {
      name: "Novembro Azul",
      bgColor: "bg-blue-600",
      textColor: "text-blue-700",
      image: NovembroAzulImg,
      title: "Novembro Azul — Saúde é Coragem",
      message:
        "Novembro veste azul para chamar a atenção dos homens: cuidar da saúde é um gesto de coragem e de amor por si mesmo.",
      placeholder: "Azul",
    },
    12: {
      name: "Dezembro Vermelho",
      bgColor: "bg-red-600",
      textColor: "text-red-600",
      image: DezembroVermelhoImg,
      title: "Dezembro Vermelho — Consciência que Protege",
      message:
        "Dezembro arde em vermelho para conscientizar sobre o HIV/AIDS. Prevenir é cuidar, respeitar e construir um futuro sem preconceito.",
      placeholder: "Vermelho",
    },
  };

  useEffect(() => {
    const currentMonth = new Date().getMonth() + 1;
    const campaign = campaigns[currentMonth];

    if (campaign) {
      setCampaignData(campaign);
    }
  }, []);

  // ← ADICIONADO: Detecta o scroll para esconder o componente
  useEffect(() => {
    const handleScroll = () => {
      // Se rolar mais de 400px, esconde
      if (window.scrollY > 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Se não houver campanha ou não estiver visível, não renderiza nada
  if (!campaignData || !isVisible) return null; // ← MODIFICADO

  return (
    <div className="fixed left-4 top-20 sm:top-23 z-50 transition-opacity duration-300">
      {" "}
      {/* ← ADICIONADO transition */}
      <div
        className="group relative flex items-center"
        tabIndex={0}
        aria-label={`Informações ${campaignData.name} - passe o mouse ou foque para ver mais`}
      >
        {!usePlaceholder && campaignData.image ? (
          <img
            src={campaignData.image}
            alt={`Laço ${campaignData.name}`}
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg object-cover cursor-default transition-transform transform hover:scale-105"
            onError={() => {
              setUsePlaceholder(true);
              console.warn(
                `Erro ao carregar imagem ${campaignData.name} — usando placeholder`
              );
            }}
          />
        ) : (
          <div
            className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-lg ${campaignData.bgColor} flex items-center justify-center text-white font-semibold text-xs`}
          >
            {campaignData.placeholder}
          </div>
        )}
        <div
          className="absolute left-0 top-full mt-3 w-72 sm:w-80 p-4 bg-white text-gray-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible transition-all duration-200 transform translate-y-1 group-hover:translate-y-0"
          role="dialog"
          aria-label={`Mensagem ${campaignData.name}`}
        >
          <h4
            className={`text-sm sm:text-base font-semibold ${campaignData.textColor} mb-1`}
          >
            {campaignData.title}
          </h4>
          <p className="text-xs sm:text-sm text-gray-700 leading-relaxed mb-3">
            {campaignData.message}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RibbonMonth;
