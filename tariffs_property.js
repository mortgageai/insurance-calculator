// ==========================
// tariffs_property.js — обновлённый, финальный
// ==========================

// Базовые тарифы имущества
const PROPERTY_TARIFFS = {
  base: {
    flat: 0.10,      // квартира
    house_brick: 0.18,
    house_wood: 0.43
  },

  // Дом.РФ — особый тариф квартиры
  "Дом.РФ": {
    flat: 0.144,
    house_brick: 0.18,
    house_wood: 0.43
  },

  // Банк СПБ — особые тарифы
  "Банк СПБ": {
    flat: 0.1,      // квартира 0,1%
    house_brick: 0.18,  // дом кирпич 0,18%
    house_wood: 0.43    // дом дерево 0,43%
  },

  // МКБ — особые тарифы
  "МКБ": {
    flat: 0.154,    // квартира 0,154%
    house_brick: 0.18,  // дом кирпич 0,18%
    house_wood: 0.43    // дом дерево 0,43%
  },

  // ГПБ — Газпромбанк (зависит от даты КД и комбинации рисков)
  "Газпромбанк": {
    // Старые тарифы (до 02.05.2024)
    old: {
      flat_with_life: 0.17,      // квартира + жизнь: 0,17%
      flat_alone: 0.204,         // квартира отдельно: 0,204%
      house_brick_with_life: 0.38,   // дом кирпич + жизнь: 0,38%
      house_brick_alone: 0.456,      // дом кирпич отдельно: 0,456%
      house_wood_with_life: 0.63,    // дом дерево + жизнь: 0,63%
      house_wood_alone: 0.756        // дом дерево отдельно: 0,756%
    },
    // Новые тарифы (после 02.05.2024)
    new: {
      flat_with_life: 0.231,      // квартира + жизнь: 0,231%
      flat_alone: 0.277,          // квартира отдельно: 0,277%
      house_brick_with_life: 0.517,   // дом кирпич + жизнь: 0,517%
      house_brick_alone: 0.62,       // дом кирпич отдельно: 0,62%
      house_wood_with_life: 0.857,    // дом дерево + жизнь: 0,857%
      house_wood_alone: 1.028        // дом дерево отдельно: 1,028%
    }
  },

  // ВТБ — новые тарифы (после 01.02.2025)
  "ВТБ": {
    flat: 0.24,        // квартира: 0,24%
    house_brick: 0.24, // дом кирпич: 0,24%
    house_wood: 0.43   // дом дерево: 0,43%
  }
};

// Специальная функция для ГПБ
function getGPBPropertyTariff(contractDate, withLifeInsurance, objectType) {
  // Определяем период тарифов
  const cutoffDate = new Date('2024-05-02');
  // Конвертируем DD.MM.YYYY в YYYY-MM-DD
  let contractDateObj;
  if (contractDate) {
    const parts = contractDate.split('.');
    if (parts.length === 3) {
      const isoDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
      contractDateObj = new Date(isoDate);
    } else {
      contractDateObj = new Date(contractDate);
    }
  }
  const useOldTariffs = contractDateObj < cutoffDate;

  const tariffPeriod = useOldTariffs ? 'old' : 'new';

  // Определяем ключ тарифа
  let tariffKey;
  if (objectType === 'flat') {
    tariffKey = withLifeInsurance ? 'flat_with_life' : 'flat_alone';
  } else if (objectType === 'house_brick') {
    tariffKey = withLifeInsurance ? 'house_brick_with_life' : 'house_brick_alone';
  } else if (objectType === 'house_wood') {
    tariffKey = withLifeInsurance ? 'house_wood_with_life' : 'house_wood_alone';
  } else {
    // Для других типов используем базовый тариф
    return PROPERTY_TARIFFS.base[objectType] || 0.10;
  }

  return PROPERTY_TARIFFS["Газпромбанк"][tariffPeriod][tariffKey];
}

// Если банк не указан в отдельном блоке → применяется base
function getPropertyTariff(bank, type, contractDate = null, withLifeInsurance = false) {
  // Специальная обработка для ГПБ
  if (bank === "Газпромбанк") {
    if (!contractDate) {
      // Если дата не указана, используем базовый тариф
      return PROPERTY_TARIFFS.base[type] || 0.10;
    }
    return getGPBPropertyTariff(contractDate, withLifeInsurance, type);
  }

  // Специальная обработка для ВТБ
  if (bank === "ВТБ") {
    if (contractDate) {
      const cutoffDate = new Date('2025-02-01');
      const parts = contractDate.split('.');
      let contractDateObj;
      if (parts.length === 3) {
        const isoDate = `${parts[2]}-${parts[1].padStart(2, '0')}-${parts[0].padStart(2, '0')}`;
        contractDateObj = new Date(isoDate);
      } else {
        contractDateObj = new Date(contractDate);
      }

      if (contractDateObj >= cutoffDate) {
        // Новые тарифы ВТБ (после 01.02.2025)
        return PROPERTY_TARIFFS["ВТБ"][type] || PROPERTY_TARIFFS.base[type];
      } else {
        // Старые тарифы ВТБ (до 01.02.2025) - базовые тарифы
        return PROPERTY_TARIFFS.base[type] || 0.10;
      }
    } else {
      // Если дата не указана, используем базовые тарифы
      return PROPERTY_TARIFFS.base[type] || 0.10;
    }
  }

  // Для остальных банков обычная логика
  if (PROPERTY_TARIFFS[bank] && PROPERTY_TARIFFS[bank][type] !== undefined) {
    return PROPERTY_TARIFFS[bank][type];
  }
  return PROPERTY_TARIFFS.base[type];
}

if (typeof window !== 'undefined') {
  window.PROPERTY_TARIFFS = PROPERTY_TARIFFS;
  window.getPropertyTariff = getPropertyTariff;
  window.getGPBPropertyTariff = getGPBPropertyTariff;
}

if (typeof module !== 'undefined') {
  module.exports = { PROPERTY_TARIFFS, getPropertyTariff, getGPBPropertyTariff };
}
