import { BadgeCheck } from "lucide-react";

const VerificatedForm = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center justify-center md:px-6 md:mx-auto lg:py-0">
        <div className="w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-3 space-y-4 md:space-y-6 sm:p-8 w-full justify-center items-center flex flex-col">
            <BadgeCheck className="text-green-400 text-center w-full" size={60} />

            <h1 className="text-xl text-center font-bold leading-tight tracking-tight md:text-3xl">
              Código verificado
            </h1>
            <p className="text-center text-sm text-gray-500">
              Parabéns! Sua conta foi criada com sucesso. Agora você tem acesso
              exclusivo à área de clientes da VisionCar.
            </p>
            <a href="/categoria" className="font-medium text-green-400 hover:underline">
              Ir para área de clientes.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerificatedForm;
