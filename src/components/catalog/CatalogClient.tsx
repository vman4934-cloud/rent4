"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { categories } from "@/data/categories";
import { brands } from "@/data/products";
import { buildCatalogSearch, filterProducts, sortOptions } from "@/lib/catalog";
import type { CatalogQuery } from "@/types/catalog";
import { ProductCard } from "@/components/catalog/ProductCard";
import { Button, buttonClass } from "@/components/ui";

function queryFromParams(params: URLSearchParams): CatalogQuery {
  return {
    q: params.get("q") ?? "",
    category: params.get("category") ?? "",
    brand: params.get("brand") ?? "",
    min: params.get("min") ?? "",
    max: params.get("max") ?? "",
    sort: params.get("sort") ?? "",
  };
}

function Filters({
  value,
  onChange,
  onSubmit,
  idPrefix,
}: {
  value: CatalogQuery;
  onChange: (patch: Partial<CatalogQuery>) => void;
  onSubmit?: () => void;
  idPrefix: string;
}) {
  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.();
      }}
    >
      <div>
        <label htmlFor={`${idPrefix}-q`} className="mb-1 block text-sm font-medium text-graphite">
          Поиск
        </label>
        <input
          id={`${idPrefix}-q`}
          value={value.q ?? ""}
          onChange={(event) => onChange({ q: event.target.value })}
          className="w-full rounded-lg border border-line px-3 py-2.5 text-sm"
          placeholder="Название или модель"
        />
      </div>
      <div>
        <label htmlFor={`${idPrefix}-category`} className="mb-1 block text-sm font-medium text-graphite">
          Категория
        </label>
        <select
          id={`${idPrefix}-category`}
          value={value.category ?? ""}
          onChange={(event) => onChange({ category: event.target.value })}
          className="w-full rounded-lg border border-line px-3 py-2.5 text-sm"
        >
          <option value="">Все категории</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor={`${idPrefix}-brand`} className="mb-1 block text-sm font-medium text-graphite">
          Бренд
        </label>
        <select
          id={`${idPrefix}-brand`}
          value={value.brand ?? ""}
          onChange={(event) => onChange({ brand: event.target.value })}
          className="w-full rounded-lg border border-line px-3 py-2.5 text-sm"
        >
          <option value="">Все бренды</option>
          {brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label htmlFor={`${idPrefix}-min`} className="mb-1 block text-sm font-medium text-graphite">
            Цена от, ₽
          </label>
          <input
            id={`${idPrefix}-min`}
            inputMode="numeric"
            value={value.min ?? ""}
            onChange={(event) => onChange({ min: event.target.value.replace(/[^\d]/g, "") })}
            className="w-full rounded-lg border border-line px-3 py-2.5 text-sm"
          />
        </div>
        <div>
          <label htmlFor={`${idPrefix}-max`} className="mb-1 block text-sm font-medium text-graphite">
            Цена до, ₽
          </label>
          <input
            id={`${idPrefix}-max`}
            inputMode="numeric"
            value={value.max ?? ""}
            onChange={(event) => onChange({ max: event.target.value.replace(/[^\d]/g, "") })}
            className="w-full rounded-lg border border-line px-3 py-2.5 text-sm"
          />
        </div>
      </div>
      {onSubmit ? (
        <Button type="submit" className="w-full">
          Показать
        </Button>
      ) : null}
    </form>
  );
}

export function CatalogClient({ initialQuery }: { initialQuery?: CatalogQuery }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = useMemo(() => {
    const fromUrl = queryFromParams(searchParams);
    const hasParams = [...searchParams.keys()].length > 0;
    return hasParams || !initialQuery ? fromUrl : initialQuery;
  }, [initialQuery, searchParams]);
  const result = useMemo(() => filterProducts(query), [query]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [draft, setDraft] = useState<CatalogQuery>(query);

  function applyQuery(next: CatalogQuery) {
    const href = buildCatalogSearch(next);
    router.replace(href, { scroll: false });
  }

  function patchLive(patch: Partial<CatalogQuery>) {
    applyQuery({ ...query, ...patch });
  }

  function reset() {
    setDraft({});
    router.replace(pathname, { scroll: false });
    setDrawerOpen(false);
  }

  return (
    <div className="container-site catalog-page">
      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">RENTGAR / ОБОРУДОВАНИЕ ДЛЯ ВАШЕЙ ЗАДАЧИ</p>
          <h1 className="text-3xl font-semibold">{result.category?.name ?? "Каталог оборудования"}</h1>
          <p className="mt-1 text-graphite-muted">
            {result.list.length} {result.list.length === 1 ? "позиция" : "позиций"} · наличие подтверждает менеджер
          </p>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className="lg:hidden"
            onClick={() => {
              setDraft(query);
              setDrawerOpen(true);
            }}
          >
            Фильтры
          </Button>
          <label className="sr-only" htmlFor="catalog-sort">
            Сортировка
          </label>
          <select
            id="catalog-sort"
            value={result.sort}
            onChange={(event) => patchLive({ sort: event.target.value })}
            className="rounded-lg border border-line bg-white px-3 py-2.5 text-sm"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[16rem_1fr]">
        <aside className="hidden rounded-xl border border-line bg-white p-4 lg:block">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-graphite">Фильтры</h2>
            {result.activeCount > 0 ? (
              <button type="button" className="text-sm text-accent" onClick={reset}>
                Сбросить
              </button>
            ) : null}
          </div>
          <Filters idPrefix="desktop" value={query} onChange={patchLive} />
        </aside>

        <div>
          {result.list.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {result.list.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-line bg-white p-10 text-center">
              <h2 className="text-xl font-semibold">Ничего не найдено</h2>
              <p className="mt-2 text-graphite-muted">
                Измените запрос, категорию, бренд или диапазон цены за сутки.
              </p>
              <button type="button" className={buttonClass("primary", "md", "mt-4")} onClick={reset}>
                Сбросить фильтры
              </button>
            </div>
          )}
        </div>
      </div>

      {drawerOpen ? (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-graphite/40"
            aria-label="Закрыть фильтры"
            onClick={() => setDrawerOpen(false)}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="filters-title"
            className="absolute inset-y-0 right-0 flex w-[min(100%,24rem)] flex-col bg-white shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-line px-4 py-3">
              <h2 id="filters-title" className="font-semibold">
                Фильтры
              </h2>
              <button type="button" className="text-sm text-accent" onClick={() => setDrawerOpen(false)}>
                Закрыть
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <Filters
                idPrefix="mobile"
                value={draft}
                onChange={(patch) => setDraft((current) => ({ ...current, ...patch }))}
                onSubmit={() => {
                  applyQuery(draft);
                  setDrawerOpen(false);
                }}
              />
              <button type="button" className="mt-3 text-sm text-graphite-muted" onClick={reset}>
                Сбросить все
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
