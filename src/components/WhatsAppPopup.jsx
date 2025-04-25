import { useState } from "react";
import { Send } from 'lucide-react';
import whatsapp from "../assets/whatsapp.png";

const CONTACTS = [
  { name: "Comercial", phone: "554699122810" },
  { name: "Financeiro", phone: "5546991207627" },
  { name: "Supervisor Operacional", phone: "5546988246162" },
  { name: "Suporte", phone: "554632257818" },
  { name: "Base de Monitoramento", phone: "5546991112310" },
];

const WhatsAppPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div
        className="fixed bottom-4 right-4 bg-[#ffffff] p-3 rounded-full shadow-lg cursor-pointer transition-all border-2 border-[#edededa9] z-50"
        onClick={openPopup}
      >
        <img
          src={whatsapp}
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </div>

      {/* Popup Overlay */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-2 z-[2000]"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded-lg shadow-xl relative w-[90%] max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-xl font-bold"
              onClick={closePopup}
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl font-semibold text-gray-800 text-center mb-4">
              Contatos WhatsApp
            </h2>

            {/* Contact List */}
            <div className="space-y-3">
              {CONTACTS.map((contact, index) => (
                <a
                  key={index}
                  href={`https://api.whatsapp.com/send?phone=${contact.phone}&text=`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between group bg-white p-3 rounded-lg hover:bg-neutralSilver shadow-sm transition-all"
                >
                  <span className="text-gray-700 font-medium">
                    {contact.name}
                  </span>
                  <Send className="w-6 h-6 text-[#ced0ce] group-hover:text-[#8ce382] transition-all" />
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppPopup;

