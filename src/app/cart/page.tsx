import type { Metadata } from "next";
import { CartClient } from "@/components/cart/CartClient";

export const metadata: Metadata = {
  title: "Корзина и заявка",
  description: "Проверьте срок аренды, предварительную стоимость и отправьте заявку. Наличие подтверждает менеджер.",
};

export default function CartPage() {
  return <CartClient />;
}
