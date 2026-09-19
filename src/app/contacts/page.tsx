import type { Metadata } from "next";
import { company } from "@/data/company";
import { formatPhoneHref } from "@/lib/format";
import { isPlaceholder } from "@/lib/placeholders";
import { ButtonLink } from "@/components/ui";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = { title: "Контакты", description: "RentGar — аренда оборудования в Москве. Информация о получении и заявках." };
export default function ContactsPage() {
  const phone = formatPhoneHref(company.phone);
  return <article className="container-site content-page"><p className="eyebrow">RENTGAR / МОСКВА</p><h1>Начнём с вашей задачи.</h1><p className="text-lg text-graphite-muted">Выберите оборудование, укажите срок и соберите заявку. Стоимость аренды можно рассчитать прямо на сайте.</p><section className="space-y-4"><h2 className="flex items-center gap-3"><Icon name="pin" />Москва</h2><p>Получение — по предварительному согласованию. Адрес пункта выдачи, время и условия доставки сообщаются при подтверждении заявки.</p>{phone && <p><a href={phone}>{company.phone}</a></p>}{!isPlaceholder(company.email) && <p><a href={`mailto:${company.email}`}>{company.email}</a></p>}{!isPlaceholder(company.telegram) && <p><a href={company.telegram}>Telegram</a></p>}{!phone && isPlaceholder(company.email) && <p className="text-sm text-graphite-muted">Контакты службы аренды готовятся к публикации.</p>}</section><div className="flex flex-wrap gap-3 mt-7"><ButtonLink href="/catalog" size="lg">Выбрать оборудование <Icon name="arrow" /></ButtonLink><ButtonLink href="/delivery" variant="ghost" size="lg">Как получить</ButtonLink></div></article>;
}
