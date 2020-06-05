const paginasArrimo = {
    cadastro: "Arrimo | Cadastro", cadastroDeUsuarios: "Arrimo | Cadastro de usuarios",
    encontreUmaLoja: "Arrimo | encontre uma loja", localizacao: "Arrimo | Localização"
  };
  let titlePage = document.title;
  
  if (paginasArrimo.encontreUmaLoja === titlePage) {
    inserirRua();
  } if (paginasArrimo.localizacao === titlePage) {
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
    cep.addEventListener("keypress", function (evento) {
        if (evento.key == "Enter") {
        let cep = "";
        for (var i = 0; i < cepInput.value.length; i++) {
            if(cepInput.value[i] !== "-") {
                cep += cepInput.value[i];
            }else if (cep == "") {
                alert("insira um cep valido!");
            }
        }
        localStorage.setItem("cep", cep)
        getEndereco();
        setTimeout(function(){
            redirecionamento();
        },1000);
        }
    });
  };
  function getPosition(){ 
    let minhaLocalizacao = selectId("minhaLocalizacao")
    minhaLocalizacao.addEventListener("click", function(){
        navigator.geolocation.getCurrentPosition(function(position) {
            localStorage.setItem("latitude", position.coords.latitude);
            localStorage.setItem("longitude", position.coords.longitude);
            getRua()
            getEndereco();
        setTimeout(function(){
            redirecionamento();
        },1000);
        });
    });
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
  window.location.href = "file:///C:/Users/igoro/%C3%81rea%20de%20Trabalho/pi-digital-house/digital-house/html/encontreUmaLoja.html"
}