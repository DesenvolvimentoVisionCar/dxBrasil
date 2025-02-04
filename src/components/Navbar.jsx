"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { link: "home", path: "Início", route: "/" },
    { link: "products", path: "Produtos" },
    { link: "comercial", path: "Orçamento", route: "/orcamento" },
  ];

  return (
    <header
      className={`w-screen z-20 fixed top-0 left-0 right-0 transition-all backdrop-blur-lg duration-300 border-b border-neutral/80`}
    >
      <nav
        className={`${
          isSticky ? "sticky top-0 left-0 right-0 duration-300" : ""
        } container mx-auto lg:px-14 px-4 py-4`}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <button
              className="md:hidden focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-neutralGray" />
              ) : (
                <Menu className="h-6 w-6 text-neutralGray" />
              )}
            </button>
            <RouterLink to="/" className="text-2xl flex items-center">
              <img src={Logo} alt="DX Logo" className="w-10 sm:w-16" />
              <h2 className="text-lg sm:text-2xl">Dx Brasil</h2>
            </RouterLink>
          </div>

        <div className="flex sm:hidden flex-row gap-2">
          <button className="cursor-pointer hover:text-[#5cb41d] first:font-medium">
            <span className="text-sm py-2 px-2 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br">
              Entre
            </span>
          </button>
          <button
            href="/cadastro "
            className="text-sm py-2 px-2 text-white rounded-lg gradient-background"
          >
            Registre-se
          </button>
        </div>
          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ link, path, route }) => (
              <li key={link}>
                {route ? (
                  <RouterLink
                    to={route}
                    className="cursor-pointer block text-base dark:text-white hover:text-[#5cb41d] first:font-medium"
                  >
                    {path}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    className="cursor-pointer block text-base dark:text-white hover:text-[#5cb41d] first:font-medium"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-100}
                  >
                    {path}
                  </ScrollLink>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex space-x-4">
            <RouterLink
              to="/login"
              className="cursor-pointer hover:text-[#5cb41d] first:font-medium"
            >
              <button className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br">
                Entre
              </button>
            </RouterLink>
            <RouterLink
              to="/cadastro"
              className="cursor-pointer hover:text-[#5cb41d] first:font-medium"
            >
              <button
                href="/login"
                className="py-2 px-2 text-white rounded-lg gradient-background "
              >
                Registre-se
              </button>
            </RouterLink>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4 items-center">
              {navItems.map(({ link, path, route }) => (
                <li key={link}>
                  {route ? (
                    <RouterLink
                      to={route}
                      className="cursor-pointer block text-base hover:text-[#fff4bf] first:font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {path}
                    </RouterLink>
                  ) : (
                    <ScrollLink
                      className="cursor-pointer block text-base hover:text-[#fff4bf] first:font-medium"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {path}
                    </ScrollLink>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
