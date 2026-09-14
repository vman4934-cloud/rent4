import type { Metadata } from "next";
import { Suspense } from "react";
import { company } from "@/data/company";
import type { CatalogQuery } from "@/types/catalog";
import { CatalogClient } from "@/components/catalog/CatalogClient";

export const metadata: Metadata = {
  title: "Каталог",
  description: `Каталог аренды инструмента в ${company.city}. Поиск по названию и модели, фильтры по категории, бренду и цене за сутки.`,
};

export const dynamic = "force-dynamic";

function asQuery(searchParams: Record<string, string | string[] | undefined>): CatalogQuery {
  const pick = (key: string) => {
    const value = searchParams[key];
    return Array.isArray(value) ? value[0] : value;
  };
  return {
    q: pick("q") ?? "",
    category: pick("category") ?? "",
    brand: pick("brand") ?? "",
    min: pick("min") ?? "",
    max: pick("max") ?? "",
    sort: pick("sort") ?? "",
  };
}

export default async function CatalogPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const query = asQuery(await searchParams);
  return (
    <Suspense fallback={<p className="container-site py-10 text-graphite-muted">Загружаем каталог…</p>}>
      <CatalogClient initialQuery={query} />
    </Suspense>
  );
}
