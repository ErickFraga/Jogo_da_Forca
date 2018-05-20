var Letra;
var palavra_secreta;
var Banco_de_palavras;
window.onload = function init() {
var teclado = document.getElementById("teclado");
var palavrachave = document.getElementById("palavrachave");
var letrachave = document.getElementById("letrachave");
var i;

 Banco_de_palavras = ['mouse', 'marrom', 'porta', 'massa', 'palha', 'pupila']
var rand = Math.floor(Math.random() * Banco_de_palavras.length);
palavra_secreta = Banco_de_palavras[rand].toUpperCase().split("");

for(i=0; i<palavra_secreta.length; i++){
    palavrachave.innerHTML += "<c id='ltr" + i + "'>" + palavra_secreta[i] + "</c>";
}

/*for(i = 0; i < palavra_secreta.length; i++){
    letrachave.innerHTML += "<c id='ltr" + i + "></c>";
}*/

//Gerador do Teclado
letra = new Array('Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M');

    for(i = 0; i < letra.length; i++){
        var lString = "Chute('" + letra[i] + "')";
        teclado.innerHTML += "<button class='tecla' onclick=" + lString + ">" + letra[i] + "</button>";
    }

};

function Chute(lrt){
    for(var j = 0; j < palavra_secreta.length; j++){
        if(lrt == palavra_secreta[j]){
            document.getElementById("palavrachave").innerHTML += "<c>" + palavra_secreta[j] + "</c>"
        }
    }

    
}

