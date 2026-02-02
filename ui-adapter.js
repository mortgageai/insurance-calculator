// ui-adapter.js

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("calculate-btn");
  const input = document.getElementById("input-area");

  btn.addEventListener("click", async () => {
    const raw = input.value.trim();

    // Проверка на пустой запрос
    if (raw.length < 5) {
      displayPremiumOutput("<b>Ошибка:</b> Пожалуйста, введите корректный запрос.");
      return;
    }

    try {
      // Отправляем запрос к GPT-Neo и получаем ответ
      const gptResponse = await handleClientRequest(raw);

      // Выводим ответ от GPT-Neo в интерфейс
      displayPremiumOutput(gptResponse);
    } catch (e) {
      displayPremiumOutput("<b>Ошибка:</b><br>" + e.message);
    }
  });

  console.log("UI адаптер успешно инициализирован");
});

// Функция для отображения результата
function displayPremiumOutput(text) {
  const outputElement = document.getElementById('gptResponse');
  outputElement.innerHTML = text;
}
