"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { isAuthenticated, logout, forceAuthCheck } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
    setShowLogoutModal(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
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
    { link: "home", path: "Início", route: "/home" },
    { link: "sobre", path: "Sobre", route: "/sobre" },
    { link: "comercial", path: "Orçamento", route: "/orcamento" },
    { link: "conteudos", path: "Área do Cliente", route: "/categoria" },
  ];

  return (
    <header
      className={`w-screen z-20 fixed top-0 left-0 right-0 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
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
              <img src={Logo} alt="DX Logo" className="sm:w-60" />
            </RouterLink>
          </div>

          {/* Mobile buttons - conditionally rendered based on authentication */}
          {!isAuthenticated && (
            <div className="flex sm:hidden flex-row gap-2">
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
                className="cursor-pointer first:font-medium hover:text-[#5cb41d]"
              >
                <button className="py-2 px-2 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br">
                  Registre-se
                </button>
              </RouterLink>
            </div>
          )}

          {isAuthenticated && (
            <div className="flex sm:hidden flex-row gap-2">
              <button
                onClick={() => setShowLogoutModal(true)}
                className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br hover:text-[#5cb41d]"
              >
                Sair
              </button>
            </div>
          )}

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

          {/* Desktop buttons - conditionally rendered based on authentication */}
          {!isAuthenticated && (
            <div className="hidden sm:flex space-x-4">
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
                className="cursor-pointer first:font-medium hover:text-[#5cb41d]"
              >
                <button className="py-2 px-2 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br">
                  Registre-se
                </button>
              </RouterLink>
            </div>
          )}

          {isAuthenticated && (
            <div className="hidden sm:flex space-x-4">
              <button
                onClick={() => setShowLogoutModal(true)}
                className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br hover:text-[#5cb41d]"
              >
                Sair
              </button>
            </div>
          )}
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
              {isAuthenticated && (
                <li>
                  <button
                    onClick={() => {
                      setShowLogoutModal(true);
                      setIsMenuOpen(false);
                    }}
                    className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br hover:text-[#5cb41d]"
                  >
                    Sair
                  </button>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Confirmar Logout</h3>
            <p className="mb-6">Tem certeza que deseja sair da sua conta?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowLogoutModal(false)}
                className="px-4 py-2 border rounded-lg hover:bg-gray-100"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;