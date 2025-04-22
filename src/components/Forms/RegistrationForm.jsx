import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../constants";

/* eslint-disable-next-line react/prop-types */
const RegistrationForm = ({ setActiveStep }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch(API_BASE_URL + "/register_user.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setActiveStep(1);
        if (data.redirect) {
          navigate(data.redirect);
        }
      } else {
        setError(data.message || "Erro ao registrar. Tente novamente.");
      }
    } catch (error) {
      setError("Erro de conexão. Tente novamente mais tarde.");
      console.log(error);
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center lg:py-0">
        <div className="w-full sm:w-[85%] lg:w-full rounded-lg shadow md:mt-0  xl:p-0">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl text-center font-bold leading-tight tracking-tight md:text-3xl">
              Registre-se
            </h1>
            {message && (
              <p className="text-green-500 text-sm mb-4">{message}</p>
            )}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Nome completo
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-gray-50 focus:bg-gray-50 focus:ring-0 border border-gray-300 text-gray-500 text-sm rounded-lg block w-full p-2.5 "
                  placeholder="Nome Sobrenome"
                  required=""
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Seu email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="nome@email.com"
                  required=""
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Telefone
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+55 (11) 99999-9999"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                ></input>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-500">
                  Senha
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-500 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                ></input>
              </div>
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="terms"
                    aria-describedby="terms"
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                    required=""
                  ></input>
                </div>
                <div className="ml-3 text-sm">
                  <label className="font-light text-gray-500">
                    Eu aceito os{" "}
                    <a
                      className="font-medium text-[#bdce23] hover:underline"
                      href="#"
                    >
                      Termos and Condições
                    </a>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full text-white gradient-background focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Criar conta
              </button>
              <p className="text-sm font-light text-gray-500">
                Já possui uma conta?{" "}
                <a
                  href="/login"
                  className="font-medium text-[#bdce23] hover:underline"
                >
                  Logue aqui
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default RegistrationForm;
