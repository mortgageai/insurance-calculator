// tariffs_ifl.js - Тарифы продуктов IFL (Имущество Физических лиц)

// 1. Бастион - военные риски
const T_BASTION = {
  flat: {
    cons: { min: 500000, max: 30000000, rate: 0.001 },
    finish: { min: 300000, max: 10000000, rate: 0.001 }
  },
  house: {
    cons: { min: 1000000, max: 15000000, rate: 0.0015 },
    finish: { min: 500000, max: 5000000, rate: 0.0015 }
  }
};

// 2. Экспресс квартира - готовые пакеты
const EXPRESS_PACKS = [
  { id: 1, finish: 50000, movable: 0, noGo: 550, withGo: 900 },
  { id: 2, finish: 50000, movable: 50000, noGo: 750, withGo: 1100 },
  { id: 3, finish: 100000, movable: 0, noGo: 1100, withGo: 1450 },
  { id: 4, finish: 100000, movable: 50000, noGo: 1300, withGo: 1650 },
  { id: 5, finish: 150000, movable: 50000, noGo: 1850, withGo: 2200 },
  { id: 6, finish: 150000, movable: 100000, noGo: 2050, withGo: 2400 },
  { id: 7, finish: 150000, movable: 150000, noGo: 2250, withGo: 3300 },
  { id: 8, finish: 250000, movable: 150000, noGo: 3350, withGo: 4050 }
];

// Страховые суммы ГО для каждого варианта Экспресс квартира
const EXPRESS_GO_SUMS = {
  1: 50000,
  2: 50000,
  3: 50000,
  4: 50000,
  5: 50000,
  6: 50000,
  7: 150000,
  8: 100000
};

// 3. Экспресс ГО - гражданская ответственность
const EXPRESS_GO_PACKS = [
  { id: 1, sum: 1500000, price: 10500 },
  { id: 2, sum: 1000000, price: 7000 },
  { id: 3, sum: 750000, price: 5250 },
  { id: 4, sum: 500000, price: 3500 },
  { id: 5, sum: 300000, price: 2100 },
  { id: 6, sum: 200000, price: 1400 },
  { id: 7, sum: 150000, price: 1050 },
  { id: 8, sum: 100000, price: 700 },
  { id: 9, sum: 50000, price: 350 }
];

// 4. Моя квартира - конструктор
const T_MOYA = {
  constructive: { only: 0.001, withOthers: 0.0001 },
  finish: [
    { min: 200000, max: 499999, rate: 0.0095 },  // До 499999 включительно
    { min: 500000, max: 999999, rate: 0.0060 },  // От 500000 включительно до 999999 (500000 * 0.0060 = 3000)
    { min: 1000000, max: 3000000, rate: 0.0045 },  // От 1000000 включительно до 3000000 (1000000 * 0.0045 = 4500)
    { min: 3000001, max: 5000000, rate: 0.0055 }
  ],
  movable: [
    { min: 50000, max: 2000000, rate: 0.0040 },
    { min: 2000001, max: 3000000, rate: 0.0045 }
  ],
  go: {
    alone: 0.007,
    pack: [
      { min: 100000, max: 500000, rate: 0.0033 },
      { min: 500001, max: 1000000, rate: 0.0022 },
      { min: 1000001, max: 5000000, rate: 0.0020 }
    ]
  },
  risks: { gr1: 0.0020, gr23: 0.0015 }
};

// Экспорт
if (typeof window !== 'undefined') {
  window.T_BASTION = T_BASTION;
  window.EXPRESS_PACKS = EXPRESS_PACKS;
  window.EXPRESS_GO_SUMS = EXPRESS_GO_SUMS;
  window.EXPRESS_GO_PACKS = EXPRESS_GO_PACKS;
  window.T_MOYA = T_MOYA;
}

if (typeof module !== 'undefined') {
  module.exports = {
    T_BASTION,
    EXPRESS_PACKS,
    EXPRESS_GO_SUMS,
    EXPRESS_GO_PACKS,
    T_MOYA
  };
}





