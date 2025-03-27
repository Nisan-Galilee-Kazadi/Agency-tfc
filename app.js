const buttonMenu = document.getElementById("menuIcon");

const menuList = document.getElementById("menuList");

function openMenu() {
  if (menuList.classList.contains("open")) {
    menuList.classList.remove("open");
  } else {
    menuList.classList.add("open");
  }
}

buttonMenu.addEventListener("click", function () {
  openMenu();
  changeButton();
});

const menuOpen = document.getElementById("open-icon");
menuOpen.style.display = "none";

const menuClose = document.getElementById("close-icon");
menuClose.style.display = "block";

const contenair = document.querySelector(".menu");

function changeButton() {
  if (menuOpen.style.display !== "none") {
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  } else {
    menuOpen.style.display = "block";
    menuClose.style.display = "none";
  }
}

const navBar = document.getElementById("navBar");

function scrollBar() {
  if (window.scrollY >= 300) {
    navBar.classList.add("scroller");
  } else {
    navBar.classList.remove("scroller");
  }
}

window.addEventListener("scroll", scrollBar);
