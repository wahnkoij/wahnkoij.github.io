// scripts/script.js

// Ждём полной загрузки документа перед инициализацией событий
document.addEventListener('DOMContentLoaded', () => {
    console.log('Документ загружен');  // Проверка загрузки документа

    // Обработка кликов по ссылкам навигации
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault(); // Отменяем стандартное поведение ссылки

            const targetId = this.getAttribute('href'); // Получаем ID целевого элемента
            const target = document.querySelector(targetId); // Находим элемент по ID

            if (target) {  // Проверяем, существует ли целевой элемент
                target.scrollIntoView({ behavior: 'smooth' }); // Плавная прокрутка
            } else {
                console.warn(`Элемент с ID ${targetId} не найден.`); // Логирование ошибки
            }
        });
    });
});
