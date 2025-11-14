var moldura = document.getElementById("moldura");
var btnVoltar = document.getElementById("btnVoltar");
var btnAvancar = document.getElementById("btnAvancar");

var fotos = ["../images/1.png", "../images/2.png", "../images/3.png"];
var indice = 0;

// Inicializa o carrossel
window.onload = function() {
  btnAvancar.onclick = Avancar;
  btnVoltar.onclick = Voltar;
  MostrarFoto();

  // Troca automática a cada 5 segundos
  setInterval(Avancar, 5000);
};

function Voltar() {
  indice = (indice - 1 + fotos.length) % fotos.length;
  MostrarFoto();
}

function Avancar() {
  indice = (indice + 1) % fotos.length;
  MostrarFoto();
}

function MostrarFoto() {
  moldura.style.opacity = 0;

  setTimeout(() => {
    moldura.src = "imagem/" + fotos[indice];
    moldura.style.opacity = 1;
  }, 300);
}