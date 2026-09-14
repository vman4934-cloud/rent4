import Link from "next/link";
import { categories } from "@/data/categories";
import { company, site } from "@/data/company";
import { formatPhoneHref } from "@/lib/format";
import { isPlaceholder } from "@/lib/placeholders";
import { Logo } from "@/components/layout/Logo";

const links = [
  { href: "/catalog", label: "Каталог" },
  { href: "/terms", label: "Условия аренды" },
  { href: "/delivery", label: "Доставка и оплата" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
  { href: "/privacy", label: "Политика конфиденциальности" },
];

export function Footer() {
  const phoneHref = formatPhoneHref(company.phone);
  const telegramHref = isPlaceholder(company.telegram) ? "" : company.telegram;

  return (
    <footer className="mt-auto border-t border-line bg-surface">
      <div className="container-site grid gap-8 py-10 md:grid-cols-4">
        <div className="space-y-3 md:col-span-1">
          <Logo />
          <p className="text-sm text-graphite-muted">
            Аренда инструмента и оборудования в {company.city}. Предварительный расчёт на сайте,
            условия подтверждает менеджер.
          </p>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-graphite">Каталог</p>
          <ul className="space-y-2 text-sm">
            {categories.map((category) => (
              <li key={category.id}>
                <Link href={`/catalog?category=${category.slug}`} className="hover:text-accent">
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-sm font-semibold text-graphite">Разделы</p>
          <ul className="space-y-2 text-sm">
            {links.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-accent">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2 text-sm">
          <p className="mb-3 font-semibold text-graphite">Контакты</p>
          <p>{company.address}</p>
          <p>{company.hours}</p>
          {phoneHref ? (
            <p>
              <a href={phoneHref} className="font-medium text-graphite hover:text-accent">
                {company.phone}
              </a>
            </p>
          ) : (
            <p>{company.phone}</p>
          )}
          {telegramHref ? (
            <p>
              <a href={telegramHref} className="hover:text-accent">
                Telegram
              </a>
            </p>
          ) : (
            <p>Telegram: {company.telegram}</p>
          )}
          <p>{company.email}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-site flex flex-col gap-2 py-4 text-xs text-graphite-muted sm:flex-row sm:justify-between">
          <p>
            {company.name}. {site.demoCatalogNotice}
          </p>
          <p>Доставка: рассчитывается менеджером.</p>
        </div>
      </div>
    </footer>
  );
}
