let cercle1 = document.querySelector(".cercle1");
let cercle2 = document.querySelector(".cercle2");
let cercle3 = document.querySelector(".cercle3");
let cercle4 = document.querySelector(".cercle4");
let cercle5 = document.querySelector(".cercle5");
let cercle12 = document.querySelector(".cercle1-2");
let cercle22 = document.querySelector(".cercle2-2");
let cercle32 = document.querySelector(".cercle3-2");
let cercle42 = document.querySelector(".cercle4-2");
let cercle52 = document.querySelector(".cercle5-2");

function circleAppear() {
  if (cercle1 || cercle12) {
    cercle1.style.opacity = "100%";
    cercle12.style.opacity = "100%";
  }
  if (cercle2 || cercle22) {
    cercle2.style.opacity = "100%";
    cercle22.style.opacity = "100%";
  }
}

// if ((p_evt = cercle3 || cercle32)) {
//   cercle3.style.opacity = "100%";
//   cercle32.style.opacity = "100%";
// }
// if ((p_evt = cercle4 || cercle42)) {
//   cercle4.style.opacity = "100%";
//   cercle42.style.opacity = "100%";
// }
// if ((p_evt = cercle5 || cercle52)) {
//   cercle5.style.opacity = "100%";
//   cercle52.style.opacity = "100%";
// }
