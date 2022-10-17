window.addEventListener("scroll", function () {
  const nav = this.document.querySelector("nav");
  nav.classList.toggle("nav__active", this.window.scrollY > 0);
});
