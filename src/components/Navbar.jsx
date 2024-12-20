"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from 'lucide-react';
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
    { link: "comercial", path: "Orçamento", route: "/orçamento" },
  ];

  return (
    <header
      className={`w-screen z-20 fixed top-0 left-0 right-0 transition-all backdrop-blur-lg duration-300 border-b border-neutral/80`}
    >
      <nav
        className={`${
          isSticky
            ? "sticky top-0 left-0 right-0 duration-300"
            : ""
        } container mx-auto lg:px-14 px-4 py-4`}
      >
        <div className="flex items-center justify-between w-full">
          <RouterLink
            to="/"
            className="text-2xl flex items-center"
          >
            <img src={Logo} alt="DX Logo" className="w-16" />
            <h2>Dx Brasil</h2>
          </RouterLink>

          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ link, path, route }) => (
              <li key={link}>
                {route ? (
                  <RouterLink
                    to={route}
                    className="cursor-pointer block text-base dark:text-white hover:text-[#ffe875] first:font-medium"
                  >
                    {path}
                  </RouterLink>
                ) : (
                  <ScrollLink
                    className="cursor-pointer block text-base dark:text-white hover:text-[#ffe875] first:font-medium"
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
            <button className="py-2 px-3 rounded-lg border border-white bg-gradient-to-br  hover:bg-stone-800">
                Entre
            </button>
            <button className="py-2 px-2 rounded-lg gradient-background ">
              Crie uma conta
            </button>
          </div>

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
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              {navItems.map(({ link, path, route }) => (
                <li key={link}>
                  {route ? (
                    <RouterLink
                      to={route}
                      className="cursor-pointer block text-base text-white hover:text-[#fff4bf] first:font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {path}
                    </RouterLink>
                  ) : (
                    <ScrollLink
                      className="cursor-pointer block text-base text-white hover:text-[#fff4bf] first:font-medium"
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
              <li className="space-y-2 flex items-center justify-center flex-col md:flex-row">
                <button className="w-1/3 lg:w-full py-1 px-1 rounded-full bg-gradient-to-br from-emerald-400 via-cyan-500 to-[#ddb811] hover:bg-stone-800">
                  <span className="block bg-[#121212] hover:bg-stone-900 rounded-full py-2 px-4">
                    Entre
                  </span>
                </button>
                <button className="w-1/3 lg:w-full py-2 px-2 rounded-lg gradient-background">
                  Crie uma conta
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

