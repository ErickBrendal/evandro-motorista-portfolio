export const SITE = {
  name: "Evandro Jorge",
  role: "Motorista Particular Executivo",
  city: "São Paulo, SP",
  url: "https://evandro-motorista.vercel.app",
  phoneDisplay: "(11) 99765-4713",
  phoneE164: "+5511997654713",
  whatsappNumber: "5511997654713",
  instagramHandle: "@motorista_evandro",
  instagramUrl: "https://www.instagram.com/motorista_evandro/",
  developerUrl: "https://erick-almeida-portfolio.vercel.app/",
};

export const DEFAULT_WA_MESSAGE =
  "Olá Evandro! Vi seu site e gostaria de um orçamento para uma viagem.";

export function whatsappLink(message: string = DEFAULT_WA_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const NAV_ITEMS = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Orçamento", href: "#orcamento" },
];
