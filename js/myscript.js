//aqui vai javascript
function mudarFrase() {
    var elemento = gebi("frase")
    elemento.innerHTML = "Qualquer frase"
    elemento.style.color = "red";
    elemento.style.fontSize = "25px";
    elemento.style.backgroundColor = "yellow";
    //altera o fundo da página
    document.body.style.backgroundColor = "blue";
    elemento.innerHTML = "<img src=\'img/a.jpeg\' />"
}

function trocarTexto(){
    var elemento = gebi("frase")
    var nova = gebi("novaFrase").value
    elemento.innerHTML = nova
}

function gebi(id){
    return document.getElementById(id)
}