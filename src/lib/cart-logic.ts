import { getProductById } from "@/data/products";
import { deliveryTariff, rentalRules } from "@/data/tariffs";
import { clampDays, clampQuantity, isDateNotPast, todayISO } from "@/lib/dates";
import type { CartItem, Product } from "@/types/catalog";

export const CART_STORAGE_KEY = "rent4.cart.v1";

export type PricedCartItem = {
  item: CartItem;
  product: Product;
  rental: number;
  deposit: number;
};

export type CartTotals = {
  rental: number;
  deposit: number;
  deliveryLabel: string;
  deliveryAmount: number | null;
};

export function normalizeCartItem(raw: Partial<CartItem>, stock?: number): CartItem | null {
  if (!raw.productId || typeof raw.productId !== "string") return null;
  const days = clampDays(Number(raw.days));
  const quantity = clampQuantity(Number(raw.quantity), stock ?? rentalRules.maxQuantity);
  const startDate = raw.startDate && isDateNotPast(raw.startDate) ? raw.startDate : todayISO();
  return {
    productId: raw.productId,
    days,
    quantity,
    startDate,
  };
}

export function priceItem(product: Product, item: CartItem) {
  const days = clampDays(item.days);
  const quantity = clampQuantity(item.quantity, product.stock);
  return {
    days,
    quantity,
    rental: product.dailyRate * days * quantity,
    deposit: product.deposit * quantity,
  };
}

export function resolveCart(items: CartItem[]) {
  const priced: PricedCartItem[] = [];
  const missing: string[] = [];

  for (const item of items) {
    const product = getProductById(item.productId);
    if (!product) {
      missing.push(item.productId);
      continue;
    }
    const normalized = normalizeCartItem(item, product.stock);
    if (!normalized) continue;
    const pricedValues = priceItem(product, normalized);
    priced.push({
      item: {
        ...normalized,
        days: pricedValues.days,
        quantity: pricedValues.quantity,
      },
      product,
      rental: pricedValues.rental,
      deposit: pricedValues.deposit,
    });
  }

  const totals: CartTotals = {
    rental: priced.reduce((sum, row) => sum + row.rental, 0),
    deposit: priced.reduce((sum, row) => sum + row.deposit, 0),
    deliveryLabel: deliveryTariff.note,
    deliveryAmount: deliveryTariff.enabled ? deliveryTariff.amount : null,
  };

  return { priced, totals, missing };
}

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, item) => sum + item.quantity, 0);
}
