* {
    box-sizing: border-box;
}

html,
body {
    width: 100%;
    min-height: 100%;
    margin: 0;
}

body {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 15px;
    background-color: #101214;
    background-image: url("bg.jpg");
    background-size: cover;
    background-position: center; /* На телефоне фон будет ровно по центру */
    background-repeat: no-repeat;
    font-family: Arial, Helvetica, sans-serif;
    color: #f7f8fb;
}

.login-card {
    width: 485px;
    max-width: calc(100vw - 30px);
    min-height: 560px;
    padding: 18px 15px 16px;
    border: 1px solid #272930;
    border-radius: 8px; /* Чуть скруглил углы для красоты */
    background: #272930;
    box-shadow: 0 20px 54px rgba(0, 0, 0, 0.58);
}

.login-card h1 {
    margin: 0 0 10px;
    color: #fafbff;
    font-size: 32px;
    font-weight: 750;
    line-height: 1.15;
    text-align: center;
}

.demo-fields {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.demo-input {
    display: block;
    width: 100%;
    height: 41px;
    padding: 0 15px;
    border: 1px solid #4b505c;
    border-radius: 10px;
    outline: none;
    background: #383b44;
    color: #f7f8fb;
    font: 16px Arial, Helvetica, sans-serif;
    transition: border-color 160ms ease, background-color 160ms ease, box-shadow 160ms ease;
}

.demo-input::placeholder {
    color: #e0e2e9;
    opacity: 1;
}

.demo-input:focus {
    border-color: #aeb5c6;
    background: #3d4049;
    box-shadow: 0 0 0 3px rgba(210, 216, 230, 0.1);
}

.demo-submit {
    width: 100%;
    min-height: 41px;
    margin-top: -3px;
    border: 1px solid #d7d9df;
    border-radius: 10px;
    background: transparent;
    color: #d7d9e0;
    font: 16px Arial, Helvetica, sans-serif;
    cursor: pointer;
    transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.demo-submit:hover {
    background: #353841;
    color: #ffffff;
}

.demo-submit:active,
.demo-action:active {
    transform: translateY(1px);
}

.demo-submit:focus-visible,
.demo-action:focus-visible,
.demo-link:focus-visible {
    outline: 2px solid #ffffff;
    outline-offset: 3px;
}

.demo-help {
    min-height: 20px;
    margin: 16px 0 0;
    color: #f0f1f5;
    font-size: 16px;
    line-height: 1.4;
    text-align: center;
}

.demo-divider {
    height: 1px;
    margin: 19px 0 15px;
    border: 0;
    background: #41444d;
}

.demo-actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.demo-action {
    width: 100%;
    min-height: 43px;
    padding: 7px 10px;
    border: 0;
    border-radius: 10px;
    background: #3b3e48;
    color: #f4f5f8;
    font: 16px Arial, Helvetica, sans-serif;
    cursor: pointer;
    transition: background-color 160ms ease, transform 160ms ease;
}

.demo-action:hover {
    background: #454954;
}

.demo-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 7px 12px;
    margin-top: 23px;
    color: #f0f1f5;
    font-size: 15px;
    text-align: center;
}

.demo-link {
    padding: 3px 0;
    border: 0;
    background: transparent;
    color: #ffffff;
    font: inherit;
    text-decoration: underline;
    text-underline-offset: 3px;
    cursor: pointer;
}

.demo-link:hover {
    color: #d6dbe8;
}

/* =========================================
   ОПТИМИЗАЦИЯ ПОД МОБИЛЬНЫЕ ТЕЛЕФОНЫ
   ========================================= */
@media (max-width: 520px) {
    body {
        padding: 15px 10px;
        align-items: center; /* Держим по центру по вертикали */
    }

    .login-card {
        width: 100%;
        max-width: 100%;
        min-height: auto; /* Убираем жесткую высоту, чтобы карточка подстраивалась */
        padding: 24px 16px 20px;
        border-radius: 12px; /* На телефонах скругленные углы смотрятся лучше */
        margin: 0 10px; /* Небольшие отступы по бокам, чтобы не прилипало */
    }

    .login-card h1 {
        font-size: 26px; /* Уменьшили заголовок */
        margin-bottom: 20px;
    }

    /* Уменьшаем шрифт в инпутах, чтобы текст "Имя пользователя/Электронная почта" влезал */
    .demo-input {
        font-size: 13px;
        height: 44px;
        padding: 0 12px;
    }

    .demo-submit {
        font-size: 15px;
        min-height: 44px;
    }

    .demo-help {
        font-size: 14px;
        margin-top: 12px;
    }

    .demo-action {
        font-size: 14px;
        min-height: 44px;
        padding: 7px 10px;
    }

    .demo-footer {
        gap: 8px 10px;
        margin-top: 20px;
        font-size: 14px;
    }
}
