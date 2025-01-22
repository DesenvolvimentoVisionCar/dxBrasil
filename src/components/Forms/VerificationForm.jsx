import { useState } from "react";

/* eslint-disable-next-line react/prop-types */
const VerificationForm = ({ setActiveStep }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const API_BASE_URL = 'https://visioncar.ind.br/api/login.php';

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(API_BASE_URL + "/verify_registration_code.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ verification_code: code }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Cadastro concluído com sucesso! Redirecionando...");
        setError("");

        setActiveStep(2);
      } else {
        setError(data.message || "Código inválido. Tente novamente.");
        setMessage("");
      }
    } catch {
      setError("Erro de conexão. Tente novamente mais tarde.");
      setMessage("");
    }
  };

  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center md:px-6 mx-auto lg:py-0">
        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-3 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-3xl">
              Vericar o código
            </h1>
            <p className="text-center text-sm text-gray-400">
              Um código foi enviado para o seu e-mail. Por favor, verifique a
              caixa de entrada nos próximos 3 minutos. Caso não o receba,
              solicite o reenvio.
            </p>
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
                  Digite o código
                </label>
                <input
                  type="text"
                  name="code"
                  id="code"
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  placeholder="X-X-X-X-X"
                  required=""
                ></input>
                <p className="mt-2 text-sm font-light text-gray-500">
                  Ainda não recebeu o código?{" "}
                  <a
                    href="#"
                    className="font-medium text-green-400 hover:underline"
                  >
                    Reenvie aqui.
                  </a>
                </p>
              </div>
              <button
                type="submit"
                className="gradient-background w-full text-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Confirmar
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificationForm;
