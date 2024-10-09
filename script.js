// console.log("Hello")
let clientSection = document.getElementById("client");

document.addEventListener("scroll", () => {
  // alert("Loading")
});

// Hamburger menu
const menuIcon = document.getElementById("menu_img");

let menuIconOriginal = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
  menuIconOriginal.src = "./assets/images/icon/svg/cancel.svg";
});
