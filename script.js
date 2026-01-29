const heightOutput = document.querySelector("#height");
const widthOutput = document.querySelector("#width");

function cambioColor() {
  document.body.style.backgroundColor = `rgb(${window.innerWidth % 256}, ${window.innerHeight % 256}, 256)`;

  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = cambioColor;

cambioColor();
