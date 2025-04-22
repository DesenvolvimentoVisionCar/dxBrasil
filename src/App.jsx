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
import RoleRoute from "./route/RoleRoute"

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
          <Route path="/" element={<HomePage />} />
          <Route path="/produto/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/orcamento" element={<ContactUsPage />} />
          <Route path="/sobre" element={<AboutUsPage />} />

           <Route
            path="/gerenciamento-usuarios"
            element={
              <RoleRoute>
                <UserManagerPage />
              </RoleRoute>
            }
          /> 

        </Routes>
      </AuthProvider>
    </>
  );
}

export default App;
