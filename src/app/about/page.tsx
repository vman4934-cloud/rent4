import type { Metadata } from "next";
import { company } from "@/data/company";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "О компании",
  description: `Аренда строительного инструмента в ${company.city}. Каталог, предварительный расчёт и заявка.`,
};

export default function AboutPage() {
  return (
    <article className="container-site max-w-3xl space-y-6 py-10">
      <h1 className="text-3xl font-semibold">О компании</h1>
      <p>
        {company.name} — сервис аренды строительного инструмента и оборудования в {company.city}.
        Сайт помогает выбрать позицию, посчитать предварительную стоимость и оставить заявку.
      </p>
      <p className="text-graphite-muted">
        История компании, год основания, парк техники и условия для юридических лиц — данные для
        заполнения владельцем. Отзывы и рейтинги на сайте не публикуются.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-graphite-muted">
        <li>Юридическое название: {company.legalName}</li>
        <li>ИНН: {company.inn}</li>
        <li>Зона обслуживания: {company.serviceArea}</li>
      </ul>
      <ButtonLink href="/catalog" variant="graphite">
        Выбрать инструмент
      </ButtonLink>
    </article>
  );
}
