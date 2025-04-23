import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../constants/index";
import { FaFileAlt, FaTimes, FaDownload } from "react-icons/fa";

const ClientContentForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    files: []
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [previewFile, setPreviewFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      fetch(`${API_BASE_URL}/get_content_by_id.php/${id}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            setFormData({
              title: data.clientContent.title,
              description: data.clientContent.description,
              files: data.clientContent.files.map(file => ({
                content: file.file,
                file_type: file.type,
                filename: file.content
              })) || []
            });
          } else {
            setError("Erro ao carregar conteúdo.");
          }
        })
        .catch(() => setError("Erro de conexão. Tente novamente mais tarde."));
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
          filename: file.name
        });
        setFormData((prev) => ({ ...prev, files: [...prev.files, ...newFiles] }));
      };
    });
  };

  const handleRemoveFile = (index) => {
    setFormData((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

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

      if (data.success) {
        navigate("/gerenciamento-conteudos");
      } else {
        setError(data.message || "Erro ao processar conteúdo. Tente novamente.");
      }
    } catch (error) {
      setError("Erro de conexão. Tente novamente mais tarde.");
      console.log(error);
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

  return (
    <section className="w-full p-20 mt-8">
      <div className="flex flex-col items-center justify-center lg:py-0">
        <div className="w-full sm:w-[85%] lg:w-full bg-white rounded-lg shadow md:mt-0 xl:p-0">
          <div className="p-4 md:p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-2xl text-center font-bold">{id ? "Editar Conteúdo" : "Inserir Conteúdo"}</h1>
            {message && <p className="text-green-500 text-sm mb-4">{message}</p>}
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block mb-2 text-sm font-medium">Título</label>
                <input type="text" id="title" value={formData.title} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5" required />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Descrição</label>
                <textarea id="description" value={formData.description} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-sm rounded-lg w-full p-2.5" rows="4" required></textarea>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium">Arquivos</label>
                <input type="file" multiple onChange={handleFileUpload} className="block w-full text-sm border border-gray-300 rounded-lg cursor-pointer bg-gray-50" />
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.files.map((file, index) => (
                  <div key={index} className="flex items-center bg-gray-100 p-2 rounded-lg shadow cursor-pointer" onClick={() => setPreviewFile(file)}>
                    <FaFileAlt className="text-gray-700 mr-2" />
                    <span className="text-sm text-gray-900 mr-2">{file.filename}</span>
                    <button type="button" onClick={(e) => { e.stopPropagation(); handleRemoveFile(index); }}>
                      <FaTimes className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
              <button type="submit" className="w-full text-white bg-primary font-medium rounded-lg text-sm px-5 py-2.5">{id ? "Atualizar Conteúdo" : "Inserir Conteúdo"}</button>
            </form>
          </div>
        </div>
      </div>
      {previewFile && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" onClick={() => setPreviewFile(null)}>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-lg font-bold mb-4">{previewFile.filename}</h2>
            {previewFile.file_type.startsWith("image/") ? (
              <img src={`data:${previewFile.file_type};base64,${previewFile.content}`} alt={previewFile.filename} className="w-full h-auto" />
            ) : (
              <p>Pré-visualização não disponível.</p>
            )}
            <button className="mt-4 text-white bg-green-500 px-4 py-2 rounded-lg" onClick={handleDownload}><FaDownload className="inline mr-2" />Download</button>
            <button className="mt-4 ml-2 text-white bg-red-500 px-4 py-2 rounded-lg" onClick={() => setPreviewFile(null)}>Fechar</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ClientContentForm;