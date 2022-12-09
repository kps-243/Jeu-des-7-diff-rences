// Récupération des canvas
let canvas1 = document.getElementById("canvas1");
let canvas2 = document.getElementById("canvas2");

// Récupération des contextes des canvas
let ctx1 = canvas1.getContext("2d");
let ctx2 = canvas2.getContext("2d");

// Dessin de l'image de départ sur le premier canvas
let img1 = new Image();
img1.src = "/img/diff1.jpg";

let img2 = document.getElementById("diff2");

// img2.addEventListener("load", () => affiche);
// function affiche() {
//   ctx2.drawImage(img2, 50, 25, 500, 500);
// }

img1.onload = function () {
  ctx1.drawImage(img1, 0, 0);
  canvas1.width = 300;
  canvas1.height = 300;
};

// Taille de l'image dans la même place que le canva

// img1.width = canvas1.width;
// img2.width = canvas2.width;

// Fonction pour détecter les différences entre les deux images
function findDifferences() {
  // Récupération des données des pixels des deux images
  let imgData1 = ctx1.getImageData(0, 0, canvas1.width, canvas1.height);
  let imgData2 = ctx2.getImageData(0, 0, canvas2.width, canvas2.height);
  let pixels1 = imgData1.data;
  let pixels2 = imgData2.data;

  // Boucle sur les pixels des deux images pour détecter les différences
  for (let i = 0; i < pixels1.length; i += 4) {
    if (
      pixels1[i] != pixels2[i] ||
      pixels1[i + 1] != pixels2[i + 1] ||
      pixels1[i + 2] != pixels2[i + 2]
    ) {
      // Si une différence est détectée, dessiner un cercle rouge sur le point en question sur les deux canvas
      ctx1.beginPath();
      ctx1.arc(
        Math.floor(i / 4) % canvas1.width,
        Math.floor(i / 4 / canvas1.width),
        5,
        0,
        2 * Math.PI
      );
      ctx1.fillStyle = "red";
      ctx1.fill();

      ctx2.beginPath();
      ctx2.arc(
        Math.floor(i / 4) % canvas2.width,
        Math.floor(i / 4 / canvas2.width),
        5,
        0,
        2 * Math.PI
      );
      ctx2.fillStyle;
    }
  }
}
