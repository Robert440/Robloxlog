const express = require('express');
const app = express();
const path = require('path');

app.disable('x-powered-by');
app.set('trust proxy', true);

// Login collection is disabled. Request bodies are not parsed or logged.
app.all('/login', (_req, res) => {
    res.set('Cache-Control', 'no-store');
    res.status(410).send('Демо-страница не выполняет вход. Используйте официальный Roblox: https://www.roblox.com/login');
});

// Do not serve the old client script that submits account credentials.
app.all('/script.js', (_req, res) => {
    res.set('Cache-Control', 'no-store');
    res.status(410).send('Отправка формы отключена.');
});

// Serve the original site files, including the original bg.jpg and style.css.
app.use(express.static(__dirname));

// Start server on the port provided by Render.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
