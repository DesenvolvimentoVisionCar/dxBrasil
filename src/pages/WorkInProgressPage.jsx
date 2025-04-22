import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import image from "../assets/image.png";
import whatsapp from "../assets/whatsapp.png";

const WorkInProgressPage = () => {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState(false);
  const navigate = useNavigate();

  const senhaCorreta = "dx2024";

  const acessarSistema = () => {
    if (senha === senhaCorreta) {
      navigate("/home"); // Agora redireciona para /home
    } else {
      setErro(true);
    }
  };

  return (
    <div className="w-screen h-screen bg-white overflow-y-auto flex items-center justify-center p-6">
      <div className="text-center max-w-md w-full space-y-6 relative">
        <img src={logo} alt="Logo" className="mx-auto w-40" />
        <h1 className="text-3xl font-bold">Estamos em manutenção</h1>
        <p className="text-gray-600">
          Estamos trabalhando em melhorias e em breve traremos novidades incríveis para você.
        </p>
        <img src={image} alt="Em manutenção" className="mx-auto w-60" />

        <div className="space-y-3">
          <p className="text-sm text-gray-500">Se você for autorizado, digite a senha para acessar:</p>
          <input
            type="password"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            placeholder="Senha"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {erro && <p className="text-red-500 text-sm">Senha incorreta</p>}
          <button
            onClick={acessarSistema}
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Acessar sistema
          </button>
        </div>

        <div className="fixed bottom-6 right-6 cursor-pointer">
          <a href="https://api.whatsapp.com/send?phone=5546999122810" target="_blank" rel="noreferrer">
            <img src={whatsapp} alt="WhatsApp" className="w-14 h-14" />
          </a>
        </div>

        <footer className="text-sm text-gray-500 space-y-1 mt-10">
          <div>(46) 3225 4454</div>
          <div>Copyright © 2024 By DX BRASIL</div>
          <div>Endereço: Av. Elisa Rosa Colla Padoan, 45, Bloco 03 - CETIS - FRARON</div>
        </footer>
      </div>
    </div>
  );
};

export default WorkInProgressPage;
