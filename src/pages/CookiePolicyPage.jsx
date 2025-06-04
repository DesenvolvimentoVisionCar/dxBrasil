import { Footer } from "flowbite-react";
import Navbar from "../components/Navbar";

const CookiePolicyPage = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-16">
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center text-slate-800 mb-12">
            Política de Cookies
          </h2>

          <div className="bg-slate-50 p-6 rounded-xl shadow-sm">
            <p className="text-slate-600 mb-4">
              Utilizamos cookies para melhorar sua experiência em nosso site. Ao continuar navegando, você concorda com o uso de cookies conforme descrito nesta política.
            </p>

            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              O que são Cookies?
            </h3>
            <p className="text-slate-600 mb-4">
              Cookies são pequenos arquivos de texto armazenados em seu dispositivo quando você visita um site. Eles ajudam a reconhecer sua navegação e armazenar informações relevantes.
            </p>

            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Como usamos os Cookies?
            </h3>
            <p className="text-slate-600 mb-4">
              Utilizamos cookies para personalizar conteúdos, analisar o tráfego do site e melhorar sua experiência. Eles podem ser essenciais para o funcionamento adequado do site.
            </p>

            <h3 className="text-xl font-semibold text-emerald-500 mb-2">
              Como controlar os Cookies?
            </h3>
            <p className="text-slate-600 mb-4">
              Você pode gerenciar suas preferências de cookies diretamente em seu navegador, desativando-os ou removendo-os conforme necessário. No entanto, isso pode afetar sua experiência no site.
            </p>

            <p className="text-slate-600 mt-6">
              Para mais informações, consulte nossa <a href="/politica-de-privacidade" className="underline text-emerald-500">Política de Privacidade</a>.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;
