const paginasArrimo = {
    cadastro: "Arrimo | Cadastro", cadastroDeUsuarios: "Arrimo | Cadastro de usuarios",
    encontreUmaLoja: "Arrimo | encontre uma loja", localizacao: "Arrimo | Localização"
};
let titlePage = document.title;
  
if(paginasArrimo.encontreUmaLoja === titlePage) {
    inserirRua();
}
if(paginasArrimo.localizacao === titlePage) {
    getCep();
    getPosition();
}
//seletor de Id
function selectId(id) {
    return document.getElementById(id);
} 
//pagina localisão
function getCep() {
    let cepInput = selectId("cep");
    let setaSubimit = selectId("setaEnvir");
    setaSubimit.addEventListener("click", function(){
        validarCep(cepInput.value);
        getEndereco()
        redirecionamento();
    })
    cep.addEventListener("keypress", function (evento) {
        if (evento.key == "Enter") {
            validarCep(cepInput.value);
            getEndereco()
            redirecionamento();
        }
    });
}
function validarCep(cep){
    let cepValidado = "";
    for (var i = 0; i < cep.length; i++){
        if(cep[i] !== "-") {
            cepValidado += cep[i];
        }
    }
    localStorage.setItem("cep", cepValidado);
}
function getPosition(){ 
    let minhaLocalizacao = selectId("minhaLocalizacao")
    minhaLocalizacao.addEventListener("click", function(){
        navigator.geolocation.getCurrentPosition(function(position) {
            localStorage.setItem("latitude", position.coords.latitude);
            localStorage.setItem("longitude", position.coords.longitude);
            getRua();
            getEndereco();
            redirecionamento();
        })
    })
}
//requsição para a API do google de geocodificação
function getRua(){
    axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + localStorage.getItem("latitude")+ "," + localStorage.getItem("longitude") + '&key=AIzaSyA1sNcxV0MplBOJ0Unpu0UmGNPXBBVXtF8')
    .then(function (rua) {
    localStorage.setItem("rua", rua.data.results[2].address_components[0].short_name)
    });
}
//requisição para a API de via cep
function getEndereco() {
    axios.get('https://viacep.com.br/ws/' + localStorage.getItem("cep") + '/json')
    .then(function (rua) {
        localStorage.setItem("rua", rua.data.logradouro);
    });
}
  
//pagina encontre um loja
function inserirRua(){
    if(localStorage.getItem("rua") === null) {
        window.location.href = "file:///C:/Users/igoro/%C3%81rea%20de%20Trabalho/pi-digital-house/digital-house/html/localizacao.html";
    }else{
        endereco.innerHTML = localStorage.getItem("rua");
    }
}
 //redirecionamento para a pagina encontre uma loja
function redirecionamento() {
    setTimeout(function(){
    window.location.href = "file:///C:/Users/igoro/%C3%81rea%20de%20Trabalho/pi-digital-house/digital-house/html/encontreUmaLoja.html"},500);
}