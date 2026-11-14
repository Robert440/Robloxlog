const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');

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

// Force browsers and intermediaries to re-fetch the page and its original visual assets.
app.use((req, res, next) => {
    if (['/', '/index.html', '/style.css', '/bg.jpg'].includes(req.path)) {
        res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
        res.set('Pragma', 'no-cache');
        res.set('Expires', '0');
    }
    next();
});

// The current bg.jpg contains PNG data despite its .jpg filename.
// Serve the same file with the correct MIME type; do not alter the image itself.
app.get('/bg.jpg', (req, res, next) => {
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    res.type('png');
    const stream = fs.createReadStream(path.join(__dirname, 'bg.jpg'));
    stream.on('error', next);
    stream.pipe(res);
});

// Serve the original site files, including the original bg.jpg and style.css.
app.use(express.static(__dirname));

// Start server on the port provided by Render.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
