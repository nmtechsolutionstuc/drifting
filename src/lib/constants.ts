export const BRAND = {
  name: "Drifting",
  claim: "Tu estilo, tu flow.",
  claimSub: "Ropa unisex.",
  whatsappDigits: "5493865666433",
  whatsappDisplay: "3865 66-64-33",
  instagramHandle: "drifting.ind",
  instagramUrl: "https://www.instagram.com/drifting.ind",
  location: "Juan Bautista Alberdi, Tucumán",
  mapsUrl:
    "https://maps.apple.com/place?coordinate=-27.581420,-65.612918&name=Mi%20ubicaci%C3%B3n&map=explore",
};

export function whatsappLink(message: string) {
  return `https://wa.me/${BRAND.whatsappDigits}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#coleccion", label: "Colección" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#talles", label: "Guía de talles" },
  { href: "#faq", label: "Preguntas" },
];
