export const SEO_CONFIG = {
  title: "Evandro Jorge - Motorista Particular Premium em São Paulo",
  description:
    "Motorista particular premium com padrão Uber Black em São Paulo. Serviços de transporte executivo, aeroportos, eventos. Conforto, segurança e pontualidade garantidos.",
  keywords:
    "motorista particular São Paulo, motorista executivo SP, Uber Black, transporte executivo, motorista profissional",
  author: "Evandro Jorge",
  url: "https://evandro-motorista.vercel.app",
  image: "/evandro-profile.png",
  phone: "+55 11 99765-4713",
  email: "contato@evandrojorge.com",
  location: "São Paulo, SP, Brasil",
};

export const generateMetaTags = () => {
  return {
    "og:title": SEO_CONFIG.title,
    "og:description": SEO_CONFIG.description,
    "og:image": SEO_CONFIG.image,
    "og:url": SEO_CONFIG.url,
    "og:type": "website",
    "twitter:card": "summary_large_image",
    "twitter:title": SEO_CONFIG.title,
    "twitter:description": SEO_CONFIG.description,
    "twitter:image": SEO_CONFIG.image,
  };
};

export const generateSchemaMarkup = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Evandro Jorge - Motorista Particular Premium",
    description: SEO_CONFIG.description,
    image: SEO_CONFIG.image,
    telephone: SEO_CONFIG.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    url: SEO_CONFIG.url,
    sameAs: [
      "https://wa.me/5511997654713",
      "https://www.instagram.com/motorista_evandro/",
    ],
    priceRange: "$$",
    areaServed: "São Paulo, SP",
    serviceType: ["Transporte Executivo", "Serviço de Motorista", "Transporte Premium"],
  };
};
