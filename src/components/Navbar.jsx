"use client";
import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const userRole = localStorage.getItem("userRole");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const { isAuthenticated, logout, forceAuthCheck } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    forceAuthCheck();
  }, []);

  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, {
        duration: 0.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleLogout = () => {
    setIsMenuOpen(false);
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    logout();
    setShowLogoutModal(false);
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleScrollToSection = (sectionId) => {
    if (pathname !== "/home") {
      sessionStorage.setItem("scrollToSection", sectionId);
      navigate("/home");
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { link: "home", path: "Início", route: "/home" },
    { link: "sobre", path: "Sobre", route: "/sobre" },
    { link: "comercial", path: "Contato", route: "/contato" },
    { link: "produtos", path: "Produtos", route: null },

    ...(isAuthenticated
      ? [
          { link: "categoria", path: "Área do Cliente", route: "/categoria" },
          ...(userRole === "admin"
            ? [{ link: "admin", path: "Gerenciamento", route: "/gerenciamento-usuarios" }]
            : []),
        ]
      : []),
  ];

  return (
    <header
      className={`w-screen z-20 fixed top-0 left-0 right-0 transition-all duration-300 ${
        isSticky ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      {showLogoutModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 w-[90%] max-w-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Deseja realmente sair?</h3>
            <p className="text-gray-600 mb-6">Sua sessão será encerrada. Tem certeza que deseja continuar?</p>
            <div className="flex justify-end space-x-4">
              <button
                onClick={cancelLogout}
                className="px-4 py-2 rounded-xl border border-gray-300 text-gray-700 hover:bg-gray-100 transition-all duration-150"
              >
                Cancelar
              </button>
              <button
                onClick={confirmLogout}
                className="px-4 py-2 rounded-xl bg-red-500 text-white hover:bg-red-600 transition-all duration-150"
              >
                Sair
              </button>
            </div>
          </div>
        </div>
      )}

      <nav className="container mx-auto lg:px-14 px-4 py-4">
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
            <RouterLink to="/home" className="text-2xl flex items-center">
              <img src={Logo} alt="DX Logo" className="sm:w-60" />
            </RouterLink>
          </div>

          <ul className="hidden md:flex space-x-8">
            {navItems.map(({ link, path, route }) => (
              <li key={link}>
                {route ? (
                  <button
                    onClick={() => {
                      if (pathname === route) scrollToTop();
                      else navigate(route);
                      setIsMenuOpen(false);
                    }}
                    className="cursor-pointer block text-base dark:text-white hover:text-[#5cb41d] first:font-medium"
                  >
                    {path}
                  </button>
                ) : (
                  <button
                    onClick={() => handleScrollToSection(link)}
                    className="cursor-pointer block text-base dark:text-white hover:text-[#5cb41d] first:font-medium"
                  >
                    {path}
                  </button>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden sm:flex space-x-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br hover:text-[#5cb41d]"
              >
                Sair
              </button>
            ) : (
              <RouterLink
                to="/login"
                className="cursor-pointer hover:text-[#5cb41d] first:font-medium"
              >
                <button className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br">
                  Entre
                </button>
              </RouterLink>
            )}
          </div>
        </div>

        {/* Menu mobile com fundo branco */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 -mx-4">
            <ul className="flex flex-col space-y-4 items-center">
              {navItems.map(({ link, path, route }) => (
                <li key={link}>
                  {route ? (
                    <button
                      onClick={() => {
                        if (pathname === route) scrollToTop();
                        else navigate(route);
                        setIsMenuOpen(false);
                      }}
                      className="cursor-pointer block text-base text-gray-800 hover:text-[#5cb41d] first:font-medium"
                    >
                      {path}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleScrollToSection(link)}
                      className="cursor-pointer block text-base text-gray-800 hover:text-[#5cb41d] first:font-medium"
                    >
                      {path}
                    </button>
                  )}
                </li>
              ))}
              
              {/* Botão Entre/Sair sempre visível no menu mobile */}
              <li>
                {isAuthenticated ? (
                  <button
                    onClick={handleLogout}
                    className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br hover:text-[#5cb41d]"
                  >
                    Sair
                  </button>
                ) : (
                  <RouterLink
                    to="/login"
                    className="cursor-pointer hover:text-[#5cb41d] first:font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <button className="py-2 px-3 rounded-lg border border-black hover:border-[#65bc3c] bg-gradient-to-br">
                      Entre
                    </button>
                  </RouterLink>
                )}
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;