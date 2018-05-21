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
    var escondido = "style='visibility:hidden;'";
    palavrachave.innerHTML += "<cor class='key'><char " + escondido + " id='ltr" + i + "'>" + palavra_secreta[i] + "</char><cor";
}

//Gerador do Teclado
letra = new Array('Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M');

    for(i = 0; i < letra.length; i++){
        var lString = "Chute('" + letra[i] + "')";
        var idtecla = "id='" + letra[i] + "'";
        teclado.innerHTML += "<button class='tecla' " + idtecla + " onclick=" + lString + ">" + letra[i] + "</button>";
    }

};

function Chute(ltr){
    for(var j = 0; j < palavra_secreta.length; j++){
        if(ltr == palavra_secreta[j]){
            var idltr = "ltr" + j;
            document.getElementById(idltr).style.visibility = "visible";

            document.getElementById(ltr).style.backgroundColor = "green";
            
            break;
            //document.getElementById("palavrachave").innerHTML += "<c>" + palavra_secreta[j] + "</c>"
        }else{
            document.getElementById(ltr).style.backgroundColor = "red";
        }
    }

    
}
