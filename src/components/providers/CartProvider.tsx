"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { cartCount, CART_STORAGE_KEY, normalizeCartItem } from "@/lib/cart-logic";
import { getProductById } from "@/data/products";
import type { CartItem } from "@/types/catalog";

type CartContextValue = {
  items: CartItem[];
  ready: boolean;
  count: number;
  addItem: (item: CartItem) => void;
  updateItem: (productId: string, patch: Partial<CartItem>) => void;
  removeItem: (productId: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function readStoredItems() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    const items: CartItem[] = [];
    for (const row of parsed) {
      const product = row?.productId ? getProductById(String(row.productId)) : undefined;
      const normalized = normalizeCartItem(row, product?.stock);
      if (normalized && product) items.push(normalized);
    }
    return items;
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(readStoredItems());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items, ready]);

  const addItem = useCallback((item: CartItem) => {
    const product = getProductById(item.productId);
    const incoming = normalizeCartItem(item, product?.stock);
    if (!incoming || !product) return;
    setItems((current) => {
      const index = current.findIndex((row) => row.productId === incoming.productId);
      if (index === -1) return [...current, incoming];
      const existing = current[index];
      const merged = normalizeCartItem(
        {
          ...existing,
          ...incoming,
          quantity: existing.quantity + incoming.quantity,
        },
        product.stock,
      );
      if (!merged) return current;
      return current.map((row, rowIndex) => (rowIndex === index ? merged : row));
    });
  }, []);

  const updateItem = useCallback((productId: string, patch: Partial<CartItem>) => {
    setItems((current) =>
      current.flatMap((row) => {
        if (row.productId !== productId) return [row];
        const product = getProductById(productId);
        const next = normalizeCartItem({ ...row, ...patch }, product?.stock);
        return next ? [next] : [];
      }),
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setItems((current) => current.filter((row) => row.productId !== productId));
  }, []);

  const clear = useCallback(() => setItems([]), []);

  const value = useMemo(
    () => ({
      items,
      ready,
      count: cartCount(items),
      addItem,
      updateItem,
      removeItem,
      clear,
    }),
    [addItem, clear, items, ready, removeItem, updateItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart должен вызываться внутри CartProvider");
  }
  return context;
}
