function calculaMedia() {
    var nota1 = document.getElementById("nota1").value
    var nota2 = document.getElementById("nota2").value
    var nota3 = document.getElementById("nota3").value
    var nota4 = document.getElementById("nota4").value
    var media = (+nota1 + +nota2 + +nota3 + +nota4)/4
    var status = validaStatus(media)
    document.getElementById("result").innerHTML = "Sua média é: " + media + status 
}

function validaStatus(med){
    if(med < 6) {
        return " Reprovado Fi de quenga !!!"
    } else {return " Aprovadooooo ai sim caralhooo"}
}