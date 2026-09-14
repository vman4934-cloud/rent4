import { getCategory } from "@/data/categories";
import { products } from "@/data/products";
import type { CatalogQuery, Product, SortOption } from "@/types/catalog";

export const sortOptions: { value: SortOption; label: string }[] = [
  { value: "name-asc", label: "Название А–Я" },
  { value: "name-desc", label: "Название Я–А" },
  { value: "price-asc", label: "Сначала дешевле" },
  { value: "price-desc", label: "Сначала дороже" },
];

export function parseSort(value?: string): SortOption {
  if (
    value === "name-asc" ||
    value === "name-desc" ||
    value === "price-asc" ||
    value === "price-desc"
  ) {
    return value;
  }
  return "name-asc";
}

export function parsePrice(value?: string) {
  if (!value) return undefined;
  const amount = Number(value.replace(",", "."));
  if (!Number.isFinite(amount) || amount < 0) return undefined;
  return Math.floor(amount);
}

export function matchesQuery(product: Product, query: string) {
  const haystack = `${product.name} ${product.model} ${product.brand}`.toLowerCase();
  return haystack.includes(query.trim().toLowerCase());
}

export function filterProducts(query: CatalogQuery) {
  const search = query.q?.trim().toLowerCase() ?? "";
  const category = query.category?.trim() ?? "";
  const brand = query.brand?.trim() ?? "";
  const min = parsePrice(query.min);
  const max = parsePrice(query.max);
  const sort = parseSort(query.sort);

  let list = products.filter((product) => {
    if (search && !matchesQuery(product, search)) return false;
    if (category && product.categoryId !== category) return false;
    if (brand && product.brand !== brand) return false;
    if (min !== undefined && product.dailyRate < min) return false;
    if (max !== undefined && product.dailyRate > max) return false;
    return true;
  });

  list = [...list].sort((a, b) => {
    switch (sort) {
      case "name-desc":
        return b.name.localeCompare(a.name, "ru");
      case "price-asc":
        return a.dailyRate - b.dailyRate;
      case "price-desc":
        return b.dailyRate - a.dailyRate;
      default:
        return a.name.localeCompare(b.name, "ru");
    }
  });

  return {
    list,
    sort,
    category: category ? getCategory(category) : undefined,
    activeCount: Number(Boolean(search)) + Number(Boolean(category)) + Number(Boolean(brand)) + Number(min !== undefined) + Number(max !== undefined),
  };
}

export function similarProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
    .slice(0, limit);
}

export function buildCatalogSearch(query: CatalogQuery) {
  const params = new URLSearchParams();
  if (query.q) params.set("q", query.q);
  if (query.category) params.set("category", query.category);
  if (query.brand) params.set("brand", query.brand);
  if (query.min) params.set("min", query.min);
  if (query.max) params.set("max", query.max);
  if (query.sort && query.sort !== "name-asc") params.set("sort", query.sort);
  const text = params.toString();
  return text ? `/catalog?${text}` : "/catalog";
}
