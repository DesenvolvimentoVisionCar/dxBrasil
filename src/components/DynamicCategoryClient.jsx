"use client";
import { useState, useEffect, useCallback, useRef } from "react";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
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

// Hook de debounce
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const CategoryClient = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const inputRef = useRef(null);
  const [selectedContent, setSelectedContent] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [clientContents, setClientContents] = useState([]);
  const [error, setError] = useState(null);
  const [filteredContents, setFilteredContents] = useState([]);
  const [showFiles, setShowFiles] = useState(false);
  const [isLoadingFiles, setIsLoadingFiles] = useState(false);

  // Novos estados para otimização
  const [currentPage, setCurrentPage] = useState(1);
  const [visibleFileIds, setVisibleFileIds] = useState([]);
  const [loadingMoreFiles, setLoadingMoreFiles] = useState(false);

  const ITEMS_PER_PAGE = 5;

  // Debounce da pesquisa
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Fetch de conteúdos otimizado
  useEffect(() => {
    fetchClientContents();
  }, []);

  const fetchClientContents = async () => {
    try {
      setError(null);

      const response = await fetch(API_BASE_URL + "/get_contents_&_files.php", {
        credentials: "include",
      });

      const data = await response.json();

      if (data.success) {
        // Processa os dados em chunks para não travar a UI
        const processInChunks = (items, chunkSize = 10) => {
          return new Promise((resolve) => {
            let index = 0;
            const result = [];

            const processChunk = () => {
              const chunk = items.slice(index, index + chunkSize);
              result.push(...chunk);
              index += chunkSize;

              if (index < items.length) {
                setTimeout(processChunk, 0);
              } else {
                resolve(result);
              }
            };

            processChunk();
          });
        };

        const processedContents = await processInChunks(data.clientContent);
        setClientContents(processedContents);
        setFilteredContents(processedContents);

        if (processedContents.length > 0) {
          setSelectedContent(processedContents[0]);
        }
      } else {
        setError(data.message || "Erro ao carregar conteúdos.");
      }
    } catch (err) {
      setError("Erro de conexão. Tente novamente mais tarde.");
    }
  };

  // Filtragem com debounce
  useEffect(() => {
    if (debouncedSearchTerm.trim() === "") {
      setFilteredContents(clientContents);
    } else {
      setFilteredContents(
        clientContents.filter((item) =>
          item.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
        )
      );
    }
  }, [debouncedSearchTerm, clientContents]);

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

  // Reset showFiles quando trocar de conteúdo
  useEffect(() => {
    setShowFiles(false);
    setIsLoadingFiles(false);
    setCurrentPage(1);
    setVisibleFileIds([]);
  }, [selectedContent]);

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

  // Componente de Card de Arquivo otimizado
  const FileCard = ({ file, isVisible }) => {
    const [fileSize, setFileSize] = useState(null);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [blobUrl, setBlobUrl] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Só processa o arquivo quando ele se torna visível
    useEffect(() => {
      if (!isVisible) return;

      const processFile = async () => {
        try {
          setIsLoading(true);

          // Use requestIdleCallback para não bloquear a UI
          await new Promise((resolve) => {
            if (window.requestIdleCallback) {
              window.requestIdleCallback(resolve);
            } else {
              setTimeout(resolve, 0);
            }
          });

          const blob = new Blob(
            [Uint8Array.from(atob(file.file), (c) => c.charCodeAt(0))],
            { type: file.type }
          );

          const url = URL.createObjectURL(blob);
          const size = (blob.size / (1024 * 1024)).toFixed(2);

          setBlobUrl(url);
          setFileSize(size);
        } catch (error) {
          console.error("Erro ao processar arquivo:", error);
          setFileSize("Erro");
        } finally {
          setIsLoading(false);
        }
      };

      processFile();

      // Cleanup
      return () => {
        if (blobUrl) {
          URL.revokeObjectURL(blobUrl);
        }
      };
    }, [isVisible, file.file, file.type]);

    // Cleanup quando componente desmonta
    useEffect(() => {
      return () => {
        if (blobUrl) {
          URL.revokeObjectURL(blobUrl);
        }
      };
    }, [blobUrl]);

    if (!isVisible || isLoading) {
      return (
        <div className="flex items-center gap-4 bg-white shadow-md rounded-lg p-4 border-l-4 border-green-500">
          <div className="animate-pulse">
            <div className="w-8 h-8 bg-gray-300 rounded"></div>
          </div>
          <div className="flex-1 animate-pulse">
            <div className="h-4 bg-gray-300 rounded mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      );
    }

    // Renderizar prévia
    const renderPreview = () => {
      if (!blobUrl) return null;

      if (file.type.startsWith("image/")) {
        return (
          <img
            src={blobUrl}
            alt={file.content}
            className="max-w-full max-h-[80vh] object-contain"
          />
        );
      }
      if (file.type === "application/pdf") {
        return (
          <iframe
            src={blobUrl}
            className="w-full h-full"
            title={file.content}
          />
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
          {canPreview && blobUrl && (
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="p-2 rounded-full text-green-600 hover:bg-green-50 transition-colors mr-2"
              title="Pré-visualizar"
            >
              <FaSearch size={18} />
            </button>
          )}
          {blobUrl && (
            <a
              href={blobUrl}
              download={file.content}
              className="p-2 rounded-full text-green-600 hover:bg-green-50 transition-colors"
              title="Baixar"
            >
              <FaDownload size={18} />
            </a>
          )}
        </div>
        {isPreviewOpen && <PreviewModal />}
      </>
    );
  };

  // Renderizar seção de arquivos com paginação
  const renderFilesSection = (files) => {
    if (!files || files.length === 0) return null;

    const handleToggleFiles = () => {
      if (!showFiles) {
        setIsLoadingFiles(true);
        // Carrega apenas os primeiros arquivos
        setTimeout(() => {
          setShowFiles(true);
          setCurrentPage(1);
          setVisibleFileIds(files.slice(0, ITEMS_PER_PAGE).map((f) => f.id));
          setIsLoadingFiles(false);
        }, 100);
      } else {
        setShowFiles(false);
        setCurrentPage(1);
        setVisibleFileIds([]);
      }
    };

    const loadMoreFiles = async () => {
      setLoadingMoreFiles(true);

      // Simula um pequeno delay para dar feedback visual
      await new Promise((resolve) => setTimeout(resolve, 300));

      const nextPage = currentPage + 1;
      const startIndex = (nextPage - 1) * ITEMS_PER_PAGE;
      const endIndex = startIndex + ITEMS_PER_PAGE;
      const newFiles = files.slice(startIndex, endIndex);

      setVisibleFileIds((prev) => [...prev, ...newFiles.map((f) => f.id)]);
      setCurrentPage(nextPage);
      setLoadingMoreFiles(false);
    };

    const visibleFiles = files.filter((file) =>
      visibleFileIds.includes(file.id)
    );
    const hasMoreFiles = files.length > visibleFiles.length;

    return (
      <div className="mt-8">
        <button
          onClick={handleToggleFiles}
          disabled={isLoadingFiles}
          className={`flex items-center gap-2 w-full text-left bg-green-50 hover:bg-green-100 transition-colors duration-200 p-4 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
            isLoadingFiles ? "cursor-wait opacity-75" : ""
          }`}
        >
          <span className="text-green-700 font-semibold text-lg">
            Arquivos para download ({files.length})
          </span>
          {isLoadingFiles ? (
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-green-600"></div>
          ) : showFiles ? (
            <ChevronUp className="text-green-600 w-5 h-5" />
          ) : (
            <ChevronDown className="text-green-600 w-5 h-5" />
          )}
        </button>

        {showFiles && (
          <div className="mt-4 bg-gray-50 rounded-lg p-4 border border-gray-200 animate-in slide-in-from-top-2 duration-200">
            <div className="space-y-4">
              {visibleFiles.map((file) => (
                <FileCard
                  key={file.id}
                  file={file}
                  isVisible={visibleFileIds.includes(file.id)}
                />
              ))}
            </div>

            {hasMoreFiles && (
              <div className="mt-4 text-center">
                <button
                  onClick={loadMoreFiles}
                  disabled={loadingMoreFiles}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-green-300 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                >
                  {loadingMoreFiles ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Carregando...
                    </>
                  ) : (
                    `Carregar mais arquivos (${
                      files.length - visibleFiles.length
                    } restantes)`
                  )}
                </button>
              </div>
            )}
          </div>
        )}
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

  if (error) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button
            onClick={fetchClientContents}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

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
                    }}
                    maxLength={20}
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
              {filteredContents.map((item) => (
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
            {filteredContents.map((item) => (
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
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
              <p className="text-gray-500">Carregando conteúdo...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryClient;
