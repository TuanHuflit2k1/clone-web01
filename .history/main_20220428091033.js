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
function colorLink() {
  if (navLink) {
    navLink.forEach((n) => n.classList.remove("active"));
    this.classList.add("active");
  }
}
navLink.forEach((l) => l.addEventListener("click", colorLink));
