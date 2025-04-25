import { Footer } from "flowbite-react";
import { BsInstagram } from "react-icons/bs";
import LogoDx from "../assets/Logo.png";

const CustomFooter = () => {
  return (
    <div className="w-full border-t border-[#dddde0] bg-white">
      <div className="w-full px-4 py-2">
        <div className="grid w-full gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4 mb-8 flex flex-col mt-4">
            <div>
              <a href="/" className="text-2xl font-semibold flex items-center">
                <img
                  src={LogoDx || "/placeholder.svg"}
                  alt="Dx Brasil Logo"
                  className="w-auto h-14"
                />
              </a>
            </div>
            <div>
              <p className="mb-1 text-sm text-gray-400">
                Copyright © 2025 By Dx Brasil
              </p>
              <p className="mb-1 text-sm text-gray-400">
                Todos os direitos reservados
              </p>
            </div>
          </div>
          <div className="mt-4">
            <Footer.Title title="Contato" />
            <Footer.LinkGroup col className="gap-2">
              <Footer.Link href="#" className="break-words">
                Email: dxbrasilcomercial@gmail.com
              </Footer.Link>
              <Footer.Link href="#">Telefone: (46) 3225-7818</Footer.Link>
              <Footer.Link
                href="https://www.instagram.com/dxbrasiloficial/"
                className="flex items-center"
              >
                <BsInstagram className="mr-2" />
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="mt-4">
            <Footer.Title title="Endereço" />
            <Footer.LinkGroup col>
              <Footer.Link href="#" className="break-words">
                Avenida Elisa Rosa Colla Padoan 45, bloco 2, bairro Fraron, CEP
                85503380, CETIS Pato Branco - PR.
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full text-start">
          <Footer.Copyright href="#" by="Dx Brasil™" year={2025} />
        </div>
      </div>
    </div>
  );
};

export default CustomFooter;
