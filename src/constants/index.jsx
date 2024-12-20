import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Drag-and-Drop Interface",
    description:
      "Easily design and arrange your VR environments with a user-friendly drag-and-drop interface.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <ShieldHalf />,
    text: "Built-in Templates",
    description:
      "Jumpstart your VR projects with a variety of built-in templates for different types of applications and environments.",
  },
  {
    icon: <BatteryCharging />,
    text: "Real-Time Preview",
    description:
      "Preview your VR application in real-time as you make changes, allowing for quick iterations and adjustments.",
  },
  {
    icon: <PlugZap />,
    text: "Collaboration Tools",
    description:
      "Work together with your team in real-time on VR projects, enabling seamless collaboration and idea sharing.",
  },
  {
    icon: <GlobeLock />,
    text: "Analytics Dashboard",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];
export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  // Transformadores
  {
    id: 1,
    title: "Carregador",
    category: "Transformadores",
    price: "R$125",
    features: ["Fonte Chaveada", "Própria para Transmissor"],
  },
  {
    id: 2,
    title: "Fonte",
    category: "Transformadores",
    price: "R$145",
    features: ["Fonte Chaveada", "Própria para receptora"],
  },

  // Transmissoras
  {
    id: 3,
    title: "Transmissor Full DS",
    category: "Transmissoras",
    price: "R$520",
    features: [
      "Comunicação Ring Tip e Serial",
      "Edição de pacotes de eventos",
      "Suporte horário comercial",
    ],
  },
  {
    id: 4,
    title: "Transmissor Full IP",
    category: "Transmissoras",
    price: "N/A",
    features: [
      "Comunicação Ring Tip",
      "Dupla via de comunicação",
      "Arme e desarme remoto",
    ],
  },
  {
    id: 5,
    title: "Transmissor Full ID",
    category: "Transmissoras",
    price: "N/A",
    features: [
      "Comunicação Ring Tip",
      "Quatro zonas",
      "Compatível com meio de backup",
    ],
  },
  {
    id: 6,
    title: "Transmissor 45WD",
    category: "Transmissoras",
    price: "N/A",
    features: ["Comunicação Serial", "Recursos: Duas zonas"],
  },

  // Módulos
  {
    id: 7,
    title: "Módulo IP Lite",
    category: "Módulos",
    price: "R$200",
    features: [
      "Comunicação via Ring Tip",
      "Acesso simplificado via Babyware",
      "Automação remota",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "Nosso Módulo Ethernet oferece uma solução eficiente para aprimorar a comunicação dos sistemas de alarme de seus clientes. Este produto é compatível com todos os painéis de alarme disponíveis no mercado, destacando-se pela sua facilidade de programação e instalação.",
    feature: [
      "Sistema de HCP",
      "Monitoramento da Tensão",
      "Aceita uso de domínio",
      "Criptografia de ponta a ponta",
      "Comunicação Intranet e Internet",
      "Quatro saídas que permitem acionamento remoto",
    ],
    specs: [
      { name: "Comunicação", value: "Ring e Tip" },
      { name: "Automatização", value: "Babyware e Winload" },
      { name: "Comandos", value: "4 PGMs" },
      { name: "Controle", value: "2 Sensores" },
      { name: "Alimentação", value: "12V" },
      { name: "Consumo", value: "70 mAh" },
    ],
    seriais: "Paradox, SP, Linha Sprit (728,738,748 e Posonics), ViaWeb, JFL, Intelbrás 4010R e 2018E Smart."
  },
  {
    id: 8,
    title: "Módulo IP Convencional",
    category: "Módulos",
    price: "R$250",
    features: [
      "Comunicação via Ring Tip",
      "Backup para segurança",
      "Acesso fácil via Babyware",
    ],
  },
  {
    id: 9,
    title: "Conversor Serial IP",
    category: "Módulos",
    price: "R$450",
    features: [
      "Integração com monitoramento",
      "Protocolos Ademco e DX Net",
      "Comunicação com repetidoras",
    ],
  },

  // Receptora
  {
    id: 10,
    title: "RMV01",
    category: "Receptora",
    price: "R$2.145",
    features: [
      "Comunicação: Servidor via IP",
      "Acesso: Direto ao servidor",
      "Capacidade: Até 4.000 contas",
    ],
  },
  {
    id: 11,
    title: "RMV02",
    category: "Receptora",
    price: "R$4.158",
    features: [
      "Cabo serial",
      "Display para análise de eventos",
      "Capacidade: 4.000 contas",
    ],
  },
  {
    id: 12,
    title: "RMV04",
    category: "Receptora",
    price: "R$5.962",
    features: [
      "Cabo serial",
      "Display de análise e teclado",
      "Capacidade: 4.000 contas",
    ],
  },
  {
    id: 13,
    title: "Repetidora",
    category: "Receptora",
    price: "R$3.641",
    features: [
      "Retransmissão de eventos via rádio",
      "Expande área de monitoramento",
      "Máxima segurança",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
