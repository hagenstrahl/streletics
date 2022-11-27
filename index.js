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

const age = document.querySelector("#age");
const birthdate = new Date("1998-03-31");
const today = new Date();
const years = today.getFullYear() - birthdate.getFullYear();
if (
  today.getMonth() < birthdate.getMonth() ||
  (today.getMonth() == birthdate.getMonth() &&
    today.getDate() < birthdate.getDate())
) {
  age.innerHTML = years - 1;
} else {
  age.innerHTML = years;
}
