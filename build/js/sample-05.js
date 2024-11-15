let menuInit = () => {
  const menuIcon = document.querySelector("#menu-icon");
  const mobileMenu = document.querySelector("#mobile-menu");
  let active = false;
  menuIcon.addEventListener("click", function () {
    // mobileMenu.classList.toggle("hidden");
    // mobileMenu.classList.toggle("-left-[500px]");
    // mobileMenu.classList.toggle("left-0");
    if (!active) {
      mobileMenu.style.left = 0;
      active = true;
    } else if (active) {
      mobileMenu.style.left = "-1500px";
      active = false;
    }
  });
};
document.addEventListener("DOMContentLoaded", menuInit);
