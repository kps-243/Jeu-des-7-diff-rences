const canvas = document.querySelector("canvas");
const cxt = canvas.getContext("2d");

function validate() {
  cxt.fillStyle = "#008000";
  cxt.fillRect(10, 10, 20, 20);
}
