import type { Category } from "@/types/catalog";

export const categories: Category[] = [
  {
    id: "elektroinstrument",
    slug: "elektroinstrument",
    name: "Электроинструмент",
    shortName: "Электроинструмент",
    description:
      "Перфораторы, шлифмашины, пилы, шуруповёрты и другой сетевой и аккумуляторный инструмент.",
  },
  {
    id: "stroitelnoe-oborudovanie",
    slug: "stroitelnoe-oborudovanie",
    name: "Строительное оборудование",
    shortName: "Строительное",
    description:
      "Бетоносмесители, уплотнение, вышки, нивелиры и техника для площадки.",
  },
  {
    id: "silovaya-tehnika",
    slug: "silovaya-tehnika",
    name: "Силовая техника",
    shortName: "Силовая",
    description: "Генераторы, компрессоры и тепловые пушки для объекта.",
  },
  {
    id: "sadovaya-tehnika",
    slug: "sadovaya-tehnika",
    name: "Садовая техника",
    shortName: "Садовая",
    description: "Газонокосилки, триммеры и мотоблоки для участка и благоустройства.",
  },
  {
    id: "prinadlezhnosti",
    slug: "prinadlezhnosti",
    name: "Принадлежности",
    shortName: "Принадлежности",
    description: "Диски, удлинители, штативы и оснастка к арендному оборудованию.",
  },
];

export function getCategory(idOrSlug: string) {
  return categories.find((item) => item.id === idOrSlug || item.slug === idOrSlug);
}
