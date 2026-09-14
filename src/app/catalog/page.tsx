import type { Metadata } from "next";
import { Suspense } from "react";
import { company } from "@/data/company";
import { CatalogClient } from "@/components/catalog/CatalogClient";

export const metadata: Metadata = {
  title: "Каталог",
  description: `Каталог аренды инструмента в ${company.city}. Поиск по названию и модели, фильтры по категории, бренду и цене за сутки.`,
};

export default function CatalogPage() {
  return (
    <Suspense fallback={<p className="container-site py-10 text-graphite-muted">Загружаем каталог…</p>}>
      <CatalogClient />
    </Suspense>
  );
}
