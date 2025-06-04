import { useState, useEffect } from "react";

const CookiePopup = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!localStorage.getItem("cookiesAccepted")) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem("cookiesAccepted", "true");
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 w-full bg-green-500 pb-2  flex flex-col items-center justify-center text-center z-50">
            <p className="text-sm md:text-base text-white">
                Este site utiliza cookies para melhorar sua experiência.{" "}
                <a href="/politica-de-cookies" className="underline">Saiba mais</a>.
                <button
                    onClick={handleAccept}
                    className="mt-3 ml-3 bg-white hover:bg-gray-200 text-black font-bold py-2 px-6 rounded transition-all"
                >
                    Aceitar
                </button>
            </p>

        </div>
    );
};

export default CookiePopup;
