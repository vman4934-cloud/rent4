import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory } from "@/data/categories";
import { company } from "@/data/company";
import { getProductBySlug, products } from "@/data/products";
import { deliveryTariff } from "@/data/tariffs";
import { similarProducts } from "@/lib/catalog";
import { formatRub } from "@/lib/format";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProductGallery } from "@/components/product/ProductGallery";
import { RentalPanel } from "@/components/product/RentalPanel";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Инструмент не найден" };
  return {
    title: product.name,
    description: `${product.name} (${product.brand} ${product.model}) в аренду в ${company.city}. Предварительная ставка ${formatRub(product.dailyRate)} в сутки.`,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const category = getCategory(product.categoryId);
  const similar = similarProducts(product);

  return (
    <div className="container-site space-y-10 pb-28 pt-6 lg:pb-12">
      <nav aria-label="Хлебные крошки" className="text-sm text-graphite-muted">
        <ol className="flex flex-wrap gap-1">
          <li>
            <Link href="/" className="hover:text-accent">
              Главная
            </Link>
            <span aria-hidden="true"> / </span>
          </li>
          <li>
            <Link href="/catalog" className="hover:text-accent">
              Каталог
            </Link>
            <span aria-hidden="true"> / </span>
          </li>
          {category ? (
            <li>
              <Link href={`/catalog?category=${category.slug}`} className="hover:text-accent">
                {category.name}
              </Link>
              <span aria-hidden="true"> / </span>
            </li>
          ) : null}
          <li className="text-graphite">{product.name}</li>
        </ol>
      </nav>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ProductGallery product={product} />
        <div className="space-y-6">
          <header className="space-y-2">
            <p className="text-sm text-graphite-muted">
              {product.brand} · {product.model}
            </p>
            <h1 className="text-3xl font-semibold">{product.name}</h1>
            <p className="text-graphite-muted">{product.description}</p>
          </header>
          <RentalPanel product={product} />
        </div>
      </div>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-white p-5">
          <h2 className="text-xl font-semibold">Характеристики</h2>
          <dl className="mt-4 divide-y divide-line">
            {product.specs.map((spec) => (
              <div key={spec.label} className="flex justify-between gap-4 py-2 text-sm">
                <dt className="text-graphite-muted">{spec.label}</dt>
                <dd className="font-medium text-graphite">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="rounded-2xl border border-line bg-white p-5">
          <h2 className="text-xl font-semibold">Комплектация</h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-graphite-muted">
            {product.kit.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl bg-surface p-5">
        <h2 className="text-xl font-semibold">Получение и возврат</h2>
        <ul className="mt-3 space-y-2 text-sm text-graphite-muted">
          <li>{deliveryTariff.pickupNote}</li>
          <li>{deliveryTariff.deliveryNote}</li>
          <li>Возврат — в согласованный срок на пункт выдачи, если иное не подтвердит менеджер.</li>
          <li>Залог показывается отдельно и не входит в стоимость аренды.</li>
        </ul>
      </section>

      {similar.length > 0 ? (
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Похожие инструменты</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {similar.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
