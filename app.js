let img = document.querySelector("img");
let cercle1 = document.querySelector(".cercle1");
var actif = 0;
var victoire = 0;

function circleAppear() {
  actif++;
  if (actif == 1) {
    victoire++;
    cercle1.style.display = "block";
    actif = 0;
  }
  console.log("bonjour");
}
