let area = document.querySelector("area");
let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
var actif = 0;
var victoire = 0;
btn1.addEventListener("click", () => {
  actif = 1;
  curseur.style.display = "block";
  bordure = "red";
});

btn21.addEventListener("click", () => {
  if (actif == 1) {
    btn1.style.border = "0px";
    btn21.style.border = "0px";
    victoire++;
    curseur.style.display = "none";
    btn1.style.transform = "scale(0.5)";
    btn21.style.transform = "scale(0.5)";
    actif = 0;
  }
  if (victoire == 4) {
    document.querySelector("#victoire").style.display = "block";
  }
});
