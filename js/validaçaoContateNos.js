var pagina = document.title
function selectId(id) {
    return document.getElementById(id);
}
function empty(input) {
    return input.value.trim() === "";
}
function mensagemDeErro(mensagem){
    listaDeErro.innerHTML += "<li>" + mensagem +"</li>";
}
let formContateNos = selectId("contateNos");
let nome = selectId("nome");
let email = selectId("email");
let mensagem = selectId("mensagem");
let listaDeErro = document.querySelector("#erroList ul");
let errolist = selectId("erroList");


formContateNos.addEventListener("submit", function(evento){
    listaDeErro.innerHTML = "";
    nome.style.border = "none";
    email.style.border = "none";
    mensagem.style.border = "none";
    if(empty(nome)) {
        mensagemDeErro("campo <b>nome</b> não preenchido!")
        nome.style.border = "solid 2px #ff3737b3";
    }
    if(empty(email)){
        mensagemDeErro("campo <b>email</b> não preenchido!")
        email.style.border = "solid 2px #ff3737b3";
    }
    if(empty(mensagem)){
        mensagemDeErro("campo <b>mensagem</b> não preenchido!")
        mensagem.style.border = "solid 2px #ff3737b3";
    }
    if(listaDeErro.querySelectorAll("li").length > 0) {
        evento.preventDefault()
        errolist.hidden = "";
    } else {
        alert("Mensagem enviada!")
    }
})