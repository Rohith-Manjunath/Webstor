let logo = document.querySelector(".logo");
let textLogo = document.querySelector(".textLogo");
let hamburger = document.querySelector(".hamburger");
let navContainerRight = document.querySelector(".navContainerRight");
let bool = false;

logo.addEventListener("mouseover", () => {
  textLogo.style.transform = "translateX(0px)";
  textLogo.style.transition = "all 1s";

  logo.style.transform = "rotate(300deg)";
  logo.style.cursor = "pointer";
  logo.style.transition = "all 0.9s";

  textLogo.style.opacity = "1";
});

logo.addEventListener("mouseout", () => {
  logo.style.transform = "rotate(-300deg)";

  textLogo.style.transform = "translateX(-20px)";
  textLogo.style.opacity = "0";
});

hamburger.addEventListener("click", () => {
  if (bool) {
    navContainerRight.style.transform = "translateX(-100%)";
    navContainerRight.style.transition = "all 0.4s ease-in-out";
    hamburger.style.transform = "rotate(0deg)";
  } else {
    navContainerRight.style.transform = "translateX(0%)";
    navContainerRight.style.transition = "all 0.4s ease-in-out";
    hamburger.style.transform = "rotate(90deg)";
    hamburger.style.transition = "all 0.4s ease-in-out";
  }

  bool = !bool;
});
