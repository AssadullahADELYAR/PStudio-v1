const btnNav = document.querySelector(".nav-btn");
const header = document.querySelector(".header");

btnNav.addEventListener("click", () => {
  header.classList.toggle("nav-open");
  console.log("test");
});
