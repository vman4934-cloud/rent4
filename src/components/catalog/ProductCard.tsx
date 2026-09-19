import Link from "next/link";
import { formatRub } from "@/lib/format";
import type { Product } from "@/types/catalog";
import { ProductVisual } from "@/components/media/ProductVisual";
import { Icon } from "@/components/Icon";
export function ProductCard({ product }: { product: Product }) {
  return <article className="product-card"><Link href={`/catalog/${product.slug}`} className="product-card-visual" aria-label={`${product.name} ${product.brand} ${product.model}`}><span className="product-brand">{product.brand}</span><ProductVisual product={product} /></Link><div className="product-card-body"><p className="product-kind">{product.name}</p><h3><Link href={`/catalog/${product.slug}`}>{product.brand} {product.model}</Link></h3><ul className="product-quick-specs" aria-label="Основные характеристики">{product.shortSpecs.map((spec) => <li key={spec}>{spec}</li>)}</ul><p className="product-availability"><span />Наличие на ваши даты — по запросу</p><div className="product-card-bottom"><div className="product-price">{formatRub(product.dailyRate)}<span>/ сутки</span></div><Link className="product-card-action" href={`/catalog/${product.slug}`}>Рассчитать аренду<Icon name="arrow" width="18" /></Link></div></div></article>;
}
