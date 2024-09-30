let score = 0;
let energy = 100;
let recoverySpeed = 1; // Энергия восстанавливается на 1 в секунду
let profitPerClick = 1;

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
    score += profitPerClick; // Увеличиваем счёт на прибыль за клик
    scoreElement.textContent = score;
});

// Обработка покупки бустера
document.getElementById('buyBooster').addEventListener('click', function() {
    if (score >= 10) { // Примерная стоимость бустера
        score -= 10;
        profitPerClick += 1; // Увеличиваем прибыль за клик
        document.getElementById('profitPerClick').textContent = profitPerClick;
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
}

function loadData() {
    score = parseInt(localStorage.getItem('score')) || 0;
    energy = parseInt(localStorage.getItem('energy')) || 100;
    profitPerClick = parseInt(localStorage.getItem('profitPerClick')) || 1;
    scoreElement.textContent = score;
    document.getElementById('energy').textContent = energy;
    document.getElementById('profitPerClick').textContent = profitPerClick;
}

// Загружаем данные при запуске
loadData();
