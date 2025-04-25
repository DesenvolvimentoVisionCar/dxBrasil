import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Criando o contexto de autenticação
const AuthContext = createContext();

// Provedor de contexto de autenticação
/* eslint-disable-next-line react/prop-types */
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authKey, setAuthKey] = useState(0);
  const navigate = useNavigate(); // Hook para redirecionamento

  // Função para verificar autenticação
  const checkAuth = () => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);
  };

  // Verificar autenticação ao carregar
  useEffect(() => {
    checkAuth();
  }, []);

  const forceAuthCheck = () => {
    setAuthKey((prev) => prev + 1); // Força uma nova verificação
  };

  useEffect(() => {
    checkAuth();
  }, [authKey]);

  // Função de login
  const login = (token) => {
    localStorage.setItem("authToken", token);
    checkAuth();
  };

  // Função de logout
  const logout = () => {
    localStorage.removeItem("authToken");
    checkAuth();
    navigate("/home");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        login,
        logout,
        checkAuth,
        forceAuthCheck,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar o contexto de autenticação
export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
