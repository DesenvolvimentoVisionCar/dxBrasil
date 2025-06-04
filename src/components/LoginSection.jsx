import { useState } from "react";
import { LockKeyhole } from "lucide-react";
import { API_BASE_URL } from "../constants/index";
import escritorio from "../assets/escritorio.png";
import { useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

const LoginSection = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
    // Limpa o erro quando o usuário começa a digitar novamente
    if (error) setError("");
  };

  const handleForgotPassword = () => {
    navigate("/recuperacao-senha");
  };

  const handleReturnHome = () => {
    navigate("/home");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(""); // Limpa erros anteriores

    try {
      const response = await fetch(API_BASE_URL + "/login.php", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        throw new Error("Erro ao conectar com o servidor.");
      }

      const data = await response.json();

      console.log("Dados recebidos no login:", data);

      if (data.success) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("loginTime", Date.now().toString());
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("authorized", data.authorized || 1);
        localStorage.setItem("verified", data.verified || 1);
        console.log("OZAMBELÊ:");

        navigate("/home");
      } else {
        setError(data.message || "Erro ao realizar login.");
      }
    } catch (err) {
      setError(err.message || "Ocorreu um erro ao processar sua solicitação.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen">
      {/* Image half */}
      <div className="hidden w-1/2 bg-gray-100 lg:block relative">
        <img
          src={escritorio}
          alt="Login background"
          className="h-full w-full object-cover"
        />

        {/* Botão Voltar */}
        <button
          onClick={handleReturnHome}
          className="absolute top-4 left-4 bg-white text-gray-800 px-3 py-2 rounded-md shadow-md hover:bg-gray-200 transition-colors flex items-center space-x-1"
        >
          <FiArrowLeft className="text-lg" />
          <span>Voltar</span>
        </button>
      </div>

      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-xl space-y-8 px-4 sm:px-6">
          <div className="space-y-2 text-center">
            <h1 className="text-4xl font-bold">Bem vindo!</h1>
            <p className="text-gray-500 text-lg">
              Coloque suas credenciais para acessar sua conta.
            </p>
          </div>

          {/* Exibição da mensagem de erro */}
          {error && (
            <div className="rounded-md bg-red-50 p-4">
              <div className="flex">
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-red-800">{error}</h3>
                </div>
              </div>
            </div>
          )}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-start text-sm font-medium text-gray-500"
              >
                Email
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={loginData.username}
                onChange={handleChange}
                className="placeholder:text-xs placeholder:sm:text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="nome@email.com"
                required
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center mb-2 gap-1">
                <LockKeyhole size={17} />
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-900"
                >
                  Senha
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                value={loginData.password}
                onChange={handleChange}
                className="placeholder:text-xs placeholder:sm:text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-[#bdce23]"
                >
                  Lembre de mim
                </label>
              </div>
              <div className="text-sm">
                <a
                  onClick={handleForgotPassword}
                  className="font-medium text-[#bdce23] hover:text-[#dff045] cursor-pointer"
                >
                  Esqueceu sua senha?
                </a>
              </div>
            </div>
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className={`gradient-background flex w-full justify-center rounded-md border border-transparent px-4 py-2 text-md font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                  isLoading ? "opacity-70 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Carregando..." : "Entrar"}
              </button>
            </div>
          </form>

          <div className="text-center text-sm text-gray-500">
            Não possui uma conta?{" "}
            <a
              href="/cadastro"
              className="font-medium text-[#bdce23] hover:text-[#dff045]"
            >
              Cadastre-se
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSection;
