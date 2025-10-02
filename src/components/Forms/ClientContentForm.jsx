import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../config/constants";
import {
  FaFileAlt,
  FaTimes,
  FaDownload,
  FaSpinner,
  FaCheckCircle,
  FaTimesCircle,
} from "react-icons/fa";

const ClientContentForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    files: [],
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [previewFile, setPreviewFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // Inicia como true quando há ID (modo edição)
  const [isLoadingData, setIsLoadingData] = useState(!!id);
  const [showResult, setShowResult] = useState(false);
  const [resultType, setResultType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      // Garante que o loading esteja ativo
      setIsLoadingData(true);
      setError(""); // Limpa erros anteriores

      fetch(`${API_BASE_URL}/get_content_by_id.php/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setFormData({
              title: data.clientContent.title,
              description: data.clientContent.description,
              files:
                data.clientContent.files.map((file) => ({
                  content: file.file,
                  file_type: file.type,
                  filename: file.content,
                })) || [],
            });
          } else {
            setError("Erro ao carregar conteúdo.");
          }
        })
        .catch((err) => {
          console.error("Erro ao carregar dados:", err);
          setError("Erro de conexão. Tente novamente mais tarde.");
        })
        .finally(() => {
          // Garante que o loading seja removido
          setIsLoadingData(false);
        });
    }
  }, [id]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = [];
    files.forEach((file) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        newFiles.push({
          content: reader.result.split(",")[1],
          file_type: file.type,
          filename: file.name,
        });
        setFormData((prev) => ({
          ...prev,
          files: [...prev.files, ...newFiles],
        }));
      };
    });
  };

  const handleRemoveFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setIsLoading(true);
    setShowResult(false);

    try {
      const response = await fetch(
        `${API_BASE_URL}/${id ? "update_contents.php" : "insert_contents.php"}`,
        {
          method: id ? "PUT" : "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData, id }),
        }
      );
      const data = await response.json();
      setIsLoading(false);

      if (data.success) {
        setResultType("success");
        setShowResult(true);
        setTimeout(() => {
          navigate("/gerenciamento-conteudos");
        }, 2000);
      } else {
        setResultType("error");
        setShowResult(true);
        setError(
          data.message || "Erro ao processar conteúdo. Tente novamente."
        );
        setTimeout(() => {
          setShowResult(false);
        }, 5000);
      }
    } catch (error) {
      setIsLoading(false);
      setResultType("error");
      setShowResult(true);
      setError("Erro de conexão. Tente novamente mais tarde.");
      console.log(error);
      setTimeout(() => {
        setShowResult(false);
      }, 5000);
    }
  };

  const handleDownload = () => {
    if (previewFile) {
      const link = document.createElement("a");
      link.href = `data:${previewFile.file_type};base64,${previewFile.content}`;
      link.download = previewFile.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  // Tela de loading para carregamento de dados (modo edição)
  if (isLoadingData) {
    return (
      <section className="w-full px-3 py-4 sm:px-6 md:px-8 lg:px-20 mt-16 sm:mt-4 md:mt-8">
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center max-w-md w-full mx-4">
            <FaSpinner className="animate-spin text-5xl text-green-600 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-800 mb-3">
              Carregando Dados...
            </h2>
            <div className="flex justify-center">
              <div className="animate-pulse text-sm text-gray-500">
                Isso pode levar alguns segundos...
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full px-3 py-4 sm:px-6 md:px-8 lg:px-20 mt-16 sm:mt-4 md:mt-8">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full sm:w-[85%] lg:w-full bg-white rounded-lg shadow md:mt-0 xl:p-0">
          <div className="p-3 sm:p-4 md:p-6 space-y-3 sm:space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-lg sm:text-xl md:text-2xl text-center font-bold">
              {id ? "Editar Conteúdo" : "Inserir Conteúdo"}
            </h1>

            {message && (
              <p className="text-green-500 text-sm mb-2">{message}</p>
            )}
            {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div>
                <label className="block mb-1 text-sm font-medium">Título</label>
                <input
                  type="text"
                  id="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Descrição
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5"
                  rows="3"
                  required
                  disabled={isLoading}
                />
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Arquivos
                </label>
                <div className="relative">
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50 file:mr-4 file:py-2 file:px-4 file:rounded-l-lg file:border-0 file:text-sm file:bg-gray-100 file:text-gray-700"
                    disabled={isLoading}
                  />
                </div>
              </div>

              {formData.files.length > 0 && (
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-700">
                    Arquivos selecionados:
                  </p>
                  <div className="max-h-32 overflow-y-auto space-y-1">
                    {formData.files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center bg-gray-100 p-2 rounded-lg shadow cursor-pointer"
                        onClick={() => setPreviewFile(file)}
                      >
                        <FaFileAlt className="text-gray-700 mr-2 text-sm flex-shrink-0" />
                        <span
                          className="text-sm text-gray-900 mr-2 truncate flex-grow"
                          title={file.filename}
                        >
                          {file.filename}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveFile(index);
                          }}
                          disabled={isLoading}
                          className="text-red-500 hover:text-red-700 p-1 flex-shrink-0"
                        >
                          <FaTimes className="text-sm" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <button
                type="submit"
                className="w-full text-white bg-primaryg font-medium rounded-lg text-sm px-5 py-2.5 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <FaSpinner className="animate-spin mr-2" />
                    {id ? "Atualizando..." : "Inserindo..."}
                  </>
                ) : id ? (
                  "Atualizar Conteúdo"
                ) : (
                  "Inserir Conteúdo"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de Preview */}
      {previewFile && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-40"
          onClick={() => setPreviewFile(null)}
        >
          <div
            className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              className="text-base sm:text-lg font-bold mb-3 truncate"
              title={previewFile.filename}
            >
              {previewFile.filename}
            </h2>
            {previewFile.file_type.startsWith("image/") ? (
              <img
                src={`data:${previewFile.file_type};base64,${previewFile.content}`}
                alt={previewFile.filename}
                className="w-full h-auto mb-3 rounded"
              />
            ) : (
              <p className="text-sm text-gray-600 mb-3">
                Pré-visualização não disponível.
              </p>
            )}
            <div className="flex gap-2">
              <button
                className="flex-1 text-white bg-green-500 px-3 py-2 rounded-lg text-sm"
                onClick={handleDownload}
              >
                <FaDownload className="inline mr-1" />
                Download
              </button>
              <button
                className="flex-1 text-white bg-red-500 px-3 py-2 rounded-lg text-sm"
                onClick={() => setPreviewFile(null)}
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Card de Resultado */}
      {showResult && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-2xl max-w-xs sm:max-w-md w-full mx-4 text-center">
            {resultType === "success" ? (
              <>
                <FaCheckCircle className="text-green-500 text-4xl sm:text-6xl mx-auto mb-4" />
                <h2 className="text-lg sm:text-2xl font-bold text-green-700 mb-2">
                  {id ? "Atualização Concluída!" : "Inserção Concluída!"}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  {id
                    ? "O conteúdo foi atualizado com sucesso."
                    : "O conteúdo foi inserido com sucesso no banco de dados."}
                </p>
                <div className="flex justify-center">
                  <div className="animate-pulse text-sm text-gray-500">
                    Redirecionando...
                  </div>
                </div>
              </>
            ) : (
              <>
                <FaTimesCircle className="text-red-500 text-4xl sm:text-6xl mx-auto mb-4" />
                <h2 className="text-lg sm:text-2xl font-bold text-red-700 mb-2">
                  {id ? "Falha na Atualização" : "Falha na Inserção"}
                </h2>
                <p className="text-gray-600 mb-4 text-sm">
                  {error ||
                    "Ocorreu um erro ao processar a operação. Tente novamente."}
                </p>
                <button
                  className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                  onClick={() => setShowResult(false)}
                >
                  Fechar
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientContentForm;
