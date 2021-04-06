const btnWhite = document.getElementById("btnWhite");
const btnRed = document.getElementById("btnRed");
const btnGreen = document.getElementById("btnGreen");
const inner = document.getElementById("inner");
const washingMachine = document.getElementById("washingMachine");

btnRed.addEventListener("click", function () {
  document.getElementById("inner").style.webkitAnimationPlayState = "paused";
});
btnGreen.addEventListener("click", function () {
  document.getElementById("inner").style.animationDirection =
    "alternate-reverse";
  document.getElementById("inner").style.webkitAnimationPlayState = "running";
  document.getElementById("inner").style.animationDuration = "1s";
});
btnWhite.addEventListener("click", function () {
  document.getElementById("inner").style.animationDuration = "0.1s";
  document.getElementById("washingMachine").style.animationDuration = "0.8s";
  document.getElementById("washingMachine").style.animationDelay = "10s";
  document.getElementById("inner").style.webkitAnimationPlayState = "running";
});
