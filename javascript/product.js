let div = document.querySelectorAll(".tilt");
let maxTilt = 30; // Maximum tilt angle in degrees

div.forEach((div) => {
  div.addEventListener("mousemove", handleTilt);

  function handleTilt(event) {
    const { offsetWidth: width, offsetHeight: height } = div;
    const { offsetX: x, offsetY: y } = event;

    const moveX = ((x / width - 0.5) * maxTilt).toFixed(2);
    const moveY = ((y / height - 0.5) * maxTilt).toFixed(2);

    div.style.transform = `perspective(500px) rotateX(${moveY}deg) rotateY(${-moveX}deg)`;
  }

  div.addEventListener("mouseleave", () => {
    div.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg)";
  });
});
