import { useEffect, useState } from "react";
import { API_BASE_URL } from "../constants/index";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import { Dialog, DialogTitle, DialogContent, DialogActions } from "@mui/material";
import { Button } from "@mui/material";
import { Table, TableHead, TableRow, TableCell, TableBody, TableContainer, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ClientContentManagement = () => {
  const [clientContents, setClientContents] = useState([]);
  const [error, setError] = useState("");
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [confirmAction, setConfirmAction] = useState(null);
  const [selectedClientContent, setSelectedClientContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchClientContents();
  }, []);

  const fetchClientContents = async () => {
    try {
      const response = await fetch(API_BASE_URL + "/get_contents.php", {
        credentials: "include",
      });
      const data = await response.json();

      if (data.success) {
        setClientContents(data.clientContent);
      } else {
        setError(data.message || "Erro ao carregar conteúdos.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  const confirmAndExecute = (action, clientContent) => {
    setSelectedClientContent(clientContent);
    setConfirmAction(() => () => action(clientContent.id));
    setConfirmOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(API_BASE_URL + "/delete_content.php", {
        method: "DELETE",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const data = await response.json();

      if (data.success) {
        setClientContents(clientContents.filter(clientContent => clientContent.id !== id));
      } else {
        setError(data.message || "Erro ao excluir conteúdo.");
      }
    } catch {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  const handleEdit = (clientContent) => {
    navigate(`/form-conteudo/${clientContent.id}`);
  };

  const handleAddNew = () => {
    navigate("/form-conteudo");
  };

  return (
    <section className="p-6 max-w-4xl mx-auto pt-20">
      <h1 className="p-20 text-2xl font-bold text-center mb-3">Gerenciar Conteúdos de Cliente</h1>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <div className="mb-4 flex justify-end">
        <Button color="success" variant="contained" startIcon={<FaPlus />} onClick={handleAddNew}>
          Adicionar Novo Conteúdo
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-center">Título</TableCell>
              <TableCell className="text-center">Editar</TableCell>
              <TableCell className="text-center">Excluir</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientContents ? (
              clientContents.map(clientContent => (
                <TableRow key={clientContent.id}>
                  <TableCell className="text-center">{clientContent.title}</TableCell>
                  <TableCell className="text-center">
                    <Button color="success" onClick={() => handleEdit(clientContent)}>
                      <FaEdit  />
                    </Button>
                  </TableCell>
                  <TableCell className="text-center ">
                    <Button color="error" onClick={() => confirmAndExecute(handleDelete, clientContent)}>
                      <FaTrashAlt />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center p-4 text-gray-500">
                  Nenhum conteúdo encontrado.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={confirmOpen} onClose={() => setConfirmOpen(false)}>
        <DialogTitle>Confirmação</DialogTitle>
        <DialogContent>
          Tem certeza que deseja excluir {selectedClientContent?.title}?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setConfirmOpen(false)}>Cancelar</Button>
          <Button onClick={() => { confirmAction(); setConfirmOpen(false); }} color="error">
            Confirmar
          </Button>
        </DialogActions>
      </Dialog>
    </section>
  );
};

export default ClientContentManagement;
