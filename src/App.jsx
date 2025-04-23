import { Routes, Route } from "react-router-dom";
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

function App() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<WorkInProgressPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/orcamento" element={<ContactUsPage />} />
          <Route path="/sobre" element={<AboutUsPage />} />
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
    </>
  );
}

export default App;
