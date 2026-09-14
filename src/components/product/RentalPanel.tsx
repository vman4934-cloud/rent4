"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import { site } from "@/data/company";
import { rentalRules } from "@/data/tariffs";
import { priceItem } from "@/lib/cart-logic";
import { todayISO } from "@/lib/dates";
import { formatRub, pluralDays } from "@/lib/format";
import type { Product } from "@/types/catalog";
import { useCart } from "@/components/providers/CartProvider";
import { Button, Field } from "@/components/ui";

export function RentalPanel({ product }: { product: Product }) {
  const router = useRouter();
  const { addItem } = useCart();
  const [startDate, setStartDate] = useState(todayISO());
  const [days, setDays] = useState(rentalRules.minDays);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");
  const minDate = todayISO();

  const priced = useMemo(
    () => priceItem(product, { productId: product.id, startDate, days, quantity }),
    [days, product, quantity, startDate],
  );

  function commit(redirectToCart: boolean) {
    addItem({
      productId: product.id,
      startDate,
      days: priced.days,
      quantity: priced.quantity,
    });
    setMessage(
      redirectToCart
        ? "Позиция добавлена. Переходим к заявке."
        : "Позиция добавлена в корзину. Срок и количество можно изменить там.",
    );
    if (redirectToCart) {
      router.push("/cart#inquiry");
    }
  }

  return (
    <>
      <section className="rounded-2xl border border-line bg-white p-5">
        <p className="text-2xl font-semibold text-graphite">
          {formatRub(product.dailyRate)}
          <span className="ml-1 text-base font-normal text-graphite-muted">/ сутки</span>
        </p>
        <p className="mt-1 text-sm text-graphite">
          Залог: {formatRub(product.deposit)} за единицу
        </p>
        <p className="mt-1 text-xs text-graphite-muted">
          Демо-цена и демо-наличие: {product.stock} шт. Не оферта.
        </p>

        <div className="mt-5 space-y-4">
          <Field label="Дата начала" htmlFor="start-date">
            <input
              id="start-date"
              type="date"
              min={minDate}
              value={startDate}
              onChange={(event) => {
                const next = event.target.value;
                setStartDate(next < minDate ? minDate : next);
              }}
            />
          </Field>
          <Field label="Количество суток" htmlFor="days" hint={`Минимум ${rentalRules.minDays} сутки`}>
            <input
              id="days"
              type="number"
              min={rentalRules.minDays}
              max={rentalRules.maxDays}
              value={priced.days}
              onChange={(event) => setDays(Number(event.target.value))}
            />
          </Field>
          <Field label="Количество единиц" htmlFor="qty">
            <input
              id="qty"
              type="number"
              min={1}
              max={product.stock}
              value={priced.quantity}
              onChange={(event) => setQuantity(Number(event.target.value))}
            />
          </Field>
        </div>

        <div className="mt-5 space-y-1 rounded-xl bg-surface p-4 text-sm">
          <p className="flex justify-between gap-4">
            <span>Аренда ({pluralDays(priced.days)} × {priced.quantity} шт.)</span>
            <span className="font-semibold text-graphite">{formatRub(priced.rental)}</span>
          </p>
          <p className="flex justify-between gap-4">
            <span>Залог</span>
            <span className="font-semibold text-graphite">{formatRub(priced.deposit)}</span>
          </p>
          <p className="text-xs text-graphite-muted">
            Формула: ставка × сутки × единицы. Доставка рассчитывается менеджером.
          </p>
        </div>

        <div className="mt-4 hidden gap-2 lg:grid">
          <Button onClick={() => commit(false)}>Добавить в корзину</Button>
          <Button variant="ghost" onClick={() => commit(true)}>
            Быстрая заявка
          </Button>
        </div>
        {message ? (
          <p className="mt-3 text-sm text-success" role="status">
            {message}
          </p>
        ) : null}
        <p className="mt-3 text-xs text-graphite-muted">{site.managerConfirmNotice}</p>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white p-3 lg:hidden">
        <div className="container-site flex items-center gap-2">
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-semibold text-graphite">{formatRub(priced.rental)}</p>
            <p className="text-xs text-graphite-muted">аренда · залог {formatRub(priced.deposit)}</p>
          </div>
          <Button size="sm" onClick={() => commit(false)}>
            В корзину
          </Button>
          <Button size="sm" variant="ghost" onClick={() => commit(true)}>
            Заявка
          </Button>
        </div>
      </div>
    </>
  );
}
