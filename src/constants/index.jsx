import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
export const features = [
  {
    icon: <ShieldHalf />,
    text: "Segurança e Proteção",
    description: "Comunicação rápida entre alarmes e a central, garantindo respostas imediatas.",
  },
  {
    icon: <PlugZap />,
    text: "Independência de Provedores",
    description: "Opera sem depender de internet ou telefonia fixa, evitando falhas comuns.",
  },
  {
    icon: <GlobeLock />,
    text: "Cobertura em Áreas Remotas",
    description: "Ideal para locais rurais ou de difícil acesso, onde comunicação é limitada.",
  },
  {
    icon: <BatteryCharging />,
    text: "Redução de Custos",
    description: "Comunicação direta e confiável, diminuindo a necessidade de manutenção.",
  },
  {
    icon: <Fingerprint />,
    text: "Flexibilidade e Compatibilidade",
    description: "Integração fácil com diferentes sistemas e tecnologias de alarme.",
  },
  {
    icon: <BotMessageSquare />,
    text: "Análise e Relatórios",
    description: "Software integrado para monitoramento e geração de relatórios detalhados.",
  },
];


export const checklistItems = [
  {
    title: "Autonomia Total",
    description:
      "Com bateria e carregador, o transmissor se torna totalmente autônomo, sem a dependência de fontes externas de energia.",
  },
  {
    title: "Testes Periódicos Configuráveis",
    description:
      "O sistema permite testes periódicos, configurados conforme a necessidade de cada ambiente monitorado.",
  },
  {
    title: "Tecnologia de Ponta",
    description:
      "A DX BRASIL oferece soluções completas e seguras, com tecnologia avançada em monitoramento via rádio.",
  },
  {
    title: "Segurança e Eficiência",
    description:
      "Ideal para quem busca segurança, eficiência e independência, oferecendo um monitoramento confiável e eficaz para diversos ambientes.",
  },
];

