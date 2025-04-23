import { useState } from "react";
import { API_BASE_URL } from "../../config/constants";

/* eslint-disable-next-line react/prop-types */
const PasswordForm = ({setActiveStep}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch( API_BASE_URL +"/send_reset_code.php", {
        method: "POST",
        credentials:"include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (data.status === true) {
        setMessage("Código enviado com sucesso.");
        setActiveStep(1);
      } else {
        setError("Erro ao enviar o código. Tente novamente.");
        setMessage("");
      }
    } catch {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };
  return (
    <section>
    <div className="flex flex-col items-center justify-center mx-auto lg:py-0 sm:p-14 lg:p-0">
      <div className="w-full lg:mt-0 xl:p-0">
        <div className="p-5 lg:p-7 space-y-4 lg:space-y-6 bg-white rounded-lg lg:border-0 shadow-md mx-0 sm:mx-4">
          <h1 className="text-2xl font-semibold leading-tight tracking-tight text-center text-gray-900 lg:text-3xl">
            Recupere sua senha
          </h1>
          <p>Um código de recuperação será enviado em seu email.</p>
          {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <div className="flex items-center mb-2 gap-1">
                <label htmlFor="username" className="block text-sm font-medium text-gray-900">
                  Seu email
                </label>
              </div>
              <input
                type="email"
                name="username" // Mantido como "username"
                id="username"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="placeholder:text-xs placeholder:sm:text-sm bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="nome@email.com"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primaryg hover:bg-primaryg-700 focus:ring-4 focus:outline-none focus:ring-primaryg-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Enviar Código
            </button>
            <p className="text-xs sm:text-sm font-light text-gray-500">
              <a
                href="/login"
                className="font-medium text-primary-600 hover:underline"
              >
                Voltar ao Login
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
);
};

export default PasswordForm;
