import type { Product } from "@/types/catalog";

// Public catalog fields only. Provenance and selection rules: docs/catalog-import.md.
export const products: Product[] = [
  {
    "id": "rent-1",
    "slug": "generatory-1",
    "name": "Инверторный бензогенератор",
    "model": "TI 3200",
    "brand": "FUBAG",
    "categoryId": "generatory",
    "shortSpecs": [
      "2,8 кВт",
      "230 В",
      "Бак 7,8 л"
    ],
    "description": "Инверторный бензогенератор FUBAG TI 3200 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Номинальная мощность",
        "value": "2,8 кВт"
      },
      {
        "label": "Максимальная мощность",
        "value": "3,2 кВт"
      },
      {
        "label": "Выходное напряжение",
        "value": "230 В, 1 фаза"
      },
      {
        "label": "Частота тока",
        "value": "50 Гц"
      },
      {
        "label": "Двигатель",
        "value": "4-тактный, 212 см³"
      },
      {
        "label": "Топливо",
        "value": "Бензин АИ-92"
      },
      {
        "label": "Объём бака",
        "value": "7,8 л"
      },
      {
        "label": "Запуск",
        "value": "Ручной"
      },
      {
        "label": "Масса",
        "value": "39 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 900,
    "deposit": null,
    "stock": null,
    "popular": true,
    "visual": "generator",
    "image": "/products/rent-1.jpg"
  },
  {
    "id": "rent-2",
    "slug": "generatory-2",
    "name": "Бензогенератор 6 кВт",
    "model": "SGG 6000EHNA Duplex",
    "brand": "TSS",
    "categoryId": "generatory",
    "shortSpecs": [
      "6 кВт",
      "230 В",
      "Бак 25 л"
    ],
    "description": "Бензогенератор 6 кВт TSS SGG 6000EHNA Duplex в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Номинальная мощность",
        "value": "6 кВт"
      },
      {
        "label": "Максимальная мощность",
        "value": "6,5 кВт"
      },
      {
        "label": "Выходное напряжение",
        "value": "230 В, 1 фаза"
      },
      {
        "label": "Двигатель",
        "value": "192F, 420 см³"
      },
      {
        "label": "Мощность двигателя",
        "value": "11 кВт / 15 л. с."
      },
      {
        "label": "Топливо",
        "value": "Бензин"
      },
      {
        "label": "Объём бака",
        "value": "25 л"
      },
      {
        "label": "Масса",
        "value": "86 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1400,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "generator",
    "image": "/products/rent-2.jpg"
  },
  {
    "id": "rent-3",
    "slug": "generatory-3",
    "name": "Бензогенератор 8 кВт",
    "model": "SGG 8000EHNA",
    "brand": "TSS",
    "categoryId": "generatory",
    "shortSpecs": [
      "8 кВт",
      "230 В",
      "Электростартер"
    ],
    "description": "Бензогенератор 8 кВт TSS SGG 8000EHNA в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Номинальная мощность",
        "value": "8 кВт"
      },
      {
        "label": "Выходное напряжение",
        "value": "230 В, 1 фаза"
      },
      {
        "label": "Частота тока",
        "value": "50 Гц"
      },
      {
        "label": "Двигатель",
        "value": "192FB, 4-тактный"
      },
      {
        "label": "Мощность двигателя",
        "value": "12,5 кВт / 17 л. с."
      },
      {
        "label": "Топливо",
        "value": "Бензин"
      },
      {
        "label": "Объём бака",
        "value": "25 л"
      },
      {
        "label": "Запуск",
        "value": "Ручной / электростартер"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1900,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "generator",
    "image": "/products/rent-3.jpg"
  },
  {
    "id": "rent-4",
    "slug": "generatory-4",
    "name": "Бензогенератор 10 кВт",
    "model": "SGG 10000EHA",
    "brand": "TSS",
    "categoryId": "generatory",
    "shortSpecs": [
      "10 кВт",
      "230 В",
      "Бак 27,5 л"
    ],
    "description": "Бензогенератор 10 кВт TSS SGG 10000EHA в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Номинальная мощность",
        "value": "10 кВт"
      },
      {
        "label": "Максимальная мощность",
        "value": "11 кВт"
      },
      {
        "label": "Выходное напряжение",
        "value": "230 В, 1 фаза"
      },
      {
        "label": "Частота тока",
        "value": "50 Гц"
      },
      {
        "label": "Двигатель",
        "value": "Lifan 2V78F-2, 2 цилиндра"
      },
      {
        "label": "Топливо",
        "value": "Бензин"
      },
      {
        "label": "Объём бака",
        "value": "27,5 л"
      },
      {
        "label": "Запуск",
        "value": "Электростартер"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1700,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "generator",
    "image": "/products/rent-4.jpg"
  },
  {
    "id": "rent-10",
    "slug": "perforatory-10",
    "name": "Перфоратор SDS-plus 2–3 Дж",
    "model": "HR2470",
    "brand": "Makita",
    "categoryId": "perforatory",
    "shortSpecs": [
      "780 Вт",
      "SDS-plus",
      "Бетон до 24 мм"
    ],
    "description": "Перфоратор SDS-plus 2–3 Дж Makita HR2470 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "780 Вт"
      },
      {
        "label": "Патрон",
        "value": "SDS-plus"
      },
      {
        "label": "Режимы работы",
        "value": "Сверление, сверление с ударом, долбление"
      },
      {
        "label": "Диаметр сверления бетона",
        "value": "До 24 мм"
      },
      {
        "label": "Диаметр сверления стали",
        "value": "До 13 мм"
      },
      {
        "label": "Диаметр сверления дерева",
        "value": "До 32 мм"
      },
      {
        "label": "Частота вращения",
        "value": "0–1 100 об/мин"
      },
      {
        "label": "Частота ударов",
        "value": "0–4 500 уд/мин"
      },
      {
        "label": "Масса",
        "value": "2,9 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 600,
    "deposit": null,
    "stock": null,
    "popular": true,
    "visual": "hammer-drill",
    "image": "/products/rent-10.jpg"
  },
  {
    "id": "rent-11",
    "slug": "perforatory-11",
    "name": "Перфоратор SDS-plus 2–3 Дж",
    "model": "GBH 2-26 DRE",
    "brand": "Bosch Professional",
    "categoryId": "perforatory",
    "shortSpecs": [
      "800 Вт",
      "2,7 Дж",
      "SDS-plus"
    ],
    "description": "Перфоратор SDS-plus 2–3 Дж Bosch Professional GBH 2-26 DRE в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "800 Вт"
      },
      {
        "label": "Энергия удара",
        "value": "2,7 Дж"
      },
      {
        "label": "Патрон",
        "value": "SDS-plus"
      },
      {
        "label": "Диаметр сверления бетона",
        "value": "4–26 мм"
      },
      {
        "label": "Оптимальный диаметр в бетоне",
        "value": "8–16 мм"
      },
      {
        "label": "Частота вращения",
        "value": "0–900 об/мин"
      },
      {
        "label": "Частота ударов",
        "value": "0–4 000 уд/мин"
      },
      {
        "label": "Масса",
        "value": "2,9 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 700,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "hammer-drill",
    "image": "/products/rent-11.png"
  },
  {
    "id": "rent-12",
    "slug": "perforatory-12",
    "name": "Перфоратор SDS-max тяжёлый",
    "model": "HR4013C",
    "brand": "Makita",
    "categoryId": "perforatory",
    "shortSpecs": [
      "1 100 Вт",
      "8 Дж",
      "SDS-max"
    ],
    "description": "Перфоратор SDS-max тяжёлый Makita HR4013C в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 100 Вт"
      },
      {
        "label": "Энергия удара (EPTA)",
        "value": "8 Дж"
      },
      {
        "label": "Патрон",
        "value": "SDS-max"
      },
      {
        "label": "Диаметр сверления бетона",
        "value": "До 40 мм"
      },
      {
        "label": "Диаметр коронки",
        "value": "До 105 мм"
      },
      {
        "label": "Частота вращения",
        "value": "250–500 об/мин"
      },
      {
        "label": "Частота ударов",
        "value": "1 450–2 900 уд/мин"
      },
      {
        "label": "Масса",
        "value": "6,8 кг"
      },
      {
        "label": "Снижение вибрации",
        "value": "Система AVT"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "hammer-drill",
    "image": "/products/rent-12.png"
  },
  {
    "id": "rent-13",
    "slug": "shlifmashiny-13",
    "name": "Угловая шлифмашина 125 мм",
    "model": "GA5030",
    "brand": "Makita",
    "categoryId": "shlifmashiny",
    "shortSpecs": [
      "720 Вт",
      "Диск 125 мм",
      "11 000 об/мин"
    ],
    "description": "Угловая шлифмашина 125 мм Makita GA5030 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "720 Вт"
      },
      {
        "label": "Диаметр диска",
        "value": "125 мм"
      },
      {
        "label": "Частота вращения",
        "value": "11 000 об/мин"
      },
      {
        "label": "Питание",
        "value": "От электросети"
      },
      {
        "label": "Длина кабеля",
        "value": "2,5 м"
      },
      {
        "label": "Габариты",
        "value": "266 × 138 × 103 мм"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 600,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "grinder",
    "image": "/products/rent-13.jpg"
  },
  {
    "id": "rent-14",
    "slug": "shlifmashiny-14",
    "name": "Угловая шлифмашина 125 мм с регулировкой",
    "model": "WEV 15-125 Quick",
    "brand": "Metabo",
    "categoryId": "shlifmashiny",
    "shortSpecs": [
      "1 550 Вт",
      "Диск 125 мм",
      "Регулировка оборотов"
    ],
    "description": "Угловая шлифмашина 125 мм с регулировкой Metabo WEV 15-125 Quick в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 550 Вт"
      },
      {
        "label": "Диаметр диска",
        "value": "125 мм"
      },
      {
        "label": "Частота вращения",
        "value": "2 800–11 000 об/мин"
      },
      {
        "label": "Резьба шпинделя",
        "value": "M14"
      },
      {
        "label": "Крутящий момент",
        "value": "3,5 Н·м"
      },
      {
        "label": "Масса без кабеля",
        "value": "2,5 кг"
      },
      {
        "label": "Длина кабеля",
        "value": "4 м"
      },
      {
        "label": "Смена диска",
        "value": "Быстрозажимная гайка Metabo Quick"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 700,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "grinder",
    "image": "/products/rent-14.jpg"
  },
  {
    "id": "rent-16",
    "slug": "dreli-i-shurupoverty-16",
    "name": "Ударная дрель",
    "model": "HP2071",
    "brand": "Makita",
    "categoryId": "dreli-i-shurupoverty",
    "shortSpecs": [
      "1 010 Вт",
      "2 скорости",
      "Бетон до 20 мм"
    ],
    "description": "Ударная дрель Makita HP2071 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 010 Вт"
      },
      {
        "label": "Количество скоростей",
        "value": "2"
      },
      {
        "label": "Частота вращения",
        "value": "0–1 200 / 0–2 900 об/мин"
      },
      {
        "label": "Диаметр сверления бетона",
        "value": "До 20 мм"
      },
      {
        "label": "Диаметр сверления стали",
        "value": "До 16 мм на 1-й скорости"
      },
      {
        "label": "Диаметр сверления дерева",
        "value": "До 40 мм на 1-й скорости"
      },
      {
        "label": "Масса",
        "value": "2,6 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 600,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "driver",
    "image": "/products/rent-16.jpg"
  },
  {
    "id": "rent-17",
    "slug": "dreli-i-shurupoverty-17",
    "name": "Ударная дрель",
    "model": "GSB 13 RE",
    "brand": "Bosch Professional",
    "categoryId": "dreli-i-shurupoverty",
    "shortSpecs": [
      "600 Вт",
      "Патрон до 13 мм",
      "До 2 800 об/мин"
    ],
    "description": "Ударная дрель Bosch Professional GSB 13 RE в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "600 Вт"
      },
      {
        "label": "Напряжение",
        "value": "230 В"
      },
      {
        "label": "Частота вращения",
        "value": "0–2 800 об/мин"
      },
      {
        "label": "Частота ударов",
        "value": "0–44 800 уд/мин"
      },
      {
        "label": "Зажим патрона",
        "value": "1,5–13 мм"
      },
      {
        "label": "Диаметр сверления дерева",
        "value": "До 25 мм"
      },
      {
        "label": "Диаметр сверления стали",
        "value": "До 10 мм"
      },
      {
        "label": "Диаметр сверления кирпича",
        "value": "До 15 мм"
      },
      {
        "label": "Масса",
        "value": "1,8 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "driver",
    "image": "/products/rent-17.png"
  },
  {
    "id": "rent-18",
    "slug": "dreli-i-shurupoverty-18",
    "name": "Аккумуляторный шуруповёрт",
    "model": "DDF482RFE LXT 18V",
    "brand": "Makita",
    "categoryId": "dreli-i-shurupoverty",
    "shortSpecs": [
      "18 В LXT",
      "62 Н·м",
      "2 скорости"
    ],
    "description": "Аккумуляторный шуруповёрт Makita DDF482RFE LXT 18V в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Аккумуляторная платформа",
        "value": "Makita LXT, 18 В"
      },
      {
        "label": "Тип аккумулятора",
        "value": "Li-Ion"
      },
      {
        "label": "Крутящий момент, жёсткий / мягкий",
        "value": "62 / 36 Н·м"
      },
      {
        "label": "Частота вращения",
        "value": "0–600 / 0–1 900 об/мин"
      },
      {
        "label": "Зажим патрона",
        "value": "1,5–13 мм"
      },
      {
        "label": "Ступени крутящего момента",
        "value": "21"
      },
      {
        "label": "Диаметр сверления дерева",
        "value": "До 38 мм"
      },
      {
        "label": "Диаметр сверления стали",
        "value": "До 13 мм"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 650,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "driver",
    "image": "/products/rent-18.png"
  },
  {
    "id": "rent-19",
    "slug": "otboynye-molotki-19",
    "name": "Отбойный молоток лёгкий sds-max",
    "model": "HM0870C",
    "brand": "Makita",
    "categoryId": "otboynye-molotki",
    "shortSpecs": [
      "1 100 Вт",
      "7,6 Дж",
      "SDS-max"
    ],
    "description": "Отбойный молоток лёгкий sds-max Makita HM0870C в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 100 Вт"
      },
      {
        "label": "Энергия удара (EPTA)",
        "value": "7,6 Дж"
      },
      {
        "label": "Патрон",
        "value": "SDS-max"
      },
      {
        "label": "Частота ударов",
        "value": "1 100–2 650 уд/мин"
      },
      {
        "label": "Регулировка частоты ударов",
        "value": "Есть"
      },
      {
        "label": "Плавный пуск",
        "value": "Есть"
      },
      {
        "label": "Масса",
        "value": "5,1 кг"
      },
      {
        "label": "Габариты",
        "value": "449 × 109 × 230 мм"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1200,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "breaker",
    "image": "/products/rent-19.jpg"
  },
  {
    "id": "rent-20",
    "slug": "otboynye-molotki-20",
    "name": "Отбойный молоток средний sds-max",
    "model": "GSH 11 E",
    "brand": "Bosch Professional",
    "categoryId": "otboynye-molotki",
    "shortSpecs": [
      "1 500 Вт",
      "16,8 Дж",
      "SDS-max"
    ],
    "description": "Отбойный молоток средний sds-max Bosch Professional GSH 11 E в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 500 Вт"
      },
      {
        "label": "Энергия удара",
        "value": "16,8 Дж"
      },
      {
        "label": "Патрон",
        "value": "SDS-max"
      },
      {
        "label": "Частота ударов",
        "value": "1 050–1 890 уд/мин"
      },
      {
        "label": "Питание",
        "value": "От электросети"
      },
      {
        "label": "Масса",
        "value": "10,1 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1600,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "breaker",
    "image": "/products/rent-20.png"
  },
  {
    "id": "rent-21",
    "slug": "otboynye-molotki-21",
    "name": "Отбойный молоток средне-тяжёлый sds-max",
    "model": "HM1213C",
    "brand": "Makita",
    "categoryId": "otboynye-molotki",
    "shortSpecs": [
      "18,6 Дж",
      "SDS-max",
      "Система AVT"
    ],
    "description": "Отбойный молоток средне-тяжёлый sds-max Makita HM1213C в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Энергия удара (EPTA)",
        "value": "18,6 Дж"
      },
      {
        "label": "Патрон",
        "value": "SDS-max"
      },
      {
        "label": "Частота ударов",
        "value": "950–1 900 уд/мин"
      },
      {
        "label": "Снижение вибрации",
        "value": "Система AVT"
      },
      {
        "label": "Длина кабеля",
        "value": "5 м"
      },
      {
        "label": "Габариты",
        "value": "576 × 149 × 265 мм"
      },
      {
        "label": "Масса",
        "value": "10,8 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "breaker",
    "image": "/products/rent-21.jpg"
  },
  {
    "id": "rent-22",
    "slug": "otboynye-molotki-22",
    "name": "Тяжёлый бетонолом",
    "model": "GSH 16-30",
    "brand": "Bosch Professional",
    "categoryId": "otboynye-molotki",
    "shortSpecs": [
      "1 750 Вт",
      "41 Дж",
      "Шестигранник 30 мм"
    ],
    "description": "Тяжёлый бетонолом Bosch Professional GSH 16-30 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 750 Вт"
      },
      {
        "label": "Энергия удара",
        "value": "41 Дж"
      },
      {
        "label": "Крепление оснастки",
        "value": "Шестигранник 30 мм"
      },
      {
        "label": "Частота ударов",
        "value": "1 280 уд/мин"
      },
      {
        "label": "Снижение вибрации",
        "value": "Vibration Control"
      },
      {
        "label": "Масса",
        "value": "16,9 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 2200,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "breaker",
    "image": "/products/rent-22.png"
  },
  {
    "id": "rent-23",
    "slug": "shtroborezy-i-pylesosy-23",
    "name": "Штроборез 125 мм",
    "model": "SG1251J",
    "brand": "Makita",
    "categoryId": "shtroborezy-i-pylesosy",
    "shortSpecs": [
      "1 400 Вт",
      "Диск 125 мм",
      "Глубина до 30 мм"
    ],
    "description": "Штроборез 125 мм Makita SG1251J в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 400 Вт"
      },
      {
        "label": "Напряжение",
        "value": "230 В"
      },
      {
        "label": "Диаметр диска",
        "value": "125 мм"
      },
      {
        "label": "Глубина реза",
        "value": "До 30 мм"
      },
      {
        "label": "Частота вращения",
        "value": "10 000 об/мин"
      },
      {
        "label": "Длина кабеля",
        "value": "5 м"
      },
      {
        "label": "Масса",
        "value": "4,5 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1000,
    "deposit": null,
    "stock": null,
    "popular": true,
    "visual": "chaser",
    "image": "/products/rent-23.jpg"
  },
  {
    "id": "rent-24",
    "slug": "shtroborezy-i-pylesosy-24",
    "name": "Штроборез 125 мм усиленный",
    "model": "MFE 40",
    "brand": "Metabo",
    "categoryId": "shtroborezy-i-pylesosy",
    "shortSpecs": [
      "1 900 Вт",
      "Глубина до 40 мм",
      "Ширина до 35 мм"
    ],
    "description": "Штроборез 125 мм усиленный Metabo MFE 40 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 900 Вт"
      },
      {
        "label": "Диаметр диска",
        "value": "125 мм"
      },
      {
        "label": "Глубина паза",
        "value": "10–40 мм"
      },
      {
        "label": "Ширина паза",
        "value": "9 / 15,5 / 22 / 28,5 / 35 мм"
      },
      {
        "label": "Частота вращения",
        "value": "5 000 об/мин"
      },
      {
        "label": "Масса без кабеля",
        "value": "4,6 кг"
      },
      {
        "label": "Длина кабеля",
        "value": "4 м"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 850,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "chaser",
    "image": "/products/rent-24.jpg"
  },
  {
    "id": "rent-25",
    "slug": "shtroborezy-i-pylesosy-25",
    "name": "Строительный пылесос 30 л",
    "model": "VC3012L",
    "brand": "Makita",
    "categoryId": "shtroborezy-i-pylesosy",
    "shortSpecs": [
      "Класс пыли L",
      "25 кПа",
      "Влажная уборка"
    ],
    "description": "Строительный пылесос 30 л Makita VC3012L в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Тип уборки",
        "value": "Сухая и сбор жидкости"
      },
      {
        "label": "Класс пыли",
        "value": "L"
      },
      {
        "label": "Разрежение",
        "value": "25 кПа"
      },
      {
        "label": "Расход воздуха",
        "value": "3,7 м³/мин"
      },
      {
        "label": "Полезный объём для пыли",
        "value": "24 л"
      },
      {
        "label": "Полезный объём для жидкости",
        "value": "19 л"
      },
      {
        "label": "Очистка фильтра",
        "value": "Push & Clean"
      },
      {
        "label": "Длина кабеля",
        "value": "7,5 м"
      },
      {
        "label": "Масса",
        "value": "11 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "vacuum",
    "image": "/products/rent-25.webp"
  },
  {
    "id": "rent-26",
    "slug": "shtroborezy-i-pylesosy-26",
    "name": "Строительный пылесос 30 л",
    "model": "NT 30/1 Tact L",
    "brand": "Kärcher",
    "categoryId": "shtroborezy-i-pylesosy",
    "shortSpecs": [
      "Бак 30 л",
      "Класс пыли L",
      "Автоочистка Tact"
    ],
    "description": "Строительный пылесос 30 л Kärcher NT 30/1 Tact L в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Тип уборки",
        "value": "Сухая и сбор жидкости"
      },
      {
        "label": "Максимальная мощность",
        "value": "1 380 Вт"
      },
      {
        "label": "Напряжение",
        "value": "220–240 В"
      },
      {
        "label": "Расход воздуха",
        "value": "74 л/с"
      },
      {
        "label": "Разрежение",
        "value": "27,3 кПа"
      },
      {
        "label": "Объём бака",
        "value": "30 л"
      },
      {
        "label": "Класс пыли",
        "value": "L"
      },
      {
        "label": "Очистка фильтра",
        "value": "Автоматическая, Tact"
      },
      {
        "label": "Масса без принадлежностей",
        "value": "13,5 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1000,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "vacuum",
    "image": "/products/rent-26.jpg"
  },
  {
    "id": "rent-27",
    "slug": "uplotnenie-i-beton-27",
    "name": "Виброплита 80–90 кг",
    "model": "VP80TH",
    "brand": "TSS",
    "categoryId": "uplotnenie-i-beton",
    "shortSpecs": [
      "80 кг",
      "Honda GX160",
      "15 кН"
    ],
    "description": "Виброплита 80–90 кг TSS VP80TH в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Тип виброплиты",
        "value": "Прямоходная"
      },
      {
        "label": "Двигатель",
        "value": "Honda GX160"
      },
      {
        "label": "Топливо",
        "value": "Бензин АИ-92"
      },
      {
        "label": "Центробежная сила",
        "value": "15 кН"
      },
      {
        "label": "Размер основания",
        "value": "510 × 480 мм"
      },
      {
        "label": "Глубина уплотнения",
        "value": "До 300 мм, зависит от грунта"
      },
      {
        "label": "Масса",
        "value": "80 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1300,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "compactor",
    "image": "/products/rent-27.jpg"
  },
  {
    "id": "rent-28",
    "slug": "uplotnenie-i-beton-28",
    "name": "Реверсивная виброплита",
    "model": "WP160L",
    "brand": "TSS",
    "categoryId": "uplotnenie-i-beton",
    "shortSpecs": [
      "Реверс",
      "30,5 кН",
      "Плита 670 × 450 мм"
    ],
    "description": "Реверсивная виброплита TSS WP160L для уплотнения грунта. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Тип виброплиты",
        "value": "Реверсивная"
      },
      {
        "label": "Двигатель",
        "value": "Loncin G200F"
      },
      {
        "label": "Мощность двигателя",
        "value": "4,8 кВт / 6,5 л. с."
      },
      {
        "label": "Центробежная сила",
        "value": "30,5 кН"
      },
      {
        "label": "Размер основания",
        "value": "670 × 450 мм"
      },
      {
        "label": "Глубина уплотнения",
        "value": "До 500 мм, зависит от грунта"
      },
      {
        "label": "Топливный бак",
        "value": "3,6 л"
      },
      {
        "label": "Масса",
        "value": "150 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "compactor",
    "image": "/products/rent-28.jpg"
  },
  {
    "id": "rent-29",
    "slug": "uplotnenie-i-beton-29",
    "name": "Вибротрамбовка",
    "model": "RM75H Honda GX160",
    "brand": "TSS",
    "categoryId": "uplotnenie-i-beton",
    "shortSpecs": [
      "Honda GX160",
      "10 кН",
      "79 кг"
    ],
    "description": "Вибротрамбовка TSS RM75H Honda GX160 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Двигатель",
        "value": "Honda GX160, 4-тактный"
      },
      {
        "label": "Мощность двигателя",
        "value": "3,6 кВт / 4,8 л. с."
      },
      {
        "label": "Топливо",
        "value": "Бензин"
      },
      {
        "label": "Сила удара",
        "value": "10 кН"
      },
      {
        "label": "Частота ударов",
        "value": "450–650 уд/мин"
      },
      {
        "label": "Размер башмака",
        "value": "340 × 285 мм"
      },
      {
        "label": "Топливный бак",
        "value": "2,8 л"
      },
      {
        "label": "Масса",
        "value": "79 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "compactor",
    "image": "/products/rent-29.jpg"
  },
  {
    "id": "rent-30",
    "slug": "uplotnenie-i-beton-30",
    "name": "Резчик швов",
    "model": "RH-350L",
    "brand": "TSS",
    "categoryId": "uplotnenie-i-beton",
    "shortSpecs": [
      "Диск 350 мм",
      "Глубина до 80 мм",
      "Бак воды 11 л"
    ],
    "description": "Резчик швов TSS RH-350L в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Двигатель",
        "value": "Loncin G200F"
      },
      {
        "label": "Мощность двигателя",
        "value": "4 кВт / 5,5 л. с."
      },
      {
        "label": "Диаметр диска",
        "value": "350 мм"
      },
      {
        "label": "Посадочное отверстие",
        "value": "25,4 мм"
      },
      {
        "label": "Глубина реза",
        "value": "До 80 мм"
      },
      {
        "label": "Бак для воды",
        "value": "11 л"
      },
      {
        "label": "Топливный бак",
        "value": "3,6 л"
      },
      {
        "label": "Масса",
        "value": "68 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "compactor",
    "image": "/products/rent-30.jpg"
  },
  {
    "id": "rent-31",
    "slug": "uplotnenie-i-beton-31",
    "name": "Глубинный вибратор",
    "model": "ЭП-1,5/220 + вал/булава",
    "brand": "TSS",
    "categoryId": "uplotnenie-i-beton",
    "shortSpecs": [
      "220 В",
      "2 850 об/мин",
      "Соединение ДУ"
    ],
    "description": "Глубинный вибратор TSS ЭП-1,5/220 + вал/булава в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Привод",
        "value": "Электрический"
      },
      {
        "label": "Напряжение",
        "value": "220 В"
      },
      {
        "label": "Частота сети",
        "value": "50 Гц"
      },
      {
        "label": "Частота вращения",
        "value": "2 850 об/мин"
      },
      {
        "label": "Соединение гибкого вала",
        "value": "ДУ"
      },
      {
        "label": "Масса электропривода",
        "value": "12,5 кг"
      },
      {
        "label": "Габариты электропривода",
        "value": "345 × 270 × 300 мм"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "compactor",
    "image": "/products/rent-31.jpg"
  },
  {
    "id": "rent-32",
    "slug": "uplotnenie-i-beton-32",
    "name": "Бетономешалка 180 л",
    "model": "БМ-180",
    "brand": "Вихрь",
    "categoryId": "uplotnenie-i-beton",
    "shortSpecs": [
      "Барабан 180 л",
      "800 Вт",
      "220 В"
    ],
    "description": "Бетономешалка 180 л Вихрь БМ-180 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "800 Вт"
      },
      {
        "label": "Напряжение",
        "value": "220 В"
      },
      {
        "label": "Объём барабана",
        "value": "180 л"
      },
      {
        "label": "Объём загрузки",
        "value": "До 130 л"
      },
      {
        "label": "Частота вращения барабана",
        "value": "29,5 об/мин"
      },
      {
        "label": "Венец",
        "value": "Чугунный"
      },
      {
        "label": "Время смешивания",
        "value": "3–7 минут"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 700,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "mixer",
    "image": "/products/rent-32.jpg"
  },
  {
    "id": "rent-33",
    "slug": "almaznoe-burenie-i-rezka-33",
    "name": "Установка алмазного бурения",
    "model": "DBE 162",
    "brand": "Eibenstock",
    "categoryId": "almaznoe-burenie-i-rezka",
    "shortSpecs": [
      "2 200 Вт",
      "Мокрое бурение до 162 мм",
      "Наклон до 45°"
    ],
    "description": "Установка алмазного бурения Eibenstock DBE 162 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "2 200 Вт"
      },
      {
        "label": "Напряжение",
        "value": "230 В"
      },
      {
        "label": "Диаметр мокрого бурения",
        "value": "12–162 мм"
      },
      {
        "label": "Диаметр сухого бурения",
        "value": "12–202 мм"
      },
      {
        "label": "Резьба шпинделя",
        "value": "G 1/2 внутренняя / 1¼ наружная"
      },
      {
        "label": "Наклон стойки",
        "value": "0–45°"
      },
      {
        "label": "Рабочий ход стойки",
        "value": "700 мм"
      },
      {
        "label": "Масса установки",
        "value": "20,7 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 2800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "disc",
    "image": "/products/rent-33.png"
  },
  {
    "id": "rent-34",
    "slug": "almaznoe-burenie-i-rezka-34",
    "name": "Бензорез",
    "model": "K 970",
    "brand": "Husqvarna",
    "categoryId": "almaznoe-burenie-i-rezka",
    "shortSpecs": [
      "4,8 кВт",
      "93,6 см³",
      "Бензиновый"
    ],
    "description": "Бензорез Husqvarna K 970 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Мощность двигателя",
        "value": "4,8 кВт"
      },
      {
        "label": "Рабочий объём",
        "value": "93,6 см³"
      },
      {
        "label": "Топливный бак",
        "value": "1 л"
      },
      {
        "label": "Охлаждение реза",
        "value": "Подача воды"
      },
      {
        "label": "Диск по исполнению",
        "value": "350 или 400 мм"
      },
      {
        "label": "Глубина реза по исполнению",
        "value": "125 мм (350 мм) / 155 мм (400 мм)"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 2800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "disc",
    "image": "/products/rent-34.webp"
  },
  {
    "id": "rent-35",
    "slug": "almaznoe-burenie-i-rezka-35",
    "name": "Бензорез",
    "model": "TS 420",
    "brand": "STIHL",
    "categoryId": "almaznoe-burenie-i-rezka",
    "shortSpecs": [
      "3,2 кВт",
      "Диск 350 мм",
      "Глубина до 125 мм"
    ],
    "description": "Бензорез STIHL TS 420 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Мощность двигателя",
        "value": "3,2 кВт"
      },
      {
        "label": "Рабочий объём",
        "value": "66,7 см³"
      },
      {
        "label": "Диаметр диска",
        "value": "350 мм"
      },
      {
        "label": "Глубина реза",
        "value": "До 125 мм"
      },
      {
        "label": "Двигатель",
        "value": "Бензиновый"
      },
      {
        "label": "Снижение вибрации",
        "value": "Антивибрационная система"
      },
      {
        "label": "Охлаждение реза",
        "value": "Подключение воды"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 2800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "disc",
    "image": "/products/rent-35.jpg"
  },
  {
    "id": "rent-37",
    "slug": "klimat-i-sushka-37",
    "name": "Промышленный осушитель",
    "model": "DH 752",
    "brand": "Master",
    "categoryId": "klimat-i-sushka",
    "shortSpecs": [
      "350 м³/ч",
      "Бак 5,7 л",
      "От +5 °C"
    ],
    "description": "Промышленный осушитель Master DH 752 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Расход воздуха",
        "value": "350 м³/ч"
      },
      {
        "label": "Рабочая температура",
        "value": "+5…+35 °C"
      },
      {
        "label": "Рабочая влажность",
        "value": "20–90 %"
      },
      {
        "label": "Бак для конденсата",
        "value": "5,7 л"
      },
      {
        "label": "Напряжение",
        "value": "220–240 В"
      },
      {
        "label": "Частота сети",
        "value": "50 Гц"
      },
      {
        "label": "Отвод конденсата",
        "value": "В бак или непрерывный слив"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1200,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-37.jpg"
  },
  {
    "id": "rent-39",
    "slug": "klimat-i-sushka-39",
    "name": "Электрическая тепловая пушка 4,5 кВт",
    "model": "BHP-ME-5",
    "brand": "Ballu",
    "categoryId": "klimat-i-sushka",
    "shortSpecs": [
      "4,5 кВт",
      "400 м³/ч",
      "230 В"
    ],
    "description": "Электрическая тепловая пушка Ballu BHP-ME-5 для обогрева и просушки помещений. Наличие на выбранные даты уточнит менеджер.",
    "specs": [
      {
        "label": "Тепловая мощность",
        "value": "4,5 кВт"
      },
      {
        "label": "Режимы мощности",
        "value": "0 / 3 / 4,5 кВт"
      },
      {
        "label": "Расход воздуха",
        "value": "400 м³/ч"
      },
      {
        "label": "Напряжение",
        "value": "230 В"
      },
      {
        "label": "Номинальный ток",
        "value": "21 А"
      },
      {
        "label": "Габариты (Ш × В × Г)",
        "value": "245 × 350 × 225 мм"
      },
      {
        "label": "Масса",
        "value": "3,5 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-39.png"
  },
  {
    "id": "rent-40",
    "slug": "klimat-i-sushka-40",
    "name": "Дизельная тепловая пушка",
    "model": "B 100 CED",
    "brand": "Master",
    "categoryId": "klimat-i-sushka",
    "shortSpecs": [
      "29 кВт",
      "800 м³/ч",
      "Бак 44 л"
    ],
    "description": "Дизельная тепловая пушка Master B 100 CED в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Тепловая мощность",
        "value": "29 кВт"
      },
      {
        "label": "Расход воздуха",
        "value": "800 м³/ч"
      },
      {
        "label": "Нагрев",
        "value": "Прямой"
      },
      {
        "label": "Топливо",
        "value": "Дизельное топливо / керосин"
      },
      {
        "label": "Топливный бак",
        "value": "44 л"
      },
      {
        "label": "Напряжение",
        "value": "220–240 В"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-40.png"
  },
  {
    "id": "rent-41",
    "slug": "nasosy-i-motopompy-41",
    "name": "Дренажный насос",
    "model": "UNILIFT KP 250-A1",
    "brand": "Grundfos",
    "categoryId": "nasosy-i-motopompy",
    "shortSpecs": [
      "480 Вт",
      "230 В",
      "Поплавковый выключатель"
    ],
    "description": "Дренажный насос Grundfos UNILIFT KP 250-A1 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Тип насоса",
        "value": "Погружной дренажный"
      },
      {
        "label": "Потребляемая мощность",
        "value": "480 Вт"
      },
      {
        "label": "Напряжение",
        "value": "230 В, 1 фаза"
      },
      {
        "label": "Номинальный ток",
        "value": "2,3 А"
      },
      {
        "label": "Выходное соединение",
        "value": "Rp 1¼ дюйма"
      },
      {
        "label": "Управление уровнем",
        "value": "Поплавковый выключатель"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 700,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-41.jpg"
  },
  {
    "id": "rent-42",
    "slug": "nasosy-i-motopompy-42",
    "name": "Мотопомпа 50 мм",
    "model": "SEV-50X",
    "brand": "Koshin",
    "categoryId": "nasosy-i-motopompy",
    "shortSpecs": [
      "Патрубки 50 мм",
      "Напор до 27 м",
      "Всасывание до 8 м"
    ],
    "description": "Мотопомпа 50 мм Koshin SEV-50X в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Диаметр патрубков",
        "value": "50 мм (2 дюйма)"
      },
      {
        "label": "Максимальный напор",
        "value": "27 м"
      },
      {
        "label": "Глубина всасывания",
        "value": "До 8 м"
      },
      {
        "label": "Двигатель",
        "value": "Koshin K180, 4-тактный"
      },
      {
        "label": "Рабочий объём",
        "value": "179 см³"
      },
      {
        "label": "Номинальная мощность двигателя",
        "value": "3,1 кВт"
      },
      {
        "label": "Топливо",
        "value": "Неэтилированный бензин"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1000,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-42.png"
  },
  {
    "id": "rent-43",
    "slug": "nasosy-i-motopompy-43",
    "name": "Грязевая мотопомпа 80 мм",
    "model": "KTH-80X",
    "brand": "Koshin",
    "categoryId": "nasosy-i-motopompy",
    "shortSpecs": [
      "Патрубки 3 дюйма",
      "Honda GX240",
      "Напор около 27 м"
    ],
    "description": "Грязевая мотопомпа 80 мм Koshin KTH-80X в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Диаметр патрубков",
        "value": "3 дюйма"
      },
      {
        "label": "Максимальный напор",
        "value": "Около 27 м"
      },
      {
        "label": "Максимальная подача",
        "value": "Около 1 340 л/мин"
      },
      {
        "label": "Двигатель",
        "value": "Honda GX240"
      },
      {
        "label": "Рабочий объём",
        "value": "242 см³"
      },
      {
        "label": "Запуск",
        "value": "Ручной"
      },
      {
        "label": "Масса",
        "value": "Около 58 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-43.jpg"
  },
  {
    "id": "rent-45",
    "slug": "kompressory-45",
    "name": "Поршневой компрессор 100 л",
    "model": "СБ4/С-100.LB30A",
    "brand": "Remeza",
    "categoryId": "kompressory",
    "shortSpecs": [
      "Ресивер 100 л",
      "10 бар",
      "2,2 кВт"
    ],
    "description": "Поршневой компрессор 100 л Remeza СБ4/С-100.LB30A в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Тип компрессора",
        "value": "Поршневой, масляный"
      },
      {
        "label": "Объём ресивера",
        "value": "100 л"
      },
      {
        "label": "Максимальное давление",
        "value": "10 бар"
      },
      {
        "label": "Производительность на входе",
        "value": "420 л/мин"
      },
      {
        "label": "Мощность двигателя",
        "value": "2,2 кВт"
      },
      {
        "label": "Напряжение",
        "value": "220 В"
      },
      {
        "label": "Цилиндры / ступени",
        "value": "2 / 1"
      },
      {
        "label": "Масса",
        "value": "86 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "compressor",
    "image": "/products/rent-45.webp"
  },
  {
    "id": "rent-46",
    "slug": "kompressory-46",
    "name": "Поршневой компрессор 270 л",
    "model": "B6000/270 CT 7.5",
    "brand": "ABAC",
    "categoryId": "kompressory",
    "shortSpecs": [
      "Ресивер 270 л",
      "827 л/мин на входе",
      "2 ступени"
    ],
    "description": "Поршневой компрессор 270 л ABAC B6000/270 CT 7.5 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Тип компрессора",
        "value": "Поршневой, масляный"
      },
      {
        "label": "Привод",
        "value": "Ременной"
      },
      {
        "label": "Количество ступеней",
        "value": "2"
      },
      {
        "label": "Объём ресивера",
        "value": "270 л"
      },
      {
        "label": "Производительность на входе",
        "value": "827 л/мин"
      },
      {
        "label": "Мощность двигателя",
        "value": "7,5 л. с."
      },
      {
        "label": "Частота вращения",
        "value": "1 400 об/мин"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1200,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "compressor",
    "image": "/products/rent-46.jpg"
  },
  {
    "id": "rent-48",
    "slug": "svarka-48",
    "name": "Сварочный инвертор MMA",
    "model": "REAL ARC 200 (Z238N)",
    "brand": "Сварог",
    "categoryId": "svarka",
    "shortSpecs": [
      "15–200 А",
      "220 В",
      "Электрод до 4 мм"
    ],
    "description": "Сварочный инвертор MMA Сварог REAL ARC 200 (Z238N) в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Режим сварки",
        "value": "MMA, постоянный ток"
      },
      {
        "label": "Сварочный ток",
        "value": "15–200 А"
      },
      {
        "label": "Напряжение питания",
        "value": "220 В, 1 фаза"
      },
      {
        "label": "Рабочее напряжение сети",
        "value": "160–270 В"
      },
      {
        "label": "Диаметр электрода",
        "value": "1,6–4 мм"
      },
      {
        "label": "Продолжительность нагрузки при +40 °C",
        "value": "60 %"
      },
      {
        "label": "Ток при непрерывной работе",
        "value": "160 А"
      },
      {
        "label": "Масса",
        "value": "4,3 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-48.png"
  },
  {
    "id": "rent-49",
    "slug": "svarka-49",
    "name": "Сварочный полуавтомат MIG/MMA",
    "model": "SPEEDWAY 200",
    "brand": "AuroraPRO",
    "categoryId": "svarka",
    "shortSpecs": [
      "40–200 А",
      "220 В",
      "MIG/MAG"
    ],
    "description": "Сварочный полуавтомат MIG/MMA AuroraPRO SPEEDWAY 200 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Режим сварки",
        "value": "MIG/MAG"
      },
      {
        "label": "Сварочный ток",
        "value": "40–200 А"
      },
      {
        "label": "Напряжение питания",
        "value": "220 В"
      },
      {
        "label": "Потребляемая мощность",
        "value": "5,9 кВт"
      },
      {
        "label": "Продолжительность нагрузки при +40 °C",
        "value": "60 %"
      },
      {
        "label": "Габариты",
        "value": "470 × 240 × 450 мм"
      },
      {
        "label": "Масса",
        "value": "21 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-49.webp"
  },
  {
    "id": "rent-52",
    "slug": "izmerenie-52",
    "name": "Лазерный нивелир 3×360°",
    "model": "GLL 3-80 CG",
    "brand": "Bosch Professional",
    "categoryId": "izmerenie",
    "shortSpecs": [
      "3 × 360°",
      "Зелёный луч",
      "±0,2 мм/м"
    ],
    "description": "Лазерный нивелир 3×360° Bosch Professional GLL 3-80 CG в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Проекция",
        "value": "3 плоскости по 360°"
      },
      {
        "label": "Цвет луча",
        "value": "Зелёный"
      },
      {
        "label": "Рабочая дальность",
        "value": "До 30 м"
      },
      {
        "label": "Дальность с приёмником",
        "value": "До 120 м, приёмник отдельно"
      },
      {
        "label": "Точность нивелирования",
        "value": "±0,2 мм/м"
      },
      {
        "label": "Диапазон самовыравнивания",
        "value": "±4°"
      },
      {
        "label": "Защита корпуса",
        "value": "IP54"
      },
      {
        "label": "Питание",
        "value": "Аккумулятор 12 В или 4 × AA через адаптер"
      },
      {
        "label": "Резьба для штатива",
        "value": "1/4 и 5/8 дюйма"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 800,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "laser",
    "image": "/products/rent-52.png"
  },
  {
    "id": "rent-62",
    "slug": "moyushchie-pylesosy-62",
    "name": "Профессиональный моющий экстрактор",
    "model": "Puzzi 10/1",
    "brand": "Kärcher",
    "categoryId": "moyushchie-pylesosy",
    "shortSpecs": [
      "20–25 м²/ч",
      "Баки 10 / 9 л",
      "1 бар"
    ],
    "description": "Профессиональный моющий экстрактор Kärcher Puzzi 10/1 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Производительность по площади",
        "value": "20–25 м²/ч"
      },
      {
        "label": "Чистая / грязная вода",
        "value": "10 / 9 л"
      },
      {
        "label": "Давление распыления",
        "value": "1 бар"
      },
      {
        "label": "Подача раствора",
        "value": "1 л/мин"
      },
      {
        "label": "Разрежение",
        "value": "25,4 кПа"
      },
      {
        "label": "Мощность турбины",
        "value": "1 250 Вт"
      },
      {
        "label": "Напряжение",
        "value": "220–240 В"
      },
      {
        "label": "Длина кабеля",
        "value": "7,5 м"
      },
      {
        "label": "Масса без принадлежностей",
        "value": "10,5 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1500,
    "deposit": null,
    "stock": null,
    "popular": true,
    "visual": "vacuum",
    "image": "/products/rent-62.jpg"
  },
  {
    "id": "rent-63",
    "slug": "plitkorezy-63",
    "name": "Профессиональный плиткорез 1200 мм",
    "model": "QX-1200",
    "brand": "Wandeli",
    "categoryId": "plitkorezy",
    "shortSpecs": [
      "Рез до 1 200 мм",
      "1 550 Вт",
      "Диск до 125 мм"
    ],
    "description": "Профессиональный плиткорез 1200 мм Wandeli QX-1200 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Потребляемая мощность",
        "value": "1 550 Вт"
      },
      {
        "label": "Напряжение",
        "value": "220 В, 50 Гц"
      },
      {
        "label": "Частота вращения",
        "value": "12 000 об/мин"
      },
      {
        "label": "Максимальный диаметр диска",
        "value": "125 мм"
      },
      {
        "label": "Длина реза",
        "value": "До 1 200 мм"
      },
      {
        "label": "Глубина реза при 90° / 45°",
        "value": "30 / 20 мм"
      },
      {
        "label": "Рабочий стол",
        "value": "1 200 × 350 мм"
      },
      {
        "label": "Охлаждение реза",
        "value": "Водяное"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 2400,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "miter-saw",
    "image": "/products/rent-63.jpg"
  },
  {
    "id": "rent-64",
    "slug": "klimat-i-sushka-64",
    "name": "Промышленный осушитель 52 л/сут",
    "model": "DH 62",
    "brand": "Master",
    "categoryId": "klimat-i-sushka",
    "shortSpecs": [
      "480 м³/ч",
      "Бак 12 л",
      "От +1 °C"
    ],
    "description": "Промышленный осушитель 52 л/сут Master DH 62 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Влагоудаление при +30 °C, 80 % RH",
        "value": "52 л/сутки"
      },
      {
        "label": "Расход воздуха",
        "value": "480 м³/ч"
      },
      {
        "label": "Рабочая температура",
        "value": "+1…+32 °C"
      },
      {
        "label": "Рабочая влажность",
        "value": "30–98 %"
      },
      {
        "label": "Потребляемая мощность",
        "value": "890 Вт"
      },
      {
        "label": "Напряжение",
        "value": "220–240 В"
      },
      {
        "label": "Бак для конденсата",
        "value": "12 л"
      },
      {
        "label": "Масса",
        "value": "47 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 1300,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-64.jpg"
  },
  {
    "id": "rent-65",
    "slug": "motobury-65",
    "name": "Мотобур для двух операторов",
    "model": "BT 360",
    "brand": "STIHL",
    "categoryId": "motobury",
    "shortSpecs": [
      "60,3 см³",
      "50 об/мин",
      "Для двух операторов"
    ],
    "description": "Мотобур для двух операторов STIHL BT 360 в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Рабочий объём двигателя",
        "value": "60,3 см³"
      },
      {
        "label": "Мощность двигателя",
        "value": "3 кВт / 4,1 л. с."
      },
      {
        "label": "Двигатель",
        "value": "Бензиновый, 2-тактный"
      },
      {
        "label": "Частота вращения шпинделя",
        "value": "50 об/мин"
      },
      {
        "label": "Диаметры совместимых буров",
        "value": "90–350 мм"
      },
      {
        "label": "Топливный бак",
        "value": "0,55 л"
      },
      {
        "label": "Масса без бура и топлива",
        "value": "28,5 кг"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 2500,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-65.jpg"
  },
  {
    "id": "rent-67",
    "slug": "zatirochnye-mashiny-67",
    "name": "Электрическая затирочная машина 900 мм",
    "model": "DMD900, 380 В",
    "brand": "TSS",
    "categoryId": "zatirochnye-mashiny",
    "shortSpecs": [
      "380 В",
      "Электропривод",
      "Для бетонного пола"
    ],
    "description": "Электрическая затирочная машина 900 мм TSS DMD900, 380 В в аренду. Наличие на выбранные даты и комплектацию уточнит менеджер.",
    "specs": [
      {
        "label": "Привод",
        "value": "Электрический"
      },
      {
        "label": "Напряжение",
        "value": "380 В"
      },
      {
        "label": "Назначение",
        "value": "Затирка бетонного пола"
      },
      {
        "label": "Рабочий орган",
        "value": "Затирочные лопасти"
      }
    ],
    "kit": [
      "Комплектация уточняется при подтверждении заявки."
    ],
    "dailyRate": 2100,
    "deposit": null,
    "stock": null,
    "popular": false,
    "visual": "equipment",
    "image": "/products/rent-67.jpg"
  }
];

export function getProductBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function getProductById(id: string) {
  return products.find((item) => item.id === id);
}

export const brands = [...new Set(products.map((item) => item.brand))].sort((a, b) => a.localeCompare(b, "ru"));
