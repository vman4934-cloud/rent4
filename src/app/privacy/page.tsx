import type { Metadata } from "next";
import { company } from "@/data/company";

export const metadata: Metadata = {
  title: "Политика конфиденциальности",
  description: "Как обрабатываются персональные данные, указанные в заявке на аренду.",
};

export default function PrivacyPage() {
  return (
    <article className="container-site max-w-3xl space-y-6 py-10">
      <h1 className="text-3xl font-semibold">Политика конфиденциальности</h1>
      <p className="text-graphite-muted">
        Документ-заготовка. Перед приёмом реальных заявок замените его текстом, согласованным с
        юристом, и укажите оператора персональных данных.
      </p>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Оператор</h2>
        <p>
          {company.legalName}. ИНН: {company.inn}. Контакт для обращений: {company.privacyEmail}.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Какие данные собираются</h2>
        <p>
          В заявке: имя, телефон, способ получения, адрес доставки при выборе доставки, комментарий и
          состав корзины. Согласие на обработку отмечается отдельным чекбоксом и не проставляется
          заранее.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Зачем нужны данные</h2>
        <p>
          Чтобы связаться с вами, подтвердить наличие инструмента и согласовать получение. Иные цели
          — данные для заполнения владельцем.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Хранение и передача</h2>
        <p>
          Если настроены переменные окружения, заявка может уйти в Telegram, на почту или на вебхук.
          Сроки хранения, уничтожение и передача третьим лицам — данные для заполнения владельцем.
        </p>
      </section>
    </article>
  );
}
