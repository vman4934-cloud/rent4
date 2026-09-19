"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState, type FormEvent } from "react";
import { categories } from "@/data/categories";
import { useCart } from "@/components/providers/CartProvider";
import { Logo } from "@/components/layout/Logo";
import { Icon } from "@/components/Icon";
export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { count } = useCart();
  const [query, setQuery] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const searchId = useId();
  useEffect(() => { setMenuOpen(false); }, [pathname]);
  useEffect(() => {
    function onKey(event: KeyboardEvent) { if (event.key === "Escape") setMenuOpen(false); }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);
  function onSearch(event: FormEvent) {
    event.preventDefault();
    router.push(query.trim() ? `/catalog?q=${encodeURIComponent(query.trim())}` : "/catalog");
    setMenuOpen(false);
  }
  return <header className="site-header"><div className="container-site header-main"><Logo /><Link href="/catalog" className="catalog-button"><Icon name="grid" />Каталог</Link><form onSubmit={onSearch} role="search" className="header-search"><label htmlFor={searchId} className="sr-only">Поиск инструмента</label><input id={searchId} value={query} onChange={e => setQuery(e.target.value)} placeholder="Какой инструмент нужен?" /><button type="submit" aria-label="Найти инструмент"><Icon name="search" /></button></form><Link href="/cart" className="cart-link"><Icon name="bag" /><span className="hidden sm:inline">Моя заявка</span><span className="cart-count" aria-label={`Позиций в заявке: ${count}`}>{count}</span></Link><button type="button" onClick={() => setMenuOpen(!menuOpen)} className="mobile-menu-button" aria-label={menuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={menuOpen} aria-controls="mobile-menu"><Icon name={menuOpen ? "close" : "menu"} /></button></div>
    <nav className="container-site desktop-nav" aria-label="Основные разделы"><div>{categories.slice(0, 5).map(c => <Link key={c.id} href={`/catalog?category=${c.id}`}>{c.name === "УШМ" ? "Шлифмашины" : c.name}</Link>)}</div><Link href="/about">О RentGar <Icon name="arrow" width="14" /></Link></nav>
    {menuOpen && <div id="mobile-menu" className="mobile-nav container-site"><form onSubmit={onSearch} className="flex border border-line rounded-lg overflow-hidden"><label htmlFor={`${searchId}-mobile`} className="sr-only">Поиск инструмента</label><input id={`${searchId}-mobile`} className="p-3 min-w-0 flex-1" value={query} onChange={e => setQuery(e.target.value)} placeholder="Название или модель" /><button className="px-4" aria-label="Найти"><Icon name="search" /></button></form><Link href="/catalog" onClick={() => setMenuOpen(false)} className="font-bold">Весь каталог →</Link>{categories.map(c => <Link key={c.id} onClick={() => setMenuOpen(false)} href={`/catalog?category=${c.id}`}>{c.name}</Link>)}<Link href="/delivery" onClick={() => setMenuOpen(false)}>Доставка и самовывоз</Link><Link href="/contacts" onClick={() => setMenuOpen(false)}>Контакты</Link></div>}</header>;
}
