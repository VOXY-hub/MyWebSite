// Додаємо ефект плавного завантаження сторінки
window.onload = () => {
    document.body.classList.add('fade-in');
};

// Плавний вихід перед переходом на іншу сторінку
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Зупиняємо стандартний перехід
        const href = link.getAttribute('href'); // Отримуємо адресу

        document.body.classList.remove('fade-in'); // Зворотний ефект
        setTimeout(() => {
            window.location.href = href;
        }, 1000); // Затримка на 1 секунду
    });
});