export const pricingOptions = [
  // Transformadores
  {
    id: 1,
    title: "Carregador",
    category: "Transformadores",
    features: [
      "Fonte Chaveada",
      "Enrolado com fio de cobre",
      "Própria para Transmissor",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "O Carregador DX oferece alimentação estável e segura, sem ruídos ou interferências externas. Compatível com 127V e 220V, e com saída de 12V, garante o máximo de performance e proteção para seus dispositivos!",
    feature: [
      "Fonte Chaveada",
      "Própria para Transmissor",
      "Evita ruído",
      "Sem interferências",
      "Enrolado com fio de cobre",
      "Sistema DHCP",
      "Criptografia de ponta a ponta",
      "Monitoramento de tensão",
    ],
    specs: [
      { name: "Saída", value: "12V 900 mA/h" },
      { name: "Potência", value: "10,8 watts" },
      { name: "Entrada", value: "127V - 220V" },
    ],
  },
  {
    id: 2,
    title: "Fonte",
    category: "Transformadores",
    features: [
      "Fonte Chaveada",
      "Enrolado com fio de cobre",
      "Própria para receptora",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "A fonte DX oferece alimentação estável e segura, sem ruídos ou interferências externas. Compatível com 127V e 220V, e com saída de 12 V, garante o máximo de performance e proteção para seus dispositivos!",
    feature: [
      "Fonte Chaveada",
      "Própria para receptora",
      "Evita ruído",
      "Sem interferências",
      "Enrolado com fio de cobre",
    ],
    specs: [
      { name: "Saída", value: "12V 1,5 A/h" },
      { name: "Potência", value: "18 watts" },
      { name: "Entrada", value: "127V - 220V" },
    ],
  },

  // Transmissoras
  {
    id: 3,
    title: "Transmissor Full DS",
    category: "Transmissoras",
    features: [
      "Comunicação Ring Tip e Serial",
      "Edição de pacotes de eventos",
      "Suporte horário comercial",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "Garanta a máxima segurança para seu negócio com nosso equipamento autossuficiente, que dispensa dependência de sistemas externos e oferece monitoramento 100% independente e confiável.",
    feature: [
      "Não depende de fatores externos",
      "Criptografia de ponta a ponta",
      "Contact ID",
      "Eventos editáveis",
      "Número de pacotes configuráveis",
      "Teste periódico",
      "Comunicação universal por linha da central",
      "Automonitoramento",
      "Protocolos de centrais integrados",
      "Programação descomplicada",
    ],
    specs: [
      { name: "Consumo Stand By", value: "40 mAh" },
      { name: "Consumo em Transmissão", value: "900 mAh" },
      { name: "Alimentação", value: "12 volts" },
      { name: "Comunicação", value: "Ring e Tip" },
      { name: "Sensores", value: "4 zonas duplas" },
      { name: "Comunicação", value: "Serial" },
      {
        name: "Automação",
        value: "Arme e desarme iButton/contato seco",
      },
      { name: "Automação", value: "2 PGMs" },
    ],
    seriais:
      "Comunicação serial  com centrais: JFL, ViaWeb, Intelbrás 4010 e 2018E Smart, DSC 585 e DSC 1832/1864.",
  },
  {
    id: 4,
    title: "Transmissor Full ID",
    category: "Transmissoras",
    features: [
      "Comunicação via RingTIP",
      "Compatível com qualquer painel de alarme",
      "Formato Contact ID",
    ],
    tagline: "Monitoramento fácil, seguro e transparente.",
    description:
      "O DX Full ID é um dispositivo que permite monitorar de maneira fácil, segura e transparente qualquer painel de alarme com comunicador telefônico em formatos Contact ID, tornando-se compatível com qualquer painel do mercado. Possui uma interface de comunicação própria, se comunica diretamente com o painel de alarme e incorpora tudo o que é necessário para funcionar como full data transfer nos formatos mencionados.",
    feature: [
      "Evento de auto-teste",
      "Quatro entradas 24H com eventos editáveis",
      "Comandos desde um telefone interno",
      "Monitoramento de tensão DC da alimentação",
      "Eventos gerados pelo painel de alarme (formato CID)",
    ],
    specs: [
      { name: "Alimentação", value: "12 volts" },
      { name: "Comunicação", value: "Via RingTIP" },
      { name: "Compatibilidade", value: "Qualquer painel de alarme" },
      { name: "Formato", value: "Contact ID" },
    ],
  },
  {
    id: 5,
    title: "Transmissor Full IP",
    category: "Transmissoras",
    features: [
      "Comunicação via Ethernet e rádio",
      "Acesso remoto via Babyware e Winload",
      "Monitoramento de tensão AC e DC",
    ],
    tagline: "Otimize seu monitoramento com confiabilidade e eficácia.",
    description:
      "O Radio IP foi desenvolvido para otimizar seu monitoramento, pensando sempre na sua economia mantendo a confiabilidade e eficácia. Possui dois meios de comunicação, reportando principalmente via Ethernet os eventos do painel e usando a transmissão radial somente quando não houver comunicação Ethernet ou envio de teste periódico do equipamento.",
    feature: [
      "Evento de inicialização para controle de auto-teste",
      "Monitoramento de alimentação 12V",
      "Monitoramento de tensão AC",
      "Programação em bancada somente com USB",
      "Ajuste na quantidade de retransmissão de eventos",
      "Duas entradas 24H (nível alto e baixo com eventos editáveis)",
      "Acesso remoto na configuração da central via Babyware e Winload",
      "Duas saídas PGM's com acionamento remoto via Gestor IPDX ou software de Monitoramento",
      "Comunicador com a discadora da central de alarme",
      "Monitoramento de eventos via serial em centrais JFL, ViaWeb, Intelbras (AMT-4010), e linha Spirit (728, 738 e 748)",
    ],
    specs: [
      { name: "Alimentação", value: "12 volts" },
      { name: "Comunicação", value: "Ethernet e rádio" },
      { name: "Acesso remoto", value: "Babyware e Winload" },
      { name: "Monitoramento", value: "Tensão AC e DC" },
    ],
  },
  {
    id: 6,
    title: "Transmissor Full ID 45 WD",
    category: "Transmissoras",
    features: [
      "Comunicação via serial",
      "Quatro canais de operação simultânea",
      "Compatível com DX BRASIL, Paradox, Posonic e DSC",
    ],
    tagline: "Comunicação confiável via serial com múltiplos canais.",
    description:
      "O Transmissor 45WD conta com uma interface de comunicação própria, que comunica via serial com os painéis de alarme das marcas DX BRASIL, Paradox, Posonic e DSC. Todos os eventos podem ser transmitidos em vários canais de rádio, iguais ou diferentes (configuráveis por programação de PC), permitindo frequências de apoio (back-up) ante possíveis interferências ou bloqueios no canal de recepção principal.",
    feature: [
      "Evento de auto-teste",
      "Eventos gerados pelo painel de alarme via serial",
      "Quatro entradas 24H com eventos editáveis",
      "Monitoramento de tensão DC da alimentação",
      "Quatro canais de operação simultânea",
    ],
    specs: [
      { name: "Alimentação", value: "12 volts" },
      { name: "Comunicação", value: "Via serial" },
      { name: "Compatibilidade", value: "DX BRASIL, Paradox, Posonic e DSC" },
      { name: "Canais", value: "Quatro canais de operação simultânea" },
    ],
  },

  // Módulos
  {
    id: 7,
    title: "Módulo IP Lite",
    category: "Módulos",
    features: [
      "Comunicação via Ring Tip",
      "Acesso simplificado via Babyware",
      "Automação remota",
    ],
    tagline: "Upgrade para sua central de alarme",
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
  },
  {
    id: 8,
    title: "Módulo IP Convencional",
    category: "Módulos",
    features: [
      "Comunicação via Ring Tip",
      "Backup para segurança",
      "Acesso fácil via Babyware",
    ],
    tagline: "Upgrade para sua central de alarme",
    description:
      "O módulo IPDX convencional oferece uma solução eficiente para aprimorar a comunicação dos sistemas de alarme de seus clientes. É perfeito para a substituição de linhas telefônicas, permitindo ao cliente a comodidade de realizar o arme e desarme remoto do sistema.",
    feature: [
      "Sistema DHCP",
      "Monitoramento de Tensão",
      "Criptografado de ponta a ponta",
      "Automatização da Central",
      "Compatível com todas as centrais do mercado",
      "Aceita domínio",
      "Intranet e Internet",
      "Compatível com meio backup",
    ],
    specs: [
      { name: "Comunicação", value: "Ring e Tip" },
      { name: "Automatização", value: "Babyware e Winload" },
      { name: "Comandos", value: "2 PGMs" },
      { name: "Controle", value: "2 Sensores" },
      { name: "Alimentação", value: "12V" },
      { name: "Consumo", value: "70 mAh" },
    ],
    seriais:
      "A linha Sprit inclui os modelos 728, 738, 748 e suas respectivas Posonic's. Além disso, há o Paradox SP via Web/JFL e os modelos da Intelbras, como o 4010R, o 2018 e o Smart AMT1000 Smart.",
  },
  {
    id: 9,
    title: "Conversor Serial IP",
    category: "Módulos",
    features: [
      "Integração com monitoramento",
      "Protocolos Ademco e DX Net",
      "Comunicação com repetidoras",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "O Conversor Serial IP foi desenvolvido para proporcionar máxima segurança ao seu monitoramento, garantindo eficiência e tranquilidade no envio dos eventos diretamente para o servidor ou software de monitoramento. Quando utilizado em conjunto com receptoras, oferece uma solução robusta e confiável. Além disso, a integração com a repetidora reduz o consumo e fluxo de eventos, enquanto a comunicação em dupla via assegura a continuidade do serviço, eliminando riscos de falhas e garantindo a operação sem interrupções.",
    feature: [
      "Envia eventos via IP direto para o servidor",
      "Integração completa com receptora/repetidora",
      "Protocolos Ademco e DX Net",
      "Intranet e Internet",
      "Aceita uso de domínio",
      "Sistema DHCP",
      "Criptografia de ponta a ponta",
      "Monitoramento de tensão",
    ],
    specs: [
      { name: "Comunicação", value: "ADEMCO e DX NET" },
      { name: "Alimentação", value: "12V" },
      { name: "Consumo", value: "70 mAh" },
    ],
  },

  // Receptora
  {
    id: 10,
    title: "RMV01",
    category: "Receptora",
    features: [
      "Comunicação: Servidor via IP",
      "Acesso: Direto ao servidor",
      "Capacidade: Até 4.000 contas",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "RMV01 é a solução perfeita para ampliar sua cobertura com máxima eficiência e segurança. Ela permite receber até 4.000 contas via rádio e encaminhá-las diretamente para o servidor viá internet, proporcionando conectividade sem falhas. Além disso, pode ser instalado fora da base, garantindo uma área de cobertura mais ampla e maior flexibilidade para atender às suas necessidades.",
    feature: [
      "Comunicação: Servidor via IP",
      "Acesso: Direto ao servidor",
      "Capacidade: Até 4.000 contas",
      "Intranet e Internet",
      "Aceita uso de domínio",
      "Sistema DHCP",
      "Criptografia de ponta a ponta",
      "Monitoramento de tensão",
    ],
    specs: [
      { name: "Alimentação", value: "12V" },
      { name: "Consumo", value: "70 mAh" },
    ],
  },
  {
    id: 11,
    title: "RMV02",
    category: "Receptora",
    features: [
      "Cabo serial",
      "Display de análise e teclado",
      "Capacidade: 4.000 contas",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "O RMV02 oferece um visor para acompanhamento de eventos em tempo real. Sua comunicação com o servidor é feita diretamente por cabo serial, garantindo uma integração eficiente. Além disso, é compatível com a ampliação de até 16 módulos externos, aumentando a capacidade de monitoramento conforme necessário.",
    feature: [
      "Cabo serial",
      "Capacidade: 4.000 contas",
      "Monitoramento contínuo da comunicação com o servidor",
      "Compatível com os formatos Ademco 685, Surgard e Dx Net",
    ],
    specs: [
      { name: "Alimentação", value: "12V" },
      { name: "Audível", value: "Buzzer para alertas sonoros." },
      {
        name: "Configuração",
        value: "Software Terminal",
      },
    ],
  },
  {
    id: 12,
    title: "RMV04",
    category: "Receptora",
    features: [
      "Cabo serial",
      "Display de análise e teclado",
      "Capacidade: 4.000 contas",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "O RMV04 oferece um visor e teclado para acompanhamento de eventos em tempo real, além de permitir o acesso ao histórico dos últimos 200 eventos. Sua comunicação com o servidor é feita diretamente por cabo serial, garantindo uma integração eficiente. Além disso, é compatível com a ampliação de até 16 módulos externos, aumentando a capacidade de monitoramento conforme necessário.",
    feature: [
      "Cabo serial",
      "Display de análise e teclado",
      "Capacidade: 4.000 contas",
      "Histórico na tela dos últimos 200 eventos",
      "Monitoramento contínuo da comunicação com o servidor",
      "Compatível com os formatos Ademco 685, Surgard e Dx Net",
    ],
    specs: [
      { name: "Alimentação", value: "12V" },
      { name: "Audível", value: "Buzzer para alertas sonoros." },
      {
        name: "Configuração",
        value: "Teclado integrado para ajustes rápidos e precisos.",
      },
    ],
  },
  {
    id: 13,
    title: "Repetidora",
    category: "Receptora",
    features: [
      "Retransmissão via rádio",
      "Expande área de monitoramento",
      "Máxima segurança",
    ],
    tagline: "Upgrade inteligente para sua central de alarme.",
    description:
      "A Repetidora DX recebe eventos via rádio de áreas remotas e distantes, retransmitindo-os diretamente para a base. Com isso, garante a segurança e evita falhas, ampliando a área de monitoramento e assegurando que os dados cheguem de forma confiável.",
    feature: [
      "Retransmissão de eventos via rádio",
      "Expande área de monitoramento",
      "Máxima segurança",
      "Formato Contact ID",
      "Eventos internos para controle",
      "Retransmite em vários canais",
    ],
    specs: [
      { name: "Alimentação", value: "12 volts" },
      { name: "Display", value: "Display integrado" },
      { name: "Configuração", value: "Configuração via software terminal" },
      { name: "Medição", value: "Medição de sinal do rádio do cliente" },
      { name: "Evento de bateria", value: "Bateria baixa" },
      { name: "Evento de auto-teste", value: "Auto-teste automático" },
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
