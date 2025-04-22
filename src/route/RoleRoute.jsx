// route/RoleRoute.jsx
import { Navigate } from "react-router-dom";

/* eslint-disable-next-line react/prop-types */
const RoleRoute = ({ children, requiredRole }) => {
  const authToken = localStorage.getItem("authToken");
  const loginTime = localStorage.getItem("loginTime");
  const userRole = localStorage.getItem("userRole");
  const sessionDuration = 3 * 60 * 60 * 1000; // 3 horas

  if (authToken && loginTime) {
    const currentTime = Date.now();
    const elapsedTime = currentTime - parseInt(loginTime, 10);

    if (elapsedTime < sessionDuration) {
      if (!requiredRole || userRole === requiredRole) {
        return children; // Sessão válida e cargo compatível
      } else {
        return (
          <Navigate
            to="/nao-autorizado"
            state={{ message: "Você não tem permissão para acessar esta página." }}
          />
        );
      }
    } else {
      // Sessão expirada
      localStorage.removeItem("authToken");
      localStorage.removeItem("loginTime");
      return (
        <Navigate
          to="/login"
          state={{ message: "Sessão expirada. Faça login novamente." }}
        />
      );
    }
  }

  return (
    <Navigate
      to="/login"
      state={{ message: "Você precisa estar logado para acessar esta página." }}
    />
  );
};

export default RoleRoute;
