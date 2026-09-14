import Link from "next/link";
import { categories } from "@/data/categories";
import { company, site } from "@/data/company";
import { faqItems } from "@/data/faq";
import { products } from "@/data/products";
import { deliveryTariff } from "@/data/tariffs";
import { ButtonLink, SectionHeading } from "@/components/ui";
import { ProductCard } from "@/components/catalog/ProductCard";

const steps = [
  {
    title: "Выбор",
    text: "Найдите инструмент в каталоге, откройте карточку и посмотрите характеристики.",
  },
  {
    title: "Заявка",
    text: "Укажите дату, срок и количество, добавьте позиции в корзину и отправьте форму.",
  },
  {
    title: "Подтверждение",
    text: "Менеджер проверяет наличие и сообщает окончательные условия.",
  },
  {
    title: "Получение",
    text: "Самовывоз с пункта выдачи или доставка — как согласуете в заявке.",
  },
  {
    title: "Возврат",
    text: "Верните оборудование в согласованный срок. Залог учитывается отдельно.",
  },
];

export function HomeView() {
  const popular = products.filter((item) => item.popular);

  return (
    <>
      <section className="border-b border-line bg-white">
        <div className="container-site grid items-center gap-10 py-12 lg:grid-cols-[1.1fr_0.9fr] lg:py-16">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-accent">
              Прокат для ремонта и стройки
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-5xl">
              Аренда инструмента и оборудования в {company.city}
            </h1>
            <p className="max-w-xl text-lg text-graphite-muted">
              Подберите позицию в каталоге, посчитайте предварительную стоимость за сутки и
              оставьте заявку. Работаем по зоне: {company.serviceArea}.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/catalog" variant="graphite" size="lg">
                Выбрать инструмент
              </ButtonLink>
              <ButtonLink href="/cart#inquiry" variant="ghost" size="lg">
                Оставить заявку
              </ButtonLink>
            </div>
            <p className="text-sm text-graphite-muted">{site.managerConfirmNotice}</p>
          </div>
          <div className="rounded-2xl bg-surface p-6">
            <p className="mb-4 text-sm font-medium text-graphite-muted">Категории каталога</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/catalog?category=${category.slug}`}
                  className="rounded-xl border border-line bg-white p-4 transition hover:border-accent/40"
                >
                  <span className="block font-semibold text-graphite">{category.name}</span>
                  <span className="mt-1 block text-sm text-graphite-muted">{category.description}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="container-site space-y-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Витрина"
              title="Популярные инструменты"
              description="Подборка из демонстрационного каталога. Состав и цены нужно заменить данными компании."
            />
            <ButtonLink href="/catalog" variant="ghost">
              Весь каталог
            </ButtonLink>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {popular.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-site space-y-8">
          <SectionHeading eyebrow="Сценарий" title="Порядок аренды" />
          <ol className="grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <li key={step.title} className="rounded-xl border border-line bg-white p-4">
                <p className="text-sm font-semibold text-accent">0{index + 1}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-graphite-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-surface py-14">
        <div className="container-site grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-semibold">Самовывоз</h2>
            <p className="mt-3 text-graphite-muted">{deliveryTariff.pickupNote}</p>
            <p className="mt-4 text-sm">
              {company.address}
              <br />
              {company.hours}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6">
            <h2 className="text-2xl font-semibold">Доставка</h2>
            <p className="mt-3 text-graphite-muted">{deliveryTariff.deliveryNote}</p>
            <p className="mt-4 text-sm font-medium text-graphite">
              Стоимость доставки: {deliveryTariff.note}.
            </p>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-site grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <SectionHeading
            eyebrow="Вопросы"
            title="Частые вопросы"
            description="Кратко о расчёте, залоге и заявке. Детали — на страницах условий и доставки."
          />
          <div className="divide-y divide-line rounded-2xl border border-line bg-white">
            {faqItems.map((item) => (
              <details key={item.question} className="group p-5">
                <summary className="cursor-pointer list-none font-semibold text-graphite [&::-webkit-details-marker]:hidden">
                  {item.question}
                </summary>
                <p className="mt-2 text-sm leading-relaxed text-graphite-muted">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-graphite py-12 text-white">
        <div className="container-site grid gap-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-white">Контакты пункта выдачи</h2>
            <p className="mt-3 text-white/75">
              {company.address}. Зона обслуживания: {company.serviceArea}.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <ButtonLink href="/contacts" variant="primary">
              Все контакты
            </ButtonLink>
            <ButtonLink href="/catalog" variant="ghost">
              Выбрать инструмент
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
