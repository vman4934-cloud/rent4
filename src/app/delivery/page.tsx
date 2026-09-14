import type { Metadata } from "next";
import { company } from "@/data/company";
import { deliveryTariff } from "@/data/tariffs";

export const metadata: Metadata = {
  title: "Доставка и оплата",
  description: "Самовывоз, доставка по зоне обслуживания и оплата аренды. Тариф доставки рассчитывается менеджером.",
};

export default function DeliveryPage() {
  return (
    <article className="container-site max-w-3xl space-y-6 py-10">
      <h1 className="text-3xl font-semibold">Доставка и оплата</h1>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Самовывоз</h2>
        <p>{deliveryTariff.pickupNote}</p>
        <p>
          Адрес: {company.address}
          <br />
          График: {company.hours}
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Доставка</h2>
        <p>{deliveryTariff.deliveryNote}</p>
        <p>
          Стоимость доставки: {deliveryTariff.note}. Чтобы включить автоматический тариф, задайте его
          в файле <code>src/data/tariffs.ts</code>.
        </p>
        <p>Зона обслуживания: {company.serviceArea}.</p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Оплата</h2>
        <p>
          Способы оплаты, предоплата и возврат залога — данные для заполнения владельцем. На сайте
          нет онлайн-оплаты: заявка только запрашивает расчёт и подтверждение.
        </p>
      </section>
    </article>
  );
}
