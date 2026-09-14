"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { categories } from "@/data/categories";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/format";
import { isPlaceholder } from "@/lib/placeholders";
import { useCart } from "@/components/providers/CartProvider";
import { Logo } from "@/components/layout/Logo";
import { buttonClass } from "@/components/ui";

const nav = [
  { href: "/catalog", label: "Каталог" },
  { href: "/delivery", label: "Доставка и оплата" },
  { href: "/terms", label: "Условия аренды" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
];

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { count } = useCart();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const catalogRef = useRef<HTMLDivElement>(null);
  const searchId = useId();
  const phoneHref = formatPhoneHref(company.phone);

  useEffect(() => {
    setMenuOpen(false);
    setCatalogOpen(false);
  }, [pathname]);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setCatalogOpen(false);
      }
    }
    function onClick(event: MouseEvent) {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        setCatalogOpen(false);
      }
    }
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  function onSearch(event: FormEvent) {
    event.preventDefault();
    const value = query.trim();
    router.push(value ? `/catalog?q=${encodeURIComponent(value)}` : "/catalog");
    setMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container-site flex items-center gap-3 py-3">
        <Logo />

        <div className="relative hidden lg:block" ref={catalogRef}>
          <button
            type="button"
            className={buttonClass("graphite", "md")}
            aria-expanded={catalogOpen}
            aria-haspopup="true"
            onClick={() => setCatalogOpen((open) => !open)}
          >
            Каталог
            <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
              <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
          {catalogOpen ? (
            <div
              role="menu"
              className="absolute left-0 top-[calc(100%+0.5rem)] z-50 w-72 rounded-xl border border-line bg-white p-2 shadow-lg"
            >
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/catalog?category=${category.slug}`}
                  role="menuitem"
                  className="block rounded-lg px-3 py-2 text-sm text-graphite hover:bg-surface"
                >
                  {category.name}
                </Link>
              ))}
              <Link
                href="/catalog"
                className="mt-1 block rounded-lg px-3 py-2 text-sm font-semibold text-accent hover:bg-accent-soft"
              >
                Весь каталог
              </Link>
            </div>
          ) : null}
        </div>

        <form onSubmit={onSearch} className="hidden min-w-0 flex-1 md:block" role="search">
          <label htmlFor={searchId} className="sr-only">
            Поиск по названию и модели
          </label>
          <div className="flex overflow-hidden rounded-lg border border-line bg-white focus-within:border-accent">
            <input
              id={searchId}
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Название или модель"
              className="min-w-0 flex-1 px-3 py-2.5 text-sm text-graphite"
            />
            <button type="submit" className="px-3 text-sm font-semibold text-accent hover:text-accent-hover">
              Найти
            </button>
          </div>
        </form>

        <div className="ml-auto flex items-center gap-2">
          {phoneHref ? (
            <a href={phoneHref} className="hidden text-right lg:block">
              <span className="block text-sm font-semibold text-graphite">{company.phone}</span>
              <span className="block text-xs text-graphite-muted">звонок по тарифу оператора</span>
            </a>
          ) : (
            <p className="hidden text-right text-sm text-graphite lg:block">{company.phone}</p>
          )}

          <Link href="/cart" className={buttonClass("ghost", "md", "relative")}>
            Корзина
            <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-[11px] text-white">
              {count}
            </span>
          </Link>

          <button
            type="button"
            className={buttonClass("ghost", "md", "lg:hidden")}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? "Закрыть" : "Меню"}
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <div className="container-site space-y-4 py-4">
            <form onSubmit={onSearch} role="search">
              <label htmlFor={`${searchId}-mobile`} className="sr-only">
                Поиск по названию и модели
              </label>
              <div className="flex overflow-hidden rounded-lg border border-line">
                <input
                  id={`${searchId}-mobile`}
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Название или модель"
                  className="min-w-0 flex-1 px-3 py-2.5 text-sm"
                />
                <button type="submit" className="px-3 text-sm font-semibold text-accent">
                  Найти
                </button>
              </div>
            </form>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-graphite-muted">Категории</p>
              <div className="grid gap-1">
                {categories.map((category) => (
                  <Link
                    key={category.id}
                    href={`/catalog?category=${category.slug}`}
                    className="rounded-lg px-2 py-2 text-graphite hover:bg-surface"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <nav className="grid gap-1" aria-label="Разделы сайта">
              {nav.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-lg px-2 py-2 text-graphite hover:bg-surface">
                  {item.label}
                </Link>
              ))}
            </nav>
            {!isPlaceholder(company.phone) && phoneHref ? (
              <a href={phoneHref} className="block font-semibold text-graphite">
                {company.phone}
              </a>
            ) : (
              <p className="text-sm text-graphite-muted">{company.phone}</p>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
