//Show Navbar
const nav = document.querySelector(".nav-menu");
const toggle = document.querySelector(".nav-toggle");
toggle.onclick = () => {
  nav.classList.toggle("show-nav");
};
//Remove bar
const navLink = document.querySelectorAll(".nav-link");
function linkAction() {
  nav.classList.remove("show-nav");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));
//change active color
