import { Footer } from "flowbite-react";
import { resourcesLinks, platformLinks, communityLinks } from "../constants";

const CustomFooter = () => {
  return (
    <>
      <div className="w-full border-t border-[#dddde0]"></div>

      <footer className="w-full px-4 py-6">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <h3 className="text-md font-semibold mb-4 text-start">Recursos</h3>
            <ul className="space-y-2 text-start">
              {resourcesLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-stone-600 hover:text-stone-900"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-start">Plataforma</h3>
            <ul className="space-y-2 text-start">
              {platformLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-stone-600 hover:text-stone-900"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-md font-semibold mb-4 text-start">Communidade</h3>
            <ul className="space-y-2 text-start">
              {communityLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-stone-600 hover:text-stone-900"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer.Divider />
        <div className="mt-6 text-start">
          <Footer.Copyright href="#" by="Dx Brasil" year={2025} />
        </div>
      </footer>
    </>
  );
};

export default CustomFooter;
