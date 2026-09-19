"use client";
import { useState } from "react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/catalog/ProductCard";
const selections = [
  { label: "Для ремонта", ids: [10, 18, 23, 25] },
  { label: "Для стройки", ids: [27, 30, 32, 67] },
  { label: "Свет и тепло", ids: [1, 2, 39, 40] },
  { label: "Уборка и сушка", ids: [62, 64, 37, 26] },
];
export function HomeCatalog() {
  const [active, setActive] = useState(0);
  return <><div className="selection-tabs" aria-label="Оборудование по задаче">{selections.map((s,i) => <button type="button" key={s.label} onClick={() => setActive(i)} aria-pressed={active === i} className={active === i ? "active" : ""}>{s.label}</button>)}</div><div className="home-products">{selections[active].ids.map(id => products.find(p => p.id === `rent-${id}`)).filter(p => p !== undefined).map(product => <ProductCard key={product.id} product={product} />)}</div></>;
}
