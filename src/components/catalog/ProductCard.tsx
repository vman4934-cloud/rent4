import Link from "next/link";
import { getCategory } from "@/data/categories";
import { formatRub } from "@/lib/format";
import type { Product } from "@/types/catalog";
import { ProductVisual } from "@/components/media/ProductVisual";
import { buttonClass } from "@/components/ui";

export function ProductCard({ product }: { product: Product }) {
  const category = getCategory(product.categoryId);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-line bg-white transition hover:border-accent/40 hover:shadow-sm">
      <Link href={`/catalog/${product.slug}`} className="block aspect-4/3 bg-surface">
        <ProductVisual product={product} />
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-3.5">
        <div className="space-y-1">
          {category ? (
            <p className="text-[11px] font-medium uppercase tracking-wide text-graphite-muted">
              {category.name}
            </p>
          ) : null}
          <h3 className="text-base font-semibold leading-snug text-graphite">
            <Link href={`/catalog/${product.slug}`} className="hover:text-accent">
              {product.name}
            </Link>
          </h3>
          <p className="text-sm text-graphite-muted">
            {product.brand} · {product.model}
          </p>
          <ul className="text-sm text-graphite-muted">
            {product.shortSpecs.map((spec) => (
              <li key={spec}>{spec}</li>
            ))}
          </ul>
        </div>
        <div className="mt-auto space-y-2">
          <p className="text-lg font-semibold text-graphite">
            {formatRub(product.dailyRate)}
            <span className="ml-1 text-sm font-normal text-graphite-muted">/ сутки</span>
          </p>
          <p className="text-xs text-graphite-muted">
            Демо-цена · демо-наличие: {product.stock} шт.
          </p>
          <Link href={`/catalog/${product.slug}`} className={buttonClass("primary", "sm", "w-full")}>
            В аренду
          </Link>
        </div>
      </div>
    </article>
  );
}
