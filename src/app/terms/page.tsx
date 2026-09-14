import type { Metadata } from "next";
import { company } from "@/data/company";
import { rentalRules } from "@/data/tariffs";

export const metadata: Metadata = {
  title: "Условия аренды",
  description: "Порядок аренды инструмента: срок, залог, подтверждение менеджером и возврат.",
};

export default function TermsPage() {
  return (
    <article className="container-site max-w-3xl space-y-6 py-10">
      <h1 className="text-3xl font-semibold">Условия аренды</h1>
      <p className="text-graphite-muted">
        Текст ниже описывает работу сайта. Юридические условия договора, реквизиты и ответственность
        сторон — данные для заполнения владельцем.
      </p>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Как оформить аренду</h2>
        <ol className="list-decimal space-y-2 pl-5 text-graphite-muted">
          <li>Выберите инструмент в каталоге.</li>
          <li>Укажите дату начала, срок в сутках и количество единиц.</li>
          <li>Добавьте позиции в корзину и отправьте заявку.</li>
          <li>Дождитесь подтверждения наличия и условий менеджером.</li>
          <li>Получите оборудование самовывозом или доставкой — как согласуете.</li>
        </ol>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Срок и расчёт</h2>
        <p>
          Минимальный срок — {rentalRules.minDays} сутки. Предварительная стоимость аренды: ставка за
          сутки × количество суток × количество единиц. Залог показывается отдельно и не входит в
          строку аренды.
        </p>
        <p>
          Цены и остатки в каталоге демонстрационные, пока владелец не подставит свои тарифы. Сайт не
          является офертой.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Залог и состояние</h2>
        <p>
          Размер залога на карточке — демо-значение. Фактический залог, фиксация комплектации и
          состояния при выдаче и возврате — данные для заполнения владельцем и подтверждение
          менеджером.
        </p>
      </section>
      <section className="space-y-3">
        <h2 className="text-xl font-semibold">Получение и возврат</h2>
        <p>
          Пункт выдачи: {company.address}. График: {company.hours}. Возврат — в согласованный срок.
          Просрочка, повреждение и расходники регулируются договором — данные для заполнения
          владельцем.
        </p>
      </section>
    </article>
  );
}
