import type { Metadata } from "next";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/format";
import { isPlaceholder } from "@/lib/placeholders";
import { ButtonLink } from "@/components/ui";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Адрес пункта выдачи, телефон и график ${company.name} в ${company.city}.`,
};

export default function ContactsPage() {
  const phoneHref = formatPhoneHref(company.phone);
  const telegramHref = isPlaceholder(company.telegram) ? "" : company.telegram;
  const emailHref = isPlaceholder(company.email) ? "" : `mailto:${company.email}`;

  return (
    <article className="container-site max-w-3xl space-y-6 py-10">
      <h1 className="text-3xl font-semibold">Контакты</h1>
      <div className="space-y-3 rounded-2xl border border-line bg-white p-6">
        <p>
          <span className="block text-sm text-graphite-muted">Пункт выдачи</span>
          <span className="text-lg font-medium text-graphite">{company.address}</span>
        </p>
        <p>
          <span className="block text-sm text-graphite-muted">Зона обслуживания</span>
          {company.serviceArea}
        </p>
        <p>
          <span className="block text-sm text-graphite-muted">График</span>
          {company.hours}
        </p>
        <p>
          <span className="block text-sm text-graphite-muted">Телефон</span>
          {phoneHref ? (
            <a href={phoneHref} className="text-lg font-semibold text-graphite hover:text-accent">
              {company.phone}
            </a>
          ) : (
            <span>{company.phone}</span>
          )}
        </p>
        <p>
          <span className="block text-sm text-graphite-muted">Telegram</span>
          {telegramHref ? (
            <a href={telegramHref} className="hover:text-accent">
              {company.telegram}
            </a>
          ) : (
            <span>{company.telegram}</span>
          )}
        </p>
        <p>
          <span className="block text-sm text-graphite-muted">Email</span>
          {emailHref ? (
            <a href={emailHref} className="hover:text-accent">
              {company.email}
            </a>
          ) : (
            <span>{company.email}</span>
          )}
        </p>
      </div>
      <p className="text-sm text-graphite-muted">
        Координаты для карты и схема проезда — данные для заполнения владельцем.
      </p>
      <div className="flex flex-wrap gap-3">
        <ButtonLink href="/catalog" variant="graphite">
          Выбрать инструмент
        </ButtonLink>
        <ButtonLink href="/cart#inquiry" variant="ghost">
          Оставить заявку
        </ButtonLink>
      </div>
    </article>
  );
}
