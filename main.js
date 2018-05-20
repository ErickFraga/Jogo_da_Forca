var Letra;
window.onload = function init() {
var teclado = document.getElementById("teclado");
var i;

letra = new Array('Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M');

    for(i = 0; i < letra.length; i++){
        teclado.innerHTML += "<button class='tecla' onclick='Chute(" + letra[i] + ")'>" + letra[i] + "</button>";
    }

};

function Chute(a){
    console.log(a);
}
