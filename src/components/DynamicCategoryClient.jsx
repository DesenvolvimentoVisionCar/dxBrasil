"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu } from "lucide-react";
import { pdfjs } from "react-pdf";
import { API_BASE_URL } from "../constants/index";
import {
  FaFilePdf,
  FaFileImage,
  FaFileVideo,
  FaFileAudio,
  FaFileAlt,
  FaDownload,
  FaSearch,
  FaTimes,
} from "react-icons/fa";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const CategoryClient = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const [selectedContent, setSelectedContent] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [clientContents, setClientContents] = useState([]);
  const [error, setError] = useState(null);
  const [filteredContents, setFilteredContents] = useState(clientContents);

  // Fetch de conteúdos
  useEffect(() => {
    fetchClientContents();
  }, []);

  const fetchClientContents = async () => {
    try {
      const response = await fetch(API_BASE_URL + "/get_contents_&_files.php", {
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        setClientContents(data.clientContent);
        // Seleciona o primeiro conteúdo por padrão
        if (data.clientContent.length > 0) {
          setSelectedContent(data.clientContent[0]);
        }
      } else {
        setError(data.message || "Erro ao carregar conteúdos.");
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  // Fechar menu ao clicar fora
  const closeMenu = useCallback((e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  // Adicionar/remover evento de clique
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", closeMenu);
    } else {
      document.removeEventListener("mousedown", closeMenu);
    }
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, [isMenuOpen, closeMenu]);

  // Ícones para tipos de arquivo
  const getFileIcon = (type) => {
    const iconClass = "text-green-600 text-3xl";
    if (type.startsWith("image/")) return <FaFileImage className={iconClass} />;
    if (type === "application/pdf") return <FaFilePdf className={iconClass} />;
    if (type.startsWith("video/")) return <FaFileVideo className={iconClass} />;
    if (type.startsWith("audio/")) return <FaFileAudio className={iconClass} />;
    return <FaFileAlt className={iconClass} />;
  };

  const handleSearchClick = () => {
    setShowSearch(true);
    // Timeout para garantir que o input exista no DOM antes de focar
    setTimeout(() => inputRef.current?.focus(), 0);
  };

  const handleCloseSearch = () => {
    setShowSearch(false);
    setSearchTerm("");
  };

  useEffect(() => {
    if (showSearch && inputRef.current) {
      inputRef.current.focus();
    }
  }, [showSearch]);

  // Componente de Card de Arquivo
  const FileCard = ({ file }) => {
    const [fileSize, setFileSize] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);

    // Calcular tamanho do arquivo
    const getFileSize = useCallback(() => {
      try {
        const blob = new Blob(
          [Uint8Array.from(atob(file.file), (c) => c.charCodeAt(0))],
          {
            type: file.type,
          }
        );
        const size = (blob.size / (1024 * 1024)).toFixed(2);
        setFileSize(size);
      } catch (error) {
        console.error("Erro ao calcular tamanho:", error);
        setFileSize("Erro");
      }
    }, [file]);

    // Calcular tamanho ao montar
    useEffect(() => {
      getFileSize();
    }, [getFileSize]);

    // Criar URL do blob
    const blob = new Blob(
      [Uint8Array.from(atob(file.file), (c) => c.charCodeAt(0))],
      {
        type: file.type,
      }
    );
    const url = URL.createObjectURL(blob);

    // Renderizar prévia
    const renderPreview = () => {
      if (file.type.startsWith("image/")) {
        return (
          <img
            src={url}
            alt={file.content}
            className="max-w-full max-h-[80vh] object-contain"
          />
        );
      }

      if (file.type === "application/pdf") {
        return (
          <iframe src={url} className="w-full h-full" title={file.content} />
        );
      }

      return null;
    };

    // Modal de prévia
    const PreviewModal = () => {
      return (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center p-4"
          onClick={() => setIsPreviewOpen(false)}
        >
          <div
            className="relative w-full max-w-6xl h-[90vh] bg-white rounded shadow overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {renderPreview()}
            <button
              className="absolute top-2 right-2 text-white bg-red-500 p-2 rounded-full z-10"
              onClick={() => setIsPreviewOpen(false)}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      );
    };

    // Verificar se pode pre-visualizar
    const canPreview = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "application/pdf",
    ].includes(file.type);

    return (
      <>
        <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 border-l-4 border-green-500 hover:shadow-xl transition-all duration-300">
          {getFileIcon(file.type)}
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-gray-800 break-all">
              {file.content}
            </h3>
            <p className="text-xs text-gray-500">
              Tamanho: {fileSize ? `${fileSize} MB` : "Carregando..."}
            </p>
          </div>
          {canPreview && (
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="p-2 rounded-full text-green-600 hover:bg-green-50 transition-colors mr-2"
              title="Pré-visualizar"
            >
              <FaSearch size={18} />
            </button>
          )}
          <a
            href={url}
            download={file.content}
            className="p-2 rounded-full text-green-600 hover:bg-green-50 transition-colors"
            title="Baixar"
          >
            <FaDownload size={18} />
          </a>
        </div>

        {isPreviewOpen && <PreviewModal />}
      </>
    );
  };

  // Renderizar seção de arquivos
  const renderFilesSection = (files) => {
    if (!files || files.length === 0) return null;
    return (
      <div className="space-y-4 mt-6">
        <h3 className="text-xl font-semibold text-green-700 mb-4">
          Arquivos Disponíveis
        </h3>
        {files.map((file) => (
          <FileCard key={file.id} file={file} />
        ))}
      </div>
    );
  };

  // Renderizar descrição com suporte a vídeos do YouTube
  const renderDescription = (text) => {
    const youtubeRegex =
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([\w-]+)/g;
    const parts = [];
    let lastIndex = 0;
    let match;
    let index = 0;
    while ((match = youtubeRegex.exec(text)) !== null) {
      const videoId = match[1];
      const start = match.index;
      // Texto antes do link
      if (start > lastIndex) {
        parts.push(
          <p
            key={`text-${index}`}
            className="text-gray-700 text-lg mb-4 leading-relaxed"
          >
            {text.substring(lastIndex, start)}
          </p>
        );
        index++;
      }
      // Player do YouTube
      parts.push(
        <div
          key={`video-${index}`}
          className="aspect-video w-full max-w-xl mb-4 mt-4 shadow-lg rounded-lg overflow-hidden"
        >
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
      lastIndex = youtubeRegex.lastIndex;
      index++;
    }
    // Texto restante após o último link
    if (lastIndex < text.length) {
      parts.push(
        <p
          key={`text-${index}`}
          className="text-gray-700 text-lg whitespace-pre-wrap leading-relaxed"
        >
          {text.substring(lastIndex)}
        </p>
      );
    }
    return <div className="flex flex-col space-y-4">{parts}</div>;
  };

  // Toggle menu mobile
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="pt-16 relative min-h-screen bg-gray-50">
      {/* Botão de menu para mobile */}
      <button
        className={`md:hidden fixed top-24 left-0 z-50 transition-all duration-300 ${
          isMenuOpen ? "translate-x-full" : ""
        }`}
        onClick={toggleMenu}
      >
        <div className="bg-green-500 text-white p-2 rounded-r-md shadow-md">
          <Menu size={24} />
        </div>
      </button>
      <div className="md:flex container mx-auto px-4 py-8">
        {/* Sidebar para telas maiores */}
        <div className="hidden md:block w-1/4 pr-8">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="bg-green-600 text-white p-4">
              {showSearch ? (
                <div className="flex items-center relative">
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Digite para pesquisar..."
                    className="w-full bg-transparent text-white border-0 border-b-2 border-white focus:outline-none focus:border-white focus:ring-0 placeholder-green-300 pb-1"
                    value={searchTerm}
                    onChange={(e) => {
                      const value = e.target.value.slice(0, 20);
                      setSearchTerm(value);

                      // Se o campo estiver vazio, mostra todos os itens
                      if (value.trim() === "") {
                        setFilteredContents(clientContents);
                      } else {
                        // Caso contrário, filtra normalmente
                        setFilteredContents(
                          clientContents.filter((item) =>
                            item.title
                              .toLowerCase()
                              .includes(value.toLowerCase())
                          )
                        );
                      }
                    }}
                    maxLength={20} // Limite físico (opcional, mas recomendado)
                  />
                  <button
                    onClick={handleCloseSearch}
                    className="absolute right-0 text-white hover:text-green-200 ml-2"
                  >
                    <FaTimes />
                  </button>
                </div>
              ) : (
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">Categorias</h2>
                  <button
                    onClick={handleSearchClick}
                    className="hover:text-green-200 transition-colors"
                  >
                    <FaSearch className="text-lg" />
                  </button>
                </div>
              )}
            </div>
            <ul className="divide-y divide-gray-200">
              {clientContents
                .filter(
                  (item) =>
                    searchTerm.trim() === "" || // Se vazio, mostra tudo
                    item.title.toLowerCase().includes(searchTerm.toLowerCase()) // Caso contrário, filtra
                )
                .map((item) => (
                  <li key={item.title}>
                    <button
                      onClick={() => setSelectedContent(item)}
                      className={`w-full text-left p-4 hover:bg-green-50 transition-colors ${
                        selectedContent?.title === item.title
                          ? "bg-green-100 text-green-800"
                          : "text-gray-700"
                      }`}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        {/* Menu mobile */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}
        <div
          ref={menuRef}
          className={`
            md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50 transform
            transition-transform duration-300 ease-in-out
            ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <div className="bg-green-600 text-white p-4">
            <h2 className="text-xl font-bold">Categorias</h2>
          </div>
          <ul className="divide-y divide-gray-200">
            {clientContents.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() => {
                    setSelectedContent(item);
                    setIsMenuOpen(false);
                  }}
                  className={`w-full text-left p-4 hover:bg-green-50 transition-colors ${
                    selectedContent?.title === item.title
                      ? "bg-green-100 text-green-800"
                      : "text-gray-700"
                  }`}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Conteúdo principal */}
        <div className="w-full md:w-3/4 bg-white rounded-lg shadow-md p-6">
          {selectedContent ? (
            <>
              <h1 className="text-3xl font-bold text-green-700 mb-6 border-b-2 border-green-200 pb-4">
                {selectedContent.title}
              </h1>
              <div className="mb-8">
                {renderDescription(selectedContent.description)}
              </div>
              {renderFilesSection(selectedContent.files)}
            </>
          ) : (
            <p className="text-gray-500 text-center">Carregando conteúdo...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryClient;
