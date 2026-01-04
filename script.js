let wheels = document.querySelectorAll(".wheel");

window.addEventListener("scroll", () => {
  let speed = window.scrollY / 5;

  wheels.forEach(wheel => {
    wheel.style.transform = `rotate(${speed}deg)`;
  });
});
