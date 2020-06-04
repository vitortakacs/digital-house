const paginasArrimo = {
    cadastro: "Arrimo | Cadastro", cadastroDeUsuarios: "Arrimo | Cadastro de usuarios",
    encontreUmaLoja: "Arrimo | encontre uma loja", localizacao: "Arrimo | Localização"
};
  let titlePage = document.title;
  if (paginasArrimo.cadastroDeUsuarios === titlePage){
    var listaDeErro = selectId("erroList");
    verificador();
}
if(paginasArrimo.cadastro === titlePage){
      //reservado para codigo
}
//seletor de Id
function selectId(id){
    return document.getElementById(id);
}
function empty(input){
    return input.value.trim() === "";
}
function mensagemDeErro(mensagem){
    listaDeErro.innerHTML += "<li>" + mensagem +"</li>";
}
//validação de cadastro do consumidor
function verificador(){
    let formCadastroDeUsuario = selectId("cadastroDeUsuario");
    formCadastroDeUsuario.addEventListener("submit", function(evento){
        evento.preventDefault();
        listaDeErro.innerHTML = "";
        nomeDeUsuario.style = "none";
        email.style = "none";
        cep.style = "none";
        senha.style = "none";
        comfirmarSenha.style = "none";
        if(empty(selectId("nomeDeUsuario"))){
            mensagemDeErro("<b>nome de usuario</b> não preenchido!");
            nomeDeUsuario.style.border = "solid 2px #ff3737b3";
        }
        if(empty(selectId("email"))){
            mensagemDeErro("<b>Email</b> não preenchido!");
            email.style.border = "solid 2px #ff3737b3";
        }
        if(empty(selectId("cep"))){
            mensagemDeErro("<b>cep</b> não preenchido!");
            cep.style.border = "solid 2px #ff3737b3";
        }
        if(empty(selectId("senha"))){
            mensagemDeErro("<b>senha</b> não preenchido!");
            senha.style.border = "solid 2px #ff3737b3";
            comfirmarSenha.style.border = "solid 2px #ff3737b3";
        }
        else if(selectId("senha").value.length < 4){
            mensagemDeErro("<b>senha</b> muito curta!");
            senha.style.border = "solid 2px #ff3737b3";
            comfirmarSenha.style.border = "solid 2px #ff3737b3";
        }
        else if(empty(selectId("comfirmarSenha"))){
            mensagemDeErro("Comfirme sua <b>senha</b>!");
            comfirmarSenha.style.border = "solid 2px #ff3737b3";
        }
        else if(selectId("comfirmarSenha").value !== selectId("senha").value){
            mensagemDeErro("As <b>senhas</b> não conhecidem!");
            comfirmarSenha.style.border = "solid 2px #ff3737b3";
            senha.style.border = "solid 2px #ff3737b3";
        }
        if(listaDeErro.querySelectorAll("li").length > 0){
               
        }else {
            localStorage.setItem("cep", validarCep(selectId("cep").value));
            guardaDados();
            getEndereco();
            setTimeout(function(){
                redirecionamento();
            },1000);
        }
    });
//gurdar dados do uasuario no localStorage
function guardaDados(){
    let nomeDeUsuario = selectId("nomeDeUsuario").value;
    let email = selectId("email").value;
    let senha = selectId("senha").value;
    let dadosDoUsuario = {email:email, senha:senha};
    localStorage.setItem(nomeDeUsuario, JSON.stringify(dadosDoUsuario));
}
//limpa o cep deixando apenas os numeros  
function validarCep(cep){
    let cepValidado = "";
    for (var i = 0; i < cep.length; i++){
        if(cep[i] !== "-") {
            cepValidado += cep[i];
        }
    }
    return cepValidado;
}
//requisição para a API de via cep
function getEndereco(){
    axios.get('https://viacep.com.br/ws/' + localStorage.getItem("cep") + '/json')
      .then(function (rua){
          localStorage.setItem("rua", rua.data.logradouro);
      });
}
}//redirecionamento para a pagina encontre uma loja
function redirecionamento(){
    window.location.href = "file:///C:/Users/igoro/%C3%81rea%20de%20Trabalho/pi-digital-house/digital-house/html/encontreUmaLoja.html"
}