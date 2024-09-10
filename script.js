const numeratorInput = document.getElementById('numerator');
const denominatorInput = document.getElementById('denominator');
const divideBtn = document.getElementById('divideBtn');
const resultDiv = document.getElementById('result');
let timeout;

// Функция деления чисел
function divideNumbers() {
  clearTimeout(timeout); // Сбрасываем таймер при взаимодействии пользователя
  const numerator = parseFloat(numeratorInput.value);
  const denominator = parseFloat(denominatorInput.value);

 // Проверка на корректность ввода
  if (isNaN(numerator)  isNaN(denominator)  denominator === 0) {
    handleInvalidInput();
    return;
  }

  const result = numerator / denominator;
  resultDiv.textContent = Результат: ${result};
}

// Обработчик некорректного ввода
function handleInvalidInput() {
  resultDiv.textContent = 'Некорректные значения! Пожалуйста, введите числительный и знаменательный.';
  numeratorInput.classList.add('invalid');
  denominatorInput.classList.add('invalid');

  // Убираем подсветку через 5 секунд
  setTimeout(() => {
    numeratorInput.classList.remove('invalid');
    denominatorInput.classList.remove('invalid');
  }, 5000);
}

// Обработчик нажатия кнопки "Делить"
divideBtn.addEventListener('click', divideNumbers);

// Обработчик таймера для веселого сообщения
function displayFunMessage() {
  resultDiv.innerHTML = '<img src="fun_image.jpg" alt="Fun image">';
}

// Установка таймера на 1 минуту бездействия пользователя
function startTimer() {
  timeout = setTimeout(displayFunMessage, 60000); // 60000 мс = 1 минута
}

// Запуск таймера при загрузке страницы
startTimer();

// Обновление таймера при взаимодействии пользователя
document.addEventListener('mousemove', startTimer);
document.addEventListener('keydown', startTimer);