let botao = document.querySelector(".botao");
let mensagemDiv = document.querySelector("#conteudo");

botao.addEventListener('click', mostrarTexto)

function mostrarTexto() {
    mensagemDiv.innerHTML="Olá, tudo bem? Seja bem vindo ao meu infinito particular."

}
