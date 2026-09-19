import type { Category } from "@/types/catalog";

export const categories: Category[] = [
  {
    "id": "generatory",
    "slug": "generatory",
    "name": "Генераторы",
    "shortName": "Генераторы",
    "description": "Генераторы: выбор оборудования для аренды."
  },
  {
    "id": "perforatory",
    "slug": "perforatory",
    "name": "Перфораторы",
    "shortName": "Перфораторы",
    "description": "Перфораторы: выбор оборудования для аренды."
  },
  {
    "id": "shlifmashiny",
    "slug": "shlifmashiny",
    "name": "УШМ",
    "shortName": "УШМ",
    "description": "УШМ: выбор оборудования для аренды."
  },
  {
    "id": "dreli-i-shurupoverty",
    "slug": "dreli-i-shurupoverty",
    "name": "Дрели и шуруповёрты",
    "shortName": "Дрели и шуруповёрты",
    "description": "Дрели и шуруповёрты: выбор оборудования для аренды."
  },
  {
    "id": "otboynye-molotki",
    "slug": "otboynye-molotki",
    "name": "Отбойные молотки",
    "shortName": "Отбойные молотки",
    "description": "Отбойные молотки: выбор оборудования для аренды."
  },
  {
    "id": "shtroborezy-i-pylesosy",
    "slug": "shtroborezy-i-pylesosy",
    "name": "Штроборезы и пылесосы",
    "shortName": "Штроборезы и пылесосы",
    "description": "Штроборезы и пылесосы: выбор оборудования для аренды."
  },
  {
    "id": "uplotnenie-i-beton",
    "slug": "uplotnenie-i-beton",
    "name": "Уплотнение и бетон",
    "shortName": "Уплотнение и бетон",
    "description": "Уплотнение и бетон: выбор оборудования для аренды."
  },
  {
    "id": "almaznoe-burenie-i-rezka",
    "slug": "almaznoe-burenie-i-rezka",
    "name": "Алмазное и резка",
    "shortName": "Алмазное и резка",
    "description": "Алмазное и резка: выбор оборудования для аренды."
  },
  {
    "id": "klimat-i-sushka",
    "slug": "klimat-i-sushka",
    "name": "Климат и сушка",
    "shortName": "Климат и сушка",
    "description": "Климат и сушка: выбор оборудования для аренды."
  },
  {
    "id": "nasosy-i-motopompy",
    "slug": "nasosy-i-motopompy",
    "name": "Насосы и мотопомпы",
    "shortName": "Насосы и мотопомпы",
    "description": "Насосы и мотопомпы: выбор оборудования для аренды."
  },
  {
    "id": "kompressory",
    "slug": "kompressory",
    "name": "Компрессоры и пневматика",
    "shortName": "Компрессоры и пневматика",
    "description": "Компрессоры и пневматика: выбор оборудования для аренды."
  },
  {
    "id": "svarka",
    "slug": "svarka",
    "name": "Сварка и освещение",
    "shortName": "Сварка и освещение",
    "description": "Сварка и освещение: выбор оборудования для аренды."
  },
  {
    "id": "izmerenie",
    "slug": "izmerenie",
    "name": "Доступ и измерение",
    "shortName": "Доступ и измерение",
    "description": "Доступ и измерение: выбор оборудования для аренды."
  },
  {
    "id": "moyushchie-pylesosy",
    "slug": "moyushchie-pylesosy",
    "name": "Моющие пылесосы",
    "shortName": "Моющие пылесосы",
    "description": "Моющие пылесосы: выбор оборудования для аренды."
  },
  {
    "id": "plitkorezy",
    "slug": "plitkorezy",
    "name": "Плиткорезы электрические",
    "shortName": "Плиткорезы электрические",
    "description": "Плиткорезы электрические: выбор оборудования для аренды."
  },
  {
    "id": "motobury",
    "slug": "motobury",
    "name": "Мотобуры и земляные работы",
    "shortName": "Мотобуры и земляные работы",
    "description": "Мотобуры и земляные работы: выбор оборудования для аренды."
  },
  {
    "id": "zatirochnye-mashiny",
    "slug": "zatirochnye-mashiny",
    "name": "Затирочные машины",
    "shortName": "Затирочные машины",
    "description": "Затирочные машины: выбор оборудования для аренды."
  }
];

export function getCategory(idOrSlug: string) {
  return categories.find((item) => item.id === idOrSlug || item.slug === idOrSlug);
}
