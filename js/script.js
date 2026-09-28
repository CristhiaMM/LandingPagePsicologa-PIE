// Zapp (55 + DDD + numero, sem caracter especial)
var numeroWhatsApp = "5545999999999";


var botaoMenu = document.getElementById("botao-menu");
var menu = document.getElementById("menu");

botaoMenu.addEventListener("click", function () {
  menu.classList.toggle("aberto");
});

// Fecha o menu quando clica em um link (só no celular)
var linksMenu = menu.querySelectorAll("a");
for (var i = 0; i < linksMenu.length; i++) {
  linksMenu[i].addEventListener("click", function () {
    menu.classList.remove("aberto");
  });
}


var botoesPergunta = document.querySelectorAll(".pergunta-botao");

for (var j = 0; j < botoesPergunta.length; j++) {
  botoesPergunta[j].addEventListener("click", function () {
    var pergunta = this.parentElement;
    pergunta.classList.toggle("aberta");
  });
}


var formulario = document.getElementById("formulario-contato");
var campoNome = document.getElementById("nome");
var campoTelefone = document.getElementById("telefone");
var campoArea = document.getElementById("area");
var campoMensagem = document.getElementById("mensagem");
var avisoErro = document.getElementById("erro-formulario");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault(); // impede o envio normal do formulário

  var nome = campoNome.value.trim();

  if (nome === "") {
    avisoErro.style.display = "block";
    campoNome.focus();
    return;
  }

  avisoErro.style.display = "none";

  var texto = "Olá! Me chamo " + nome + ".";

  if (campoArea.value !== "") {
    texto += " Tenho interesse em: " + campoArea.value + ".";
  }
  if (campoMensagem.value.trim() !== "") {
    texto += " " + campoMensagem.value.trim();
  }

  var link = "https://wa.me/" + numeroWhatsApp + "?text=" + encodeURIComponent(texto);
  window.open(link, "_blank");
});
