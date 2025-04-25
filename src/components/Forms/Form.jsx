import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const ref = useRef();
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_t5dpl3b", "template_57sndez", ref.current, {
        publicKey: "nadtEqt6fX_BMfprL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
        },
        (error) => {
          console.error("FAILED...", error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <section className="bg-white py-8">
      <div className="py-8 lg:py-6 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-5xl font-medium text-center text-gray-900">
          Nos Contate
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
          Precisa de detalhes sobre os produtos Dx Brasil? Está com alguma dúvida? Quer enviar feedback sobre um recurso beta? Deixe-nos saber.
        </p>
        <form ref={ref} onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Nome Completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Nome completo"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
              placeholder="nome@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900">
              Sua mensagem
            </label>
            <textarea
              name="message" // Corrigido aqui
              id="message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Deixe um comentário..."
              required
            ></textarea>
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-primaryg py-3 px-5 text-white rounded-lg bg-[#4dc567] sm:w-fit hover:bg-primaryg-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Enviar Mensagem
            </button>
          </div>
        </form>
        {success && <div className="text-green-600 text-center mt-4">Sua mensagem foi enviada com sucesso!</div>}
      </div>
    </section>
  );
};

export default Form;
