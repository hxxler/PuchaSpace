let score = 0;
let energy = 100;
let recoverySpeed = 1; // Энергия восстанавливается на 1 в секунду
let profitPerClick = 2; // Начальная прибыль за клик
let boosterCost = 2; // Начальная стоимость бустера
let energyConsumptionPerClick = 2; // Энергия, которую отнимает один клик

const scoreElement = document.getElementById('score');
const clickImage = document.getElementById('clickImage');

// Восстановление энергии
setInterval(() => {
    if (energy < 100) {
        energy += recoverySpeed;
        document.getElementById('energy').textContent = energy.toFixed(0);
    }
}, 1000);

// Обработка кликов по изображению
clickImage.addEventListener('click', function() {
    if (energy >= energyConsumptionPerClick) { // Проверяем, достаточно ли энергии
        score += profitPerClick; // Увеличиваем счёт на прибыль за клик
        energy -= energyConsumptionPerClick; // Уменьшаем энергию
        scoreElement.textContent = score;
        document.getElementById('energy').textContent = energy.toFixed(0);
    } else {
        alert('Недостаточно энергии для клика!');
    }
});

// Обработка покупки бустера
document.getElementById('buyBooster').addEventListener('click', function() {
    if (score >= boosterCost) { // Проверяем, достаточно ли очков
        score -= boosterCost; // Уменьшаем счёт на стоимость бустера
        profitPerClick *= 2; // Увеличиваем прибыль за клик в 2 раза
        energyConsumptionPerClick = 2; // Энергия по-прежнему 2, это можно изменить, если нужно
        boosterCost = Math.pow(boosterCost, 2); // Увеличиваем стоимость бустера (возводим в квадрат)
        
        // Обновляем элементы на странице
        document.getElementById('profitPerClick').textContent = profitPerClick;
        document.getElementById('boosterCost').textContent = boosterCost;
        scoreElement.textContent = score;
    } else {
        alert('Недостаточно очков для покупки бустера!');
    }
});

// Функция переключения вкладки Boosters
function toggleBoosters() {
    const boosters = document.getElementById('boosters');
    boosters.style.display = boosters.style.display === 'none' ? 'block' : 'none';
}

// Кнопка для переключения вкладки
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Переключить Boosters';
toggleButton.addEventListener('click', toggleBoosters);
document.body.appendChild(toggleButton);

// Сохранение и загрузка данных
function saveData() {
    localStorage.setItem('score', score);
    localStorage.setItem('energy', energy);
    localStorage.setItem('profitPerClick', profitPerClick);
    localStorage.setItem('boosterCost', boosterCost);
}

function loadData() {
    score = parseInt(localStorage.getItem('score')) || 0;
    energy = parseInt(localStorage.getItem('energy')) || 100;
    profitPerClick = parseInt(localStorage.getItem('profitPerClick')) || 2; // Начальное значение
    boosterCost = parseInt(localStorage.getItem('boosterCost')) || 2; // Начальное значение
    scoreElement.textContent = score;
    document.getElementById('energy').textContent = energy;
    document.getElementById('profitPerClick').textContent = profitPerClick;
    document.getElementById('boosterCost').textContent = boosterCost;
}

// Загружаем данные при запуске
loadData();
