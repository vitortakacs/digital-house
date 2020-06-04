var pagina = document.title
var errolist = selectId("erroList");


validar();
function selectId(id) {
    return document.getElementById(id);
}
function empty(input) {
    return input.value.trim() === "";
}
function mensagemDeErro(mensagem){
    errolist.innerHTML += "<li>" + mensagem +"</li>";
}
function validar(){
    let formContateNos = selectId("contateNos");
    formContateNos.addEventListener("submit", function(evento){
        evento.preventDefault();
        errolist.innerHTML = "";
        nome.style.border = "none";
        email.style.border = "none";
        mensagem.style.border = "none";
        if(empty(selectId("nome"))) {
            mensagemDeErro("campo <b>nome</b> não preenchido!")
            nome.style.border = "solid 2px #ff3737b3";
        }
        if(empty(selectId("email"))){
            mensagemDeErro("campo <b>email</b> não preenchido!")
            email.style.border = "solid 2px #ff3737b3";
        }
        if(empty( selectId("mensagem"))){
            mensagemDeErro("campo <b>mensagem</b> não preenchido!")
            mensagem.style.border = "solid 2px #ff3737b3";
        }
        if(errolist.querySelectorAll("li").length > 0) {
            evento.preventDefault()
            errolist.hidden = "";
        } else {
            alert("Mensagem enviada!")
        }
    })
}