export const goaAreas = [
  { slug: "panjim", name: "Panjim", description: "Capital city, riverside & Latin Quarter" },
  { slug: "calangute", name: "Calangute", description: "Queen of Beaches, nightlife & shacks" },
  { slug: "baga", name: "Baga", description: "Beach parties, water sports & clubs" },
  { slug: "anjuna", name: "Anjuna", description: "Flea market, beach & hippie vibe" },
  { slug: "candolim", name: "Candolim", description: "Quieter beach, resorts & dining" },
  { slug: "vagator", name: "Vagator", description: "Cliffs, sunset points & trance parties" },
  { slug: "margao", name: "Margao", description: "South Goa hub, culture & markets" },
  { slug: "colva", name: "Colva", description: "Long beach, South Goa" },
  { slug: "benaulim", name: "Benaulim", description: "Serene South Goa beach" },
  { slug: "arambol", name: "Arambol", description: "North Goa hippie beach" },
] as const;

export type GoaAreaSlug = (typeof goaAreas)[number]["slug"];
