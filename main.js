var Letras;
var palavra_secreta;
var Banco_de_palavras;
alert("Se estiver em um disitivo telemovel, ative o modo rotação automatica.");
window.onload = function init() {  //chama a funcão quando a janela e carregada(linha: 4 - 28)
    var teclado = document.getElementById("teclado");
    var palavrachave = document.getElementById("palavrachave");
    var letrachave = document.getElementById("letrachave");
    var i;

    palavrachave.style.color = "red";

    Banco_de_palavras = [ 'petroleo', 'pestana', 'pestilento', 'peteleco',
        'reboque', 'cadafalso', 'cadeira', 'cola', 'rebento',
        'defumado', 'discurso', 'eletrodomestico', 'eletronica',
        'engrenagem', 'esfomeado', 'ferralheiro', 'ferrovia',
        'fertil', 'fortaleza', 'fortificante', 'oficina',
        'ornamento', 'palavra', 'preocupacao', 'radiologia',
        'radiografia', 'granja', 'granulado', 'induzido',
        'imbativel', 'industria', 'internacional', 'labirinto',
        'lobisomem', 'locomotiva', 'tesoura', 'massagista',
        'matadouro', 'mochila', 'noroeste', 'nitroglicerina',
        'helicoptero', 'capitalismo', 'software', 'engenharia',
        'noroeste', 'autentico', 'linux', 'processador',
        'quarentena', 'medicina', 'holocausto', 'radiografia',
        'xarope', 'zarolho', 'zoologico', 'hereditario', 'extase',
        'extravio', 'duodeno', 'ecologista', 'turismo',
        'traficante', 'conselho', 'baixista', 'avestruz',
        'quimica', 'botanica', 'respectivo', 'saxofone', 'taberna',
        'oculto', 'trigonometria', 'zodiaco', 'justaposto',
        'hidraulico', 'hexagono', 'mineiro', 'frenetico',
        'explosivel', 'exorcista', 'carteira', 'brasil', 'amorzinho', 
        'fresquinho', 'andrezinho', 'bobeira', 'marcos', 'selio', 'jogo', 'mapa',
        'babado', 'ana', 'critico', 'windows', 'linux', 'macaco', 'panela',
        'frederico', 'fofura', 'grafico', 'mula', 'cavalo', 'escola', 'mouse',
        'marrom', 'porta', 'massa', 'palha', 'pupila'];
        
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
