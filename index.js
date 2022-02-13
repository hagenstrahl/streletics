const burger = document.querySelector(".nav-burger");
const navContainer = document.querySelector(".toggle-navbar-container");

burger.addEventListener("click", () => {
  navContainer.classList.add("toggle-navbar-container-active");
});

navContainer.addEventListener("click", () => {
  navContainer.classList.remove("toggle-navbar-container-active");
});
