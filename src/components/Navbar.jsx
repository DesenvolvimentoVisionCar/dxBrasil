'use client'
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { Menu, X } from "lucide-react";


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
    { link: "about", path: "Sobre" },
    { link: "products", path: "Produtos" },
    { link: "comercial", path: "Orçamento", route: "/orçamento" },

  ];

  return (
    <header
      className={`w-screen fixed top-0 left-0 right-0 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className={`${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300" : ""} container mx-auto lg:px-14 px-4 py-4`}>
        <div className="flex items-center justify-between">
          <RouterLink
            to="/"
            className="text-2xl font-semibold flex items-center"
          >
            <img
              src={""}
              alt="VisionCar Logo"
              className="w-30 h-12"
            />
          </RouterLink>

          <div className="flex items-center">
            <ul
              className={`md:flex md:space-x-8 ${isMenuOpen ? 'flex flex-col md:flex-row absolute top-20 md:top-0 left-0 right-0 bg-primary shadow-md p-4 space-y-4 md:space-y-0 md:p-0 md:relative md:bg-transparent md:shadow-none' : 'hidden'} md:static`}
            >
              {navItems.map(({ link, path, route }) => (
                <li key={link}>
                  {route ? (
                    <RouterLink
                      to={route}
                      className="cursor-pointer block text-base text-white md:text-gray-900 hover:text-primary first:font-medium py-2 md:py-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {path}
                    </RouterLink>
                  ) : (
                    <ScrollLink
                      className="cursor-pointer block text-base text-white md:text-gray-900 hover:text-primary first:font-medium py-2 md:py-0"
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

            <button 
              className="md:hidden ml-4 focus:outline-none focus:text-gray-500"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-neutralGray"/>
              ) : (
                <Menu className="h-6 w-6 text-neutralGray"/>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;