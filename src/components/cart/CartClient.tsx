"use client";

import { useMemo, useState, type FormEvent } from "react";
import { site } from "@/data/company";
import { deliveryTariff, rentalRules } from "@/data/tariffs";
import { resolveCart } from "@/lib/cart-logic";
import { todayISO } from "@/lib/dates";
import { formatRub, pluralDays } from "@/lib/format";
import { validateInquiry, type InquiryFieldErrors } from "@/lib/inquiry";
import type { Fulfillment } from "@/types/catalog";
import { useCart } from "@/components/providers/CartProvider";
import { Button, Field } from "@/components/ui";
import { ProductVisual } from "@/components/media/ProductVisual";

type FormState = {
  name: string;
  phone: string;
  fulfillment: Fulfillment | "";
  address: string;
  comment: string;
  consent: boolean;
};

const emptyForm: FormState = {
  name: "",
  phone: "",
  fulfillment: "",
  address: "",
  comment: "",
  consent: false,
};

export function CartClient() {
  const { items, ready, updateItem, removeItem, clear } = useCart();
  const { priced, totals } = useMemo(() => resolveCart(items), [items]);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [errors, setErrors] = useState<InquiryFieldErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [demoMode, setDemoMode] = useState(false);
  const minDate = todayISO();

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus("submitting");
    setErrors({});
    setServerMessage("");
    const validation = validateInquiry({ ...form, items });
    if (!validation.ok) {
      setErrors(validation.errors);
      setStatus("error");
      setServerMessage("Проверьте поля формы.");
      return;
    }
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/api/inquiry`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          items,
        }),
      });
      const contentType = response.headers.get("content-type") ?? "";
      if (!contentType.includes("application/json")) {
        throw new Error("Inquiry service unavailable");
      }
      const data = (await response.json()) as {
        ok?: boolean;
        demo?: boolean;
        message?: string;
        errors?: InquiryFieldErrors;
      };
      if (!response.ok || !data.ok) {
        setErrors(data.errors ?? {});
        setStatus("error");
        setServerMessage(data.message ?? "Проверьте поля формы.");
        return;
      }
      setDemoMode(Boolean(data.demo));
      setStatus("success");
      setServerMessage(data.message ?? "Заявка принята.");
      if (!data.demo) {
        setForm(emptyForm);
        clear();
      }
    } catch {
      setStatus("error");
      setServerMessage("Не удалось отправить заявку. Ваш выбор сохранён — попробуйте ещё раз позже.");
    }
  }

  if (!ready) {
    return <p className="container-site py-10 text-graphite-muted">Загружаем корзину…</p>;
  }

  return (
    <div className="container-site grid gap-8 py-8 lg:grid-cols-[1.1fr_0.9fr]">
      <section>
        <p className="eyebrow">ПОЧТИ ГОТОВО / RENTGAR</p>
        <h1 className="text-4xl font-bold">Ваша заявка</h1>
        <p className="mt-3 text-sm text-graphite-muted">Проверьте срок и количество. Наличие, залог и получение согласуем при подтверждении.</p>
        {priced.length === 0 ? (
          <p className="mt-6 rounded-xl border border-dashed border-line bg-white p-8 text-graphite-muted">
            Корзина пуста. Выберите инструмент в каталоге, укажите срок и нажмите «Оформить заявку».
          </p>
        ) : (
          <ul className="mt-6 space-y-4">
            {priced.map((row) => (
              <li key={row.product.id} className="rounded-xl border border-line bg-white p-4">
                <div className="flex gap-4">
                  <div className="h-24 w-28 overflow-hidden rounded-lg bg-surface">
                    <ProductVisual product={row.product} />
                  </div>
                  <div className="min-w-0 flex-1 space-y-3">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-graphite">{row.product.name}</p>
                        <p className="text-sm text-graphite-muted">
                          {row.product.brand} · {row.product.model}
                        </p>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-danger"
                        onClick={() => removeItem(row.product.id)}
                      >
                        Удалить
                      </button>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-3">
                      <Field label="Начало" htmlFor={`start-${row.product.id}`}>
                        <input
                          id={`start-${row.product.id}`}
                          type="date"
                          min={minDate}
                          value={row.item.startDate}
                          onChange={(event) =>
                            updateItem(row.product.id, {
                              startDate: event.target.value < minDate ? minDate : event.target.value,
                            })
                          }
                        />
                      </Field>
                      <Field label="Суток" htmlFor={`days-${row.product.id}`}>
                        <input
                          id={`days-${row.product.id}`}
                          type="number"
                          min={1}
                          max={365}
                          value={row.item.days}
                          onChange={(event) =>
                            updateItem(row.product.id, { days: Number(event.target.value) })
                          }
                        />
                      </Field>
                      <Field label="Единиц" htmlFor={`qty-${row.product.id}`}>
                        <input
                          id={`qty-${row.product.id}`}
                          type="number"
                          min={1}
                          max={row.product.stock ?? rentalRules.maxQuantity}
                          value={row.item.quantity}
                          onChange={(event) =>
                            updateItem(row.product.id, { quantity: Number(event.target.value) })
                          }
                        />
                      </Field>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm">
                      <p>
                        Аренда ({pluralDays(row.item.days)}):{" "}
                        <span className="font-semibold">{formatRub(row.rental)}</span>
                      </p>
                      <p>
                        Залог: <span className="font-semibold">{formatRub(row.deposit)}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      <aside className="space-y-4">
        <div className="rounded-2xl border border-line bg-white p-5">
          <h2 className="text-lg font-semibold">Предварительный итог</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4">
              <dt>Аренда</dt>
              <dd className="font-semibold text-graphite">{formatRub(totals.rental)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Залог</dt>
              <dd className="font-semibold text-graphite">{formatRub(totals.deposit)}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt>Доставка</dt>
              <dd className="font-semibold text-graphite">{deliveryTariff.note}</dd>
            </div>
          </dl>
          <p className="mt-3 text-xs text-graphite-muted">{site.managerConfirmNotice}</p>
        </div>

        <form
          id="inquiry"
          onSubmit={onSubmit}
          className="scroll-mt-28 space-y-4 rounded-2xl border border-line bg-white p-5"
        >
          <h2 className="text-lg font-semibold">Заявка</h2>
          <Field label="Имя" htmlFor="name" error={errors.name}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              aria-invalid={Boolean(errors.name)}
              onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
            />
          </Field>
          <Field label="Телефон" htmlFor="phone" error={errors.phone}>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              aria-invalid={Boolean(errors.phone)}
              onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
            />
          </Field>
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-graphite">Способ получения</legend>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="fulfillment"
                checked={form.fulfillment === "pickup"}
                onChange={() => setForm((current) => ({ ...current, fulfillment: "pickup" }))}
              />
              Самовывоз
            </label>
            <label className="flex items-center gap-2 text-sm">
              <input
                type="radio"
                name="fulfillment"
                checked={form.fulfillment === "delivery"}
                onChange={() => setForm((current) => ({ ...current, fulfillment: "delivery" }))}
              />
              Доставка
            </label>
            {errors.fulfillment ? (
              <p className="text-sm text-danger" role="alert">
                {errors.fulfillment}
              </p>
            ) : null}
          </fieldset>
          {form.fulfillment === "delivery" ? (
            <Field label="Адрес доставки" htmlFor="address" error={errors.address}>
              <input
                id="address"
                name="address"
                value={form.address}
                aria-invalid={Boolean(errors.address)}
                onChange={(event) => setForm((current) => ({ ...current, address: event.target.value }))}
              />
            </Field>
          ) : null}
          <Field label="Комментарий" htmlFor="comment" hint="Необязательно">
            <textarea
              id="comment"
              name="comment"
              rows={3}
              value={form.comment}
              onChange={(event) => setForm((current) => ({ ...current, comment: event.target.value }))}
            />
          </Field>
          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={(event) => setForm((current) => ({ ...current, consent: event.target.checked }))}
            />
            <span>
              Согласен на обработку персональных данных. Подробности — в{" "}
              <a href="/privacy" className="text-accent underline">
                политике конфиденциальности
              </a>
              .
            </span>
          </label>
          {errors.consent ? (
            <p className="text-sm text-danger" role="alert">
              {errors.consent}
            </p>
          ) : null}
          {errors.items ? (
            <p className="text-sm text-danger" role="alert">
              {errors.items}
            </p>
          ) : null}
          <Button type="submit" className="w-full" disabled={status === "submitting" || priced.length === 0}>
            {status === "submitting" ? "Отправляем…" : "Отправить заявку"}
          </Button>
          {status === "success" ? (
            <p
              className={`rounded-lg p-3 text-sm ${demoMode ? "bg-accent-soft text-graphite" : "bg-teal-50 text-success"}`}
              role="status"
            >
              {serverMessage}
            </p>
          ) : null}
          {status === "error" && serverMessage ? (
            <p className="text-sm text-danger" role="alert">
              {serverMessage}
            </p>
          ) : null}
          <p className="text-xs text-graphite-muted">
            Онлайн-оплата не требуется. Отправка заявки не означает бронирование оборудования.
          </p>
        </form>
      </aside>
    </div>
  );
}
