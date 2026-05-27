export type Product = {
  slug: string;
  model: string;
  tagline: string;
  area: string;
  areaMax: number;
  weight: string;
  steel: string;
  type: "Livre Posição" | "Embutir / Inserto";
  highlights: string[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "tl-700",
    model: "TL 700",
    tagline: "Entrada da linha, robustez de quem é grande.",
    area: "até 40 m²",
    areaMax: 40,
    weight: "45 kg",
    steel: "3,00 mm",
    type: "Livre Posição",
    highlights: ["Dupla combustão", "Vidro autolimpante Schott Robax®", "Compacta e eficiente"],
  },
  {
    slug: "tl-800",
    model: "TL 800",
    tagline: "Intermediária com base industrial de meia polegada.",
    area: "até 45 m²",
    areaMax: 45,
    weight: "85 kg",
    steel: "4,75 mm / 12,7 mm",
    type: "Livre Posição",
    highlights: ["Base de fogo 12,7 mm", "Vedação Inconel 1260 °C", "Refratários inclusos"],
  },
  {
    slug: "tl-1000",
    model: "TL 1000",
    tagline: "A mais versátil — tampo preto ou inox escovado.",
    area: "até 55 m²",
    areaMax: 55,
    weight: "100 kg",
    steel: "4,75 mm / 12,7 mm",
    type: "Livre Posição",
    highlights: ["Tampo opcional em inox 304", "Pronta para ventilação forçada", "Dupla combustão"],
  },
  {
    slug: "tl-2000",
    model: "TL 2000",
    tagline: "Visor ampliado e ventilação forçada de fábrica.",
    area: "até 85 m²",
    areaMax: 85,
    weight: "110 kg",
    steel: "4,75 mm / 12,7 mm",
    type: "Livre Posição",
    highlights: ["Dois ventiladores independentes", "Vidro ampliado", "Consumo 40–60 W"],
  },
  {
    slug: "tl-3000",
    model: "TL 3000",
    tagline: "Alta capacidade para grandes ambientes.",
    area: "até 110 m²",
    areaMax: 110,
    weight: "133 kg",
    steel: "4,75 mm / 12,7 mm",
    type: "Livre Posição",
    highlights: ["Aceita lenhas até 46 cm", "Ventilação forçada de fábrica", "Inércia térmica extrema"],
  },
  {
    slug: "tl-4000",
    model: "TL 4000",
    tagline: "Inserto sob medida para nichos de alvenaria.",
    area: "embutir",
    areaMax: 120,
    weight: "—",
    steel: "Aço inox / carbono",
    type: "Embutir / Inserto",
    highlights: ["Manta cerâmica 38 mm", "Ventoinhas integradas", "Sob medida para arquitetura"],
  },
];

export function recommendByArea(m2: number): Product {
  if (m2 <= 40) return PRODUCTS[0];
  if (m2 <= 45) return PRODUCTS[1];
  if (m2 <= 55) return PRODUCTS[2];
  if (m2 <= 85) return PRODUCTS[3];
  return PRODUCTS[4];
}
