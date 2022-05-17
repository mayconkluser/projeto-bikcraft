// ATIVAR LINKS DO MENU -----------------------------------
const links = document.querySelectorAll(".header-menu a");
function ativaLink(link) {
  const url = window.location.href;
  const href = link.href;
  if (url.includes(href)) {
    link.classList.add("ativo");
  }
}
links.forEach(ativaLink);

// ATIVAR ITENS DO ORÇAMENTO -----------------------------------
const parametros = new URLSearchParams(location.search);
function ativaProduto(parametro) {
  const elemento = document.getElementById(parametro);
  if (elemento) {
    elemento.checked = true;
  }
}
parametros.forEach(ativaProduto);

// PERGUNTAS FREQUENTES -----------------------------------
const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", ativarPergunta);
}
perguntas.forEach(eventosPerguntas);

console.log(perguntas);

// GALERIA DE BICICLETA -----------------------------------
const galeria = document.querySelectorAll(".bicicleta-img img");
const galeriaContainer = document.querySelector(".bicicleta-img");
function trocarImg(event) {
  const img = event.currentTarget;
  const media = window.matchMedia("(min-width: 1000px)").matches;
  console.log(media);
  if (media) {
    galeriaContainer.prepend(img);
  }
}
function eventosGaleria(img) {
  img.addEventListener("click", trocarImg);
}
galeria.forEach(eventosGaleria);
console.log(galeria, galeriaContainer);

// ANIMAÇÃO -----------------------------------
if (window.SimpleAnime) {
  new SimpleAnime();
}
