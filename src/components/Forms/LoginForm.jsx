import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserRound, LockKeyhole } from "lucide-react";
import { API_BASE_URL } from "../../constants";

const LoginForm = () => {
  const [loginData, setLoginData] = useState({
    username: "", // Mantido como "username"
    password: "",
  });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setLoginData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch( API_BASE_URL+ "/login.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData), // Certifique-se de enviar os nomes corretos das chaves
      });

      if (!response.ok) {
        throw new Error("Erro ao conectar com o servidor.");
      }

      const data = await response.json();

      console.log("Dados recebidos no login:", data); // Log para depuração

      if (data.success) {
        // Armazena os dados do usuário no localStorage
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("loginTime", Date.now().toString());
        localStorage.setItem("userRole", data.role);
        localStorage.setItem("authorized", data.authorized || 1); // Valor padrão caso não venha da API
        localStorage.setItem("verified", data.verified || 1); // Valor padrão caso não venha da API

        // Redireciona para a página de categorias
        navigate("/categoria");
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
    <section className="lg:bg-white">
      <div className="flex flex-col items-center justify-center mx-auto h-screen lg:py-0 sm:p-14 lg:p-0">
        <div className="w-full lg:mt-0 xl:p-0">
          <div className="p-5 lg:p-10 space-y-7 lg:space-y-6 bg-white border shadow lg:border-0 lg:shadow-none mx-5 rounded-md lg:rounded-none">
            <h1 className="text-3xl font-semibold leading-tight tracking-tight text-gray-900 lg:text-4xl">
              Entre na sua conta
            </h1>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <div className="flex items-center mb-2 gap-1">
                  <UserRound size={17} />
                  <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                    Seu email
                  </label>
                </div>
                <input
                  type="text"
                  name="username" // Mantido como "username"
                  id="username"
                  value={loginData.username}
                  onChange={handleChange}
                  className="placeholder:text-xs placeholder:sm:text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="nome@email.com"
                  required
                />
              </div>
              <div>
                <div className="flex items-center mb-2 gap-1">
                  <LockKeyhole size={17} />
                  <label htmlFor="password" className="block text-sm font-medium text-gray-900">
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
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-3 h-3 sm:w-4 sm:h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    />
                  </div>
                  <div className="ml-1f ms- flex items-center sm:ml-3 text-xs sm:text-sm">
                    <label className="text-gray-500">Lembre-se de mim</label>
                  </div>
                </div>
                <a
                  href="/recuperacao-senha"
                  className="text-xs sm:text-sm text-gray-500 hover:underline"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full text-white bg-primary hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                {isLoading ? "Carregando..." : "Conecte-se"}
              </button>
              <p className="text-xs sm:text-sm font-light text-gray-500">
                Ainda não possui uma conta?{" "}
                <a
                  href="/cadastro"
                  className="font-medium text-primary-600 hover:underline"
                >
                  Cadastre-se
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
