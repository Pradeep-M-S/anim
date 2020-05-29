const hamburger = document.querySelector(".hamburger");
const navlinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const line = document.querySelectorAll(".line");

hamburger.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  line.classList.toggle("open");
});
