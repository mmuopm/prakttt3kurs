/* бургер-меню */

const burgerMenu = document.querySelector(".burger-menu");
const subMenu = document.querySelector(".sub-menu-414");

// Обработчик клика для открытия и закрытия подменю
burgerMenu.addEventListener("click", () => {
  subMenu.classList.toggle("activeSubmenu");
});

// Обработка ссылок внутри подменю
const submenuLinks = document.querySelectorAll(".sub-menu-414-links a");

submenuLinks.forEach((link) => {
  link.addEventListener(
    "click",
    (event) => {
      event.preventDefault(); // предотвращаем переход по ссылке
      subMenu.classList.remove("activeSubmenu"); // скрываем подменю setTimeout(() => {
      window.location.href = link.getAttribute("href"); // переход по ссылке
    },
    300
  ); // 300ms (время анимации)
});



/* авторизация и регистрация */

const menu = document.querySelector(".popup");
const openmenu = document.querySelector(".vhodd");
const closemenu = document.querySelector(".popup .x");

const menu2 = document.querySelector(".popup2");
const openmenu2 = document.querySelector(".open-registr");
const closemenu2 = document.querySelector(".popup2 .x");

const popups = document.querySelector(".popups");

// Открытие первого меню
openmenu.addEventListener("click", (e) => {
  e.preventDefault();
  popups.style.display = "flex"; // Показываем контейнер с попапами
  menu.classList.add("activ");
});

// Закрытие первого меню
closemenu.addEventListener("click", () => {
  menu.classList.remove("activ");
  if (!menu2.classList.contains("activ")) {
    popups.style.display = "none"; // Скрываем контейнер с попапами, если ни одно из меню не активно
  }
});

// Открытие второго меню (регистрация)
openmenu2.addEventListener("click", (e) => {
  e.preventDefault();
  menu.classList.remove("activ");
  popups.style.display = "flex"; // Показываем контейнер с попапами
  menu2.classList.add("activ");
});

// Закрытие второго меню
closemenu2.addEventListener("click", () => {
  menu2.classList.remove("activ");
  if (!menu.classList.contains("activ")) {
    popups.style.display = "none"; // Скрываем контейнер с попапами, если ни одно из меню не активно
  }
});

// Обработчик для кнопки "Авторизоваться"
document.querySelector(".open-request").addEventListener("click", () => {
  window.location.href = "../pages/request.html"; // Переход на страницу request
});

