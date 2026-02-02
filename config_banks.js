// config_banks.js
// Финальная конфигурация банков для ипотечного калькулятора Ингосстрах

window.BANKS = {
  "Абсолют Банк": {
    aliases: ["абсолют", "абсолют банк", "абсолютбанк", "абсолют-банк"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Ак Барс": {
    aliases: ["ак барс", "ак-барс", "акбарс"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Альфа Банк": {
    aliases: ["альфа", "альфабанк", "альфа банк"],
    add_percent: null, // клиент вводит сам
    allow_discount_property: false, // запрещена
    allow_discount_life: false      // запрещена
  },

  "Банк СПБ": {
    aliases: ["банк спб", "спб", "спб банк", "банк санкт-петербург"],
    add_percent: 10,
    allow_discount_property: false, // запрещена
    allow_discount_life: false      // запрещена
  },

  "ВТБ": {
    aliases: ["втб", "втб банк", "открытие", "банк открытие"],
    add_percent: 10, // для старых дат; для новых дат (после 01.02.2025) = 0
    cutoff_date: "2025-02-01", // дата перехода на новые тарифы
    allow_discount_property: true, // для старых дат; для новых = false
    allow_discount_life: true,     // для старых дат; для новых = false
    allow_discount_title: true     // для старых дат; для новых = false
  },

  "Газпромбанк": {
    aliases: ["гпб", "газпромбанк", "газпром банк", "газпром-банк", "гпб банк"],
    add_percent: null, // клиент вводит сам (как Альфа, УБРИР)
    allow_discount_property: false, // запрещена (как Дом.РФ)
    allow_discount_life: false,     // запрещена
    allow_discount_title: false     // запрещена
  },

  "Дом.РФ": {
    aliases: ["дом.рф", "дом рф", "дом. рф"],
    add_percent: 0,
    allow_discount_property: false, // запрещена
    allow_discount_life: false      // запрещена
  },

  "Зенит": {
    aliases: ["зенит"],
    add_percent: 10,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "ИТБ / ТКБ": {
    aliases: ["итб", "ткб", "ткб/итб", "итб/ткб"],
    add_percent: 10,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Металлинвест": {
    aliases: ["металлинвест", "металлинвестбанк"],
    add_percent: 10,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "МКБ": {
    aliases: ["мкб", "мкб банк", "московский кредитный банк"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true,
    discount_property_percent: 15,  // скидка 15%
    discount_life_percent: 15,       // скидка 15%
    discount_title_percent: 30       // скидка 30% на титул
  },

  "МТС Банк": {
    aliases: ["мтс", "мтс банк"],
    add_percent: 10,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "ПСБ (Промсвязьбанк)": {
    aliases: ["псб", "промсвязьбанк", "псб банк"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Райффайзенбанк": {
    aliases: ["райфайзен", "райффайзен", "raiffaisen"],
    add_percent: 10,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "РСХБ": {
    aliases: ["рсхб", "россельхоз", "россельхозбанк"],
    add_percent: 10,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Сбербанк": {
    aliases: ["сбер", "сбербанк", "sber"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Т-Банк / Росбанк": {
    aliases: ["т банк", "т-банк", "t bank", "тинькофф", "тиньков", "тбанк", "т-банк", "росбанк", "т банк", "тинкофф", "tinkoff"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Тимер Банк": {
    aliases: ["тимер", "тимер банк"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "УБРИР": {
    aliases: ["убрир", "у б р и р", "ubr"],
    add_percent: null, // клиент вводит сам
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Уралсиб": {
    aliases: ["уралсиб"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Энергобанк": {
    aliases: ["энерго", "энергобанк", "энерго банк", "энергобанк", "энерго-банк"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  },

  "Юникредит Банк": {
    aliases: ["юникредит", "unicredit", "uni credit"],
    add_percent: 0,
    allow_discount_property: true,
    allow_discount_life: true,
    allow_discount_title: true
  }
};
