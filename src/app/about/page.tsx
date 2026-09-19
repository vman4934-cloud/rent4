import type { Metadata } from "next";
import { products } from "@/data/products";
import { categories } from "@/data/categories";
import { ButtonLink } from "@/components/ui";
import { Icon } from "@/components/Icon";
export const metadata: Metadata = { title: "О RentGar", description: "RentGar — инструмент для дела. Каталог аренды оборудования для ремонта, стройки и уборки в Москве." };
export default function AboutPage() {
  return <article className="container-site content-page"><p className="eyebrow">О RENTGAR</p><h1>Инструмент нужен.<br />Покупать необязательно.</h1><p className="text-lg text-graphite-muted">Ремонт квартиры, работа на стройке или уборка после отделки — у каждой задачи свой инструмент. RentGar помогает выбрать оборудование и рассчитать аренду на нужный срок.</p><section className="space-y-4"><h2>{products.length} моделей. {categories.length} категорий.</h2><p>В каталоге — перфораторы, генераторы, оборудование для бетона, осушители, моющие пылесосы и другая профессиональная техника. Модели, характеристики и предварительная стоимость собраны в одном месте.</p></section><section className="space-y-4"><h2>Понятно до начала работ</h2><p>Вы выбираете дату, срок и количество. Сайт рассчитывает аренду, а менеджер подтверждает наличие, залог и комплектацию. Доставку или самовывоз можно указать в заявке.</p></section><div className="mt-7"><ButtonLink href="/catalog" size="lg">Найти свой инструмент <Icon name="arrow" /></ButtonLink></div></article>;
}
