import { getProductById } from "@/data/products";
import { normalizeCartItem, resolveCart } from "@/lib/cart-logic";
import { extractDigits } from "@/lib/format";
import type { CartItem, Fulfillment, InquiryPayload } from "@/types/catalog";

export type InquiryFieldErrors = Partial<Record<"name" | "phone" | "fulfillment" | "address" | "consent" | "items", string>>;

export type InquiryValidation =
  | { ok: true; payload: InquiryPayload }
  | { ok: false; errors: InquiryFieldErrors };

function asString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function parseItems(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];
  const items: CartItem[] = [];
  for (const row of value) {
    if (!row || typeof row !== "object") continue;
    const record = row as Partial<CartItem>;
    const product = record.productId ? getProductById(record.productId) : undefined;
    const normalized = normalizeCartItem(record, product?.stock);
    if (normalized) items.push(normalized);
  }
  return items;
}

export function validateInquiry(input: unknown): InquiryValidation {
  const source = input && typeof input === "object" ? (input as Record<string, unknown>) : {};
  const name = asString(source.name);
  const phone = asString(source.phone);
  const fulfillment = asString(source.fulfillment) as Fulfillment;
  const address = asString(source.address);
  const comment = asString(source.comment);
  const consent = source.consent === true;
  const items = parseItems(source.items);
  const errors: InquiryFieldErrors = {};

  if (name.length < 2) {
    errors.name = "Укажите имя — не менее двух символов.";
  }
  const digits = extractDigits(phone);
  if (digits.length < 10) {
    errors.phone = "Укажите телефон: не менее 10 цифр.";
  }
  if (fulfillment !== "pickup" && fulfillment !== "delivery") {
    errors.fulfillment = "Выберите самовывоз или доставку.";
  }
  if (fulfillment === "delivery" && address.length < 5) {
    errors.address = "Для доставки укажите адрес.";
  }
  if (!consent) {
    errors.consent = "Нужно согласие на обработку персональных данных.";
  }
  if (items.length === 0) {
    errors.items = "Добавьте хотя бы один инструмент.";
  } else {
    const { missing } = resolveCart(items);
    if (missing.length > 0) {
      errors.items = "В заявке есть позиция, которой нет в каталоге.";
    }
  }

  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    payload: {
      name,
      phone,
      fulfillment,
      address: fulfillment === "delivery" ? address : "",
      comment,
      consent,
      items,
    },
  };
}
