let instagram = document.querySelector(".instagram");
let twitter = document.querySelector(".twitter");
let linkedin = document.querySelector(".linkedin");

instagram.addEventListener("mouseover", () => {
  instagram.src = "../images/mapsection-icons/instagram1.png";
  instagram.style.width = "2.5rem";
  instagram.style.transition = "all 0.4s ease-in-out";
});
instagram.addEventListener("mouseout", () => {
  instagram.src = "../images/mapsection-icons/instagram.png";
  instagram.style.width = "1.8rem";
  instagram.style.transition = "all 0.4s ease-in-out";
});

twitter.addEventListener("mouseover", () => {
  twitter.src = "../images/mapsection-icons/twitter1.png";
  twitter.style.width = "2.5rem";
  twitter.style.transition = "all 0.4s ease-in-out";
});
twitter.addEventListener("mouseout", () => {
  twitter.src = "../images/mapsection-icons/twitter-sign.png";
  twitter.style.width = "1.8rem";
  twitter.style.transition = "all 0.4s ease-in-out";
});

linkedin.addEventListener("mouseover", () => {
  linkedin.src = "../images/mapsection-icons/linkedin.png";
  linkedin.style.width = "2.5rem";
  linkedin.style.transition = "all 0.4s ease-in-out";
});
linkedin.addEventListener("mouseout", () => {
  linkedin.src = "../images/mapsection-icons/linkedin-logo.png";
  linkedin.style.width = "1.8rem";
  linkedin.style.transition = "all 0.4s ease-in-out";
});
