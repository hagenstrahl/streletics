const burger = document.querySelector(".nav-burger");
const navContainer = document.querySelector(".toggle-navbar-container");
const body = document.querySelector("body");
console.log(body);

burger.addEventListener("click", () => {
  navContainer.classList.add("toggle-navbar-container-active");
  body.classList.add("stop-scroll");
});

navContainer.addEventListener("click", () => {
  navContainer.classList.remove("toggle-navbar-container-active");
  body.classList.remove("stop-scroll");
});
