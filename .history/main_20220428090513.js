//Show Navbar
const nav = document.querySelector(".nav-menu");
const toggle = document.querySelector(".nav-toggle");
toggle.onclick = () => {
  nav.classList.toggle("show-nav");
};
//Remove bar
const navLink = document.querySelector(".nav-link");
function linkAction() {
  const navMenu = document.querySelector(".nav-menu");
  navMenu.classList.remove("show-nav");
}

