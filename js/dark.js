/* темная тема */
function toggleTheme() {
  const htmlElement = document.documentElement;
  const isDarkTheme = htmlElement.classList.toggle("dark_style");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

// для применения сохр темы
function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark_style");
  } else {
    document.documentElement.classList.remove("dark_style");
  }
}

//применить при загрузке страницы
document.addEventListener("DOMContentLoaded", applyTheme);

// обработчик события для кнопки переключения темы (только на главной)
const toggleButton = document.getElementById("theme-toggle");
if (toggleButton) {
  toggleButton.addEventListener("click", toggleTheme);
}


/* темная тема */
function toggleTheme() {
  const htmlElement = document.documentElement;
  const isDarkTheme = htmlElement.classList.toggle("dark_style");
  localStorage.setItem("theme", isDarkTheme ? "dark" : "light");
}

// для применения сохр темы
function applyTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark_style");
  } else {
    document.documentElement.classList.remove("dark_style");
  }
}

//применить при загрузке страницы
document.addEventListener("DOMContentLoaded", applyTheme);

// обработчик события для кнопки переключения темы (только на главной)
const toggleButton2 = document.getElementById("theme-toggle2");
if (toggleButton2) {
  toggleButton2.addEventListener("click", toggleTheme);
}
