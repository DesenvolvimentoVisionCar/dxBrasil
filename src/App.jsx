import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import { AuthProvider } from "./context/AuthContext.jsx";
import Lenis from "lenis";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ContactUsPage from "./pages/ContactUsPage";
import AboutUsPage from "./pages/AboutUsPage";
import UserManagerPage from "./pages/UserManagerPage";
import RoleRoute from "./route/RoleRoute";
import ContentManagerPage from "./pages/ContentManagerPage.jsx";
import ContentFormPage from "./pages/ContentFormPage.jsx";
import CategoryPage from "./pages/CategoryPage";
import WorkInProgressPage from "./pages/WorkInProgressPage.jsx";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import CookiePolicyPage from "./pages/CookiePolicyPage.jsx";
import CookiePopup from "./components/CookiePopUp.jsx";

// Componente para rolar para o topo ao mudar de rota
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Se a rota for "/home" e NÃO houver fragmento (hash), rola para o topo
    if (pathname === "/home" && window.location.hash) {
      window.scrollTo(0, 0);
    } else {
      if (window.lenis) {
        window.lenis.scrollTo(0, {
          duration: 0.8,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      }
    }
  }, [pathname]);
}

function App() {
  useEffect(() => {
    // Inicializa o Lenis e armazena na window para acesso global
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    // Armazena a instância do Lenis globalmente para o ScrollToTop acessar
    window.lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Limpeza ao desmontar
      lenis.destroy();
      window.lenis = null;
    };
  }, []);

  return (
    <AuthProvider>
      <ScrollToTop />
      <CookiePopup />
      <Routes>
        <Route path="/" element={<WorkInProgressPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/produto/:id" element={<ProductPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignupPage />} />
        <Route path="/contato" element={<ContactUsPage />} />
        <Route path="/sobre" element={<AboutUsPage />} />
        <Route path="/politica-de-cookies" element={<CookiePolicyPage />} />
        <Route path="/recuperacao-senha" element={<ForgotPasswordPage />} />

        <Route
          path="/categoria"
          element={
            <RoleRoute>
              <CategoryPage />
            </RoleRoute>
          }
        />

        <Route
          path="/gerenciamento-usuarios"
          element={
            <RoleRoute requiredRole="admin">
              <UserManagerPage />
            </RoleRoute>
          }
        />

        <Route
          path="/gerenciamento-conteudos"
          element={
            <RoleRoute requiredRole="admin">
              <ContentManagerPage />
            </RoleRoute>
          }
        />

        <Route
          path="/form-conteudo"
          element={
            <RoleRoute requiredRole="admin">
              <ContentFormPage />
            </RoleRoute>
          }
        />

        <Route
          path="/form-conteudo/:id"
          element={
            <RoleRoute requiredRole="admin">
              <ContentFormPage />
            </RoleRoute>
          }
        />

        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
