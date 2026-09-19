import type { Product } from "@/types/catalog";
import { ProductVisual } from "@/components/media/ProductVisual";

export function ProductGallery({ product }: { product: Product }) {
  return (
    <div className="space-y-3">
      <div className="overflow-hidden rounded-2xl border border-line bg-surface">
        <div className="aspect-4/3">
          <ProductVisual product={product} sizes="(max-width: 1024px) 100vw, 50vw" />
        </div>
      </div>
      <p className="text-xs text-graphite-muted">
        Фото модели. Комплектацию согласуем при подтверждении заявки.
        {product.id === "rent-31" && " На фото показан привод вибратора."}
      </p>
    </div>
  );
}
