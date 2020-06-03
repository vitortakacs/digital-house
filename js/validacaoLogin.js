function selectId(id) {
    return document.getElementById(id);
}
function empty(input) {
    return input.value.trim() === "";
}
function mensagemDeErro(){
    listaDeErro.innerHTML += "<li></b>Usuario<b> ou <b>Senha</b> invalido!</li>";
    usuario.style.border = "solid 2px #ff3737b3";
    senha.style.border = "solid 2px #ff3737b3";
}

let usuario = selectId("nomeDeUsuario");
let senha = selectId("senha")
let listaDeErro = document.querySelector("#erroList ul");

let loginBtn = selectId("loginBtn");

loginBtn.addEventListener("click", function(){
    listaDeErro.innerHTML = "";
    usuario.style.border = "none";
    senha.style.border = "none";
    if(empty(usuario)) {
        mensagemDeErro()
    }else if(empty(senha)) {
        mensagemDeErro()
    } else {
        window.location.href = "file:///C:/Users/igoro/%C3%81rea%20de%20Trabalho/pi-digital-house/digital-house/html/encontreUmaLoja.html"
    }
})