import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { faqItems } from "@/data/faq";
import { products } from "@/data/products";
import { Icon } from "@/components/Icon";
import { ButtonLink } from "@/components/ui";
import { HomeCatalog } from "@/components/home/HomeCatalog";
import { ProductVisual } from "@/components/media/ProductVisual";

const tasks = [
  { id: "perforatory", title: "Ремонт и демонтаж", subtitle: "Сверлить. Штробить. Разбирать.", product: "rent-10" },
  { id: "uplotnenie-i-beton", title: "Стройка и бетон", subtitle: "От основания до готового пола.", product: "rent-27" },
  { id: "generatory", title: "Электричество на объекте", subtitle: "Когда рядом нет розетки.", product: "rent-1" },
  { id: "klimat-i-sushka", title: "Сушка и обогрев", subtitle: "Для помещений и отделочных работ.", product: "rent-64" },
  { id: "moyushchie-pylesosy", title: "Уборка и химчистка", subtitle: "Чистые ковры, мебель и помещения.", product: "rent-62" },
  { id: "almaznoe-burenie-i-rezka", title: "Бурение и резка", subtitle: "Для точных и сложных задач.", product: "rent-33" },
];

export function HomeView() {
  return <>
    <section className="hero-section">
      <Image src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/rentgar-workshop.png`} alt="" fill priority sizes="100vw" className="hero-image" />
      <div className="hero-shade" />
      <div className="container-site hero-content">
        <div className="hero-eyebrow"><span />ПРОКАТ ОБОРУДОВАНИЯ · МОСКВА</div>
        <h1>Большие дела.<br />Без покупки<br /><span>инструмента.</span></h1>
        <p className="hero-description">Профессиональная техника для вашего проекта.<br className="hidden sm:block" /> Возьмите на нужный срок — от одних суток.</p>
        <div className="hero-actions"><ButtonLink href="/catalog" size="lg">Выбрать инструмент <Icon name="arrow" /></ButtonLink><ButtonLink href="#tasks" variant="ghost" size="lg" className="hero-secondary">Подобрать под задачу</ButtonLink></div>
        <div className="hero-facts"><span><Icon name="check" />Расчёт стоимости онлайн</span><span><Icon name="check" />Доставка или самовывоз</span></div>
      </div>
      <div className="hero-photo-note">ИНСТРУМЕНТ ДЛЯ ДЕЛА / RENTGAR<span>Иллюстрация</span></div>
    </section>
    <section className="benefits-strip" aria-label="Условия сервиса"><div className="container-site benefits-grid">
      <div><strong>{products.length}<span> моделей</span></strong><p>От перфоратора до генератора</p></div>
      <div><strong>от 1<span> суток</span></strong><p>Аренда на срок вашего проекта</p></div>
      <div><strong>{categories.length}<span> категорий</span></strong><p>Для ремонта, стройки и уборки</p></div>
      <Link href="/delivery"><Icon name="truck" width="32" height="32" /><div><strong className="!text-xl">До вашего объекта</strong><p>Условия доставки <span aria-hidden="true">↗</span></p></div></Link>
    </div></section>
    <section id="tasks" className="section-space container-site">
      <div className="section-heading"><div><p className="eyebrow">01 / НАЙДИТЕ СВОЙ ИНСТРУМЕНТ</p><h2>Что планируете сделать?</h2></div><Link href="/catalog" className="text-link">Все категории <Icon name="arrow" /></Link></div>
      <div className="task-grid">{tasks.map((task, i) => {
        const product = products.find(p => p.id === task.product)!;
        const count = products.filter(p => p.categoryId === task.id).length;
        return <Link href={`/catalog?category=${task.id}`} key={task.id} className="task-card"><span className="task-number">0{i + 1}</span><div className="task-copy"><h3>{task.title}</h3><p>{task.subtitle}</p><span className="task-count">{count} {count === 1 ? "модель" : count < 5 ? "модели" : "моделей"}<Icon name="arrow" width="17" /></span></div><div className="task-visual"><ProductVisual product={product} /></div></Link>;
      })}</div>
      <details className="all-categories"><summary>Ещё {categories.length - tasks.length} категорий <Icon name="plus" /></summary><div>{categories.filter(c => !tasks.some(t => t.id === c.id)).map(c => <Link key={c.id} href={`/catalog?category=${c.id}`}>{c.name}<Icon name="arrow" width="16" /></Link>)}</div></details>
    </section>
    <section className="equipment-section section-space"><div className="container-site"><div className="section-heading"><div><p className="eyebrow">02 / ПРОФЕССИОНАЛЬНЫЙ ИНСТРУМЕНТ</p><h2>Выберите. Рассчитайте. За дело.</h2></div><p className="section-description">Стоимость видна сразу.<br />Наличие на ваши даты подтвердит менеджер.</p></div><HomeCatalog /><div className="catalog-bottom"><p>Makita, Bosch Professional, Kärcher, TSS и другие бренды.</p><ButtonLink href="/catalog" variant="graphite">Смотреть все {products.length} моделей <Icon name="arrow" /></ButtonLink></div></div></section>
    <section className="section-space container-site"><div className="rental-story"><div className="rental-story-intro"><p className="eyebrow">03 / АРЕНДА БЕЗ ЛИШНИХ ШАГОВ</p><h2>Ваш проект.<br />Наш инструмент.</h2><p>Не нужно покупать технику ради одной задачи. Выберите срок, посмотрите расчёт и отправьте запрос на аренду.</p><ButtonLink href="/catalog" size="lg">С чего начнём? <Icon name="arrow" /></ButtonLink></div><ol className="rental-steps">{[
      ["Найдите инструмент", "Выберите оборудование под свою задачу. В карточке — модель, характеристики и ставка за сутки."],
      ["Укажите срок аренды", "Выберите дату, количество и срок. Калькулятор сразу покажет предварительную стоимость."],
      ["Согласуйте и получите", "Отправьте заявку. Менеджер подтвердит наличие, залог, комплектацию и способ получения."],
    ].map(([title, text], i) => <li key={title}><span>0{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div><Icon name={i === 2 ? "check" : "arrow"} /></li>)}</ol></div></section>
    <section className="project-banner"><div className="container-site"><div><p className="eyebrow">ДЛЯ ДОМА. ДЛЯ БРИГАДЫ. ДЛЯ ОБЪЕКТА.</p><h2>Задача на день?<br />Инструмент тоже.</h2><p>Берите оборудование на нужный срок.<br />А бюджет оставьте на сам проект.</p></div><div className="project-banner-action"><span className="big-arrow" aria-hidden="true">↗</span><ButtonLink href="/catalog" variant="graphite" size="lg">Рассчитать аренду <Icon name="arrow" /></ButtonLink><span>Без онлайн-оплаты при отправке заявки</span></div></div></section>
    <section className="section-space container-site faq-section"><div><p className="eyebrow">04 / ПЕРЕД НАЧАЛОМ РАБОТ</p><h2>Хорошие вопросы.<br />Понятные ответы.</h2><Link href="/terms" className="text-link mt-7">Все условия аренды <Icon name="arrow" /></Link></div><div className="faq-list">{faqItems.map(item => <details key={item.question}><summary>{item.question}<Icon name="plus" /></summary><p>{item.answer}</p></details>)}</div></section>
  </>;
}
