import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { pricingOptions } from "../constants";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductSection = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const product = pricingOptions.find((option) => option.id === productId);
  const [selectedProduct, setSelectedProduct] = useState(product);
  
  useEffect(() => {
    setSelectedProduct(product);
  }, [product]);
  
  if (!product) {
    return <div>Produto não encontrado.</div>;
  }
  
  console.log("Produto atual:", product);
  return (
    <div className="md:flex container mx-auto px-4 py-8 space-x-6">
      {/* Sidebar com botão "Voltar ao Início" */}
      <div className="w-full md:w-1/4 space-y-4">
        <a
          href="/home"
          className="inline-flex items-center px-4 py-2 rounded-md text-green-800 hover:bg-green-200 transition-colors w-full justify-center font-semibold"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar ao Início
        </a>

        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="bg-green-600 text-white p-4 mb-2">
            <h2 className="text-xl font-bold">Produtos</h2>
          </div>
          <div>
            <ul className="divide-y divide-gray-200 max-h-[600px] overflow-auto">
              {[...pricingOptions]
                .sort((a, b) => a.title.localeCompare(b.title))
                .map((option) => (
                  <li key={option.id}>
                    <button
                      onClick={() => navigate(`/produto/${option.id}`)}
                      className={`block w-full text-left p-4 rounded-md transition-colors duration-200 
            ${
              selectedProduct?.id === option.id
                ? "bg-primaryg text-white"
                : "bg-white hover:bg-gray-100 text-gray-800"
            }`}
                    >
                      <h3 className="text-md font-semibold">{option.title}</h3>
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Seção principal do produto */}
      <div className="w-full md:w-3/4 bg-gray-50 rounded-lg shadow-md px-6 py-8 space-y-12">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-2">{product.title}</h1>
          <span className="text-xl bg-gradient-to-r from-[#40b346] to-[#fff200] bg-clip-text mb-4 text-transparent">
            {product.tagline}
          </span>
          <p className="text-5xl font-semibold pt-7">{product.price}</p>
        </header>

        <section className="p-6">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Sobre Nosso Produto
          </h2>
          <p className="leading-relaxed text-center">{product.description}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">
            Principais Características
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.feature.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-7 text-center">
            Informações Técnicas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {product.specs.map((spec, index) => (
              <div key={index} className="flex justify-between border-b pb-2">
                <span className="font-medium">{spec.name}</span>
                <span className="text-stone-500">{spec.value}</span>
              </div>
            ))}
          </div>
        </section>

        {product.seriais && (
          <div className="text-center">
            <p className="text-lg">Seriais Compatíveis</p>
            <p className="text-stone-500">{product.seriais}</p>
          </div>
        )}

        <section className="w-full flex items-center justify-center">
          <img
            src={product.img}
            alt=""
            className="w-2/3 object-cover rounded-lg shadow-xl"
          />
        </section>

        <section className="text-center w-full flex flex-col items-center justify-center">
          <p className="text-stone-500 leading-relaxed text-center">{product.descriptionExtra}</p>
          <button className="mt-4 w-1/3 gap-1 transition-all hover:translate-x-3 gradient-background text-lg rounded-md p-2 flex items-center justify-center">
            <ArrowRight className="transition-all text-white" />
            <p className="transition-all text-white">Entre em Contato</p>
          </button>
        </section>
      </div>
    </div>
  );
};

export default ProductSection;
