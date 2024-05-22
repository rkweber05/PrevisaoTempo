let chave = "810384760e4f5d9f848927946f7b053d"

function colocarNaTela(dados){
    console.log(dados)
    console.log( dados.main.humidity + "%")
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temp").innerHTML =  Math.floor(dados.main.temp) + "°C"
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}

async function buscarCidade(cidade){
    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + 
    cidade + 
    "&appid=" + 
    chave + 
    "&lang=pt_br" +
    "&units=metric"
    )
    .then(resposta => resposta.json())

    colocarNaTela(dados)
}

function cliqueiNoBotao(){
   let cidade = document.querySelector(".input-cidade").value

   buscarCidade(cidade)
}