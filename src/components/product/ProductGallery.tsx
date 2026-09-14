"use client";

import { useState } from "react";
import type { Product } from "@/types/catalog";
import { ProductVisual } from "@/components/media/ProductVisual";
import { cn } from "@/lib/cn";

export function ProductGallery({ product }: { product: Product }) {
  const frames = [
    { id: "main", label: "Общий вид" },
    { id: "kit", label: "Комплектация" },
    { id: "detail", label: "Деталь" },
  ];
  const [active, setActive] = useState(frames[0].id);

  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="aspect-4/3">
          <ProductVisual product={product} className={cn(active !== "main" && "opacity-90")} />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {frames.map((frame) => (
          <button
            key={frame.id}
            type="button"
            onClick={() => setActive(frame.id)}
            aria-pressed={active === frame.id}
            className={cn(
              "overflow-hidden rounded-xl border bg-surface text-left",
              active === frame.id ? "border-accent" : "border-line",
            )}
          >
            <div className="aspect-4/3">
              <ProductVisual product={product} />
            </div>
            <span className="block px-2 py-1 text-xs text-graphite-muted">{frame.label}</span>
          </button>
        ))}
      </div>
      <p className="text-xs text-graphite-muted">
        Сейчас показаны заглушки. Замените поле `image` у товара на файл из папки public.
      </p>
    </div>
  );
}
