export type CategoryId =
  "generatory"
  | "perforatory"
  | "shlifmashiny"
  | "dreli-i-shurupoverty"
  | "otboynye-molotki"
  | "shtroborezy-i-pylesosy"
  | "uplotnenie-i-beton"
  | "almaznoe-burenie-i-rezka"
  | "klimat-i-sushka"
  | "nasosy-i-motopompy"
  | "kompressory"
  | "svarka"
  | "izmerenie"
  | "moyushchie-pylesosy"
  | "plitkorezy"
  | "motobury"
  | "zatirochnye-mashiny";

export type ProductVisual =
  | "equipment"
  | "hammer-drill"
  | "grinder"
  | "driver"
  | "miter-saw"
  | "breaker"
  | "vacuum"
  | "mixer"
  | "compactor"
  | "scaffold"
  | "laser"
  | "generator"
  | "compressor"
  | "heater"
  | "mower"
  | "trimmer"
  | "tiller"
  | "disc"
  | "cable"
  | "tripod"
  | "chaser";

export type Category = {
  id: CategoryId;
  slug: CategoryId;
  name: string;
  shortName: string;
  description: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  model: string;
  brand: string;
  categoryId: CategoryId;
  shortSpecs: string[];
  description: string;
  specs: ProductSpec[];
  kit: string[];
  dailyRate: number;
  deposit: number | null;
  stock: number | null;
  popular: boolean;
  visual: ProductVisual;
  /** Путь к файлу в /public. Если пусто — показывается заглушка. */
  image?: string;
};

export type CartItem = {
  productId: string;
  quantity: number;
  startDate: string;
  days: number;
};

export type Fulfillment = "pickup" | "delivery";

export type InquiryPayload = {
  name: string;
  phone: string;
  fulfillment: Fulfillment;
  address: string;
  comment: string;
  consent: boolean;
  items: CartItem[];
};

export type SortOption = "name-asc" | "name-desc" | "price-asc" | "price-desc";

export type CatalogQuery = {
  q?: string;
  category?: string;
  brand?: string;
  min?: string;
  max?: string;
  sort?: string;
};
