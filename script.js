document.addEventListener("DOMContentLoaded", function () {
    let typed = new Typed("#typed-output", {
        strings: [
            "привет, я Ситора",
            "я уже давно хожу в айти и иду к своей цели стать программистом",
            "я изучаю разные библиотеки и веб-сайты",
            "пробую писать свой код и делать проекты",
            "добро пожаловать на мою страничку!"
        ],
        typeSpeed: 45,
        backSpeed: 25,
        backDelay: 2000,
        startDelay: 500,
        loop: true,
        showCursor: true,
        cursorChar: "_"
    });
});