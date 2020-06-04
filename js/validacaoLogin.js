var listaDeErro = selectId("erroList");
verificador();
function verificador(){
    let loginBtn = selectId("loginBtn");
    loginBtn.addEventListener("click", function(){
        listaDeErro.innerHTML = "";
        nomeDeUsuario.style.border = "none";
        senha.style.border = "none";
        if(empty(selectId("nomeDeUsuario"))){
            mensagemDeErro("Digite seu </b>Usuario<b>!");
            nomeDeUsuario.style.border = "solid 2px #ff3737b3";
        }
        if(empty(selectId("senha"))){
            mensagemDeErro("Digite sua </b>Senha<b>!");
            senha.style.border = "solid 2px #ff3737b3";
        }
        else if(localStorage.getItem(selectId("nomeDeUsuario").value)=== null){
            mensagemDeErro("</b>Usuario<b> ou <b>Senha</b> invalida!");
        }
        else if(!verificarSenha()){
            mensagemDeErro("</b>Usuario<b> ou <b>Senha</b> invalida!");
            nomeDeUsuario.style.border = "solid 2px #ff3737b3";
            senha.style.border = "solid 2px #ff3737b3";
        }
        else{
            redirecionamento();
        }
    })
}
function verificarSenha(){
    let senhaDoUsuario = JSON.parse(localStorage.getItem(selectId("nomeDeUsuario").value)).senha;
    return senhaDoUsuario === selectId("senha").value;
}
function mensagemDeErro(mensagem){
    listaDeErro.innerHTML += "<li>" + mensagem +"</li>";
}
function selectId(id) {
    return document.getElementById(id);
}
function empty(input) {
    return input.value.trim() === "";
}
function redirecionamento(){
    window.location.href = "file:///C:/Users/igoro/%C3%81rea%20de%20Trabalho/pi-digital-house/digital-house/html/encontreUmaLoja.html"
}