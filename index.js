const burger = document.querySelector(".nav-burger");
const navContainer = document.querySelector(".toggle-navbar-container");
const body = document.querySelector("body");
const impressumContainer = document.querySelector(".impressum-container");
const impressumLink = document.querySelector("#impressum");

//Mobile navbar
burger.addEventListener("click", () => {
  navContainer.classList.add("toggle-navbar-container-active");
  body.classList.add("stop-scroll");
});

navContainer.addEventListener("click", () => {
  navContainer.classList.remove("toggle-navbar-container-active");
  body.classList.remove("stop-scroll");
});

// Impressum
impressumLink.addEventListener("click", () => {
  impressumContainer.classList.toggle("impressum-active");
});
impressumContainer.addEventListener("click", () => {
  impressumContainer.classList.remove("impressum-active");
});
