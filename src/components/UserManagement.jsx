import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/index";
import { MdAdminPanelSettings } from "react-icons/md";
import { FaUserCheck, FaTrashAlt } from "react-icons/fa";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Button } from "@mui/material";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const UserManagement = () => {
  const userRole = localStorage.getItem("userRole");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch(API_BASE_URL + "/get_users.php", {
        credentials: "include",
      });
      const data = await response.json();

      if (data.success) {
        setUsers(data.users);
      } else {
        setError(data.message || "Erro ao carregar usuários.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  const confirmAndExecute = (action, user) => {
    setSelectedUser(user);
    setConfirmAction(() => () => action(user.id));
    setConfirmOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(API_BASE_URL + "/delete_user.php", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (data.success) {
        setUsers(users.filter((user) => user.id !== id));
      } else {
        setError(data.message || "Erro ao excluir usuário.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  const handleRoleToggle = async (id) => {
    try {
      const response = await fetch(API_BASE_URL + "/toggleAdmin_user.php", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (data.success) {
        setUsers(
          users.map((user) =>
            user.id === id
              ? {
                  ...user,
                  user_type: user.user_type === "admin" ? "user" : "admin",
                }
              : user
          )
        );
      } else {
        setError(data.message || "Erro ao alternar cargo.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  const handleActiveToggle = async (id) => {
    try {
      const response = await fetch(API_BASE_URL + "/toggleAuthorize_user.php", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (data.success) {
        setUsers(
          users.map((user) =>
            user.id === id
              ? { ...user, authorized: user.authorized === "1" ? "0" : "1" }
              : user
          )
        );
      } else {
        setError(data.message || "Erro ao alternar estado de ativação.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  const handleNavigateClientContent = () => {
    navigate("/gerenciamento-conteudos");
  };

  return (
    <section className="p-6 max-w-4xl mx-auto pt-20">
      <h1 className="p-20 text-2xl font-bold text-center mb-4">
        Gerenciar Usuários
      </h1>

      <div className="flex justify-between items-center mb-4">
        {userRole == "admin" && (
          <Button
            variant="contained"
            color="success"
            onClick={handleNavigateClientContent}
          >
            Área do Conteúdo
          </Button>
        )}
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      </div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-center">Nome</TableCell>
              <TableCell className="text-center">Email</TableCell>
              <TableCell className="text-center">Admin</TableCell>
              <TableCell className="text-center">Ativo</TableCell>
              <TableCell className="text-center">Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length > 0 ? (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell className="text-center">
                    <Button
                      onClick={() => confirmAndExecute(handleRoleToggle, user)}
                      style={{
                        color: user.user_type === "admin" ? "green" : "gray",
                      }}
                    >
                      <MdAdminPanelSettings />
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      onClick={() =>
                        confirmAndExecute(handleActiveToggle, user)
                      }
                      style={{
                        color: user.authorized === "1" ? "green" : "gray",
                      }}
                    >
                      <FaUserCheck />
                    </Button>
                  </TableCell>
                  <TableCell className="text-center">
                    <Button
                      color="error"
                      onClick={() => confirmAndExecute(handleDelete, user)}
                    >
                      <FaTrashAlt />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center p-4 text-gray-500"
                >
                  Nenhum usuário encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Confirmação</DialogTitle>
        <DialogContent>
          Tem certeza que deseja executar essa ação em {selectedUser?.name}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancelar</Button>
          <Button
            onClick={() => {
              confirmAction();
              setConfirmOpen(false);
            }}
            color="error"
          >
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default UserManagement;
