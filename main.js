var Letras;
var palavra_secreta;
var Banco_de_palavras;
window.onload = function init() {  //chama a funcão quando a janela e carregada(linha: 4 - 28)
var teclado = document.getElementById("teclado");
var palavrachave = document.getElementById("palavrachave");
var letrachave = document.getElementById("letrachave");
var i;

palavrachave.style.color = "red";

 Banco_de_palavras = ['mouse', 'marrom', 'porta', 'massa', 'palha', 'pupila']
var rand = Math.floor(Math.random() * Banco_de_palavras.length);
palavra_secreta = Banco_de_palavras[rand].toUpperCase().split("");

for(i=0; i<palavra_secreta.length; i++){ //Exibe um bloco vazio para cada letra da palavra secreta
    var escondido = "style='visibility:hidden;'";
    palavrachave.innerHTML += "<cor class='key'><char " + escondido + " id='ltr" + i + "'>" + palavra_secreta[i] + "</char><cor";
}

//Gerador do Teclado
letras = new Array('Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M');

    for(i = 0; i < letras.length; i++){
        var lString = "Chute('" + letras[i] + "')";
        var idtecla = "id='" + letras[i] + "'";
        teclado.innerHTML += "<button class='tecla' " + idtecla + " onclick=" + lString + ">" + letras[i] + "</button>";
    }

};

var fim_de_jogo = false;    //Confirma se o jogo acabou ou não (linhas 32, 37, 45).
var valid = false;   //Serve para validar se não ouveram acertos na iteração (linhas 53, 58, 67).
var erros = 0;  //Contador de erros (linhas 48, 58, 60, 61).
var acertos = 0;    //Contadro de acertos (linhas 52, 63).
