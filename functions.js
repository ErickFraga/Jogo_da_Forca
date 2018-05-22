
function Perdeu(){
    document.getElementById("resultado").innerHTML = "<div id='lose'>VOCE PERDEU!</div>";
    fim_de_jogo = true;
    for(i=0; i<palavra_secreta.length; i++){
        document.getElementById("ltr" + i).style.visibility = "visible";
    }
}


function Ganhou(){
    document.getElementById("resultado").innerHTML = "<div id='win'>VOCE GANHOU!</div>"
    
    fim_de_jogo = true;
}


function Chute(ltr){
    //Verifica se o jogo acabou "Se o Jogo Não tiver acabado" (linha: 45-55).            
    if(fim_de_jogo == false){   
        //Procura pela letra clickada e muda a cor do background do botão (linha: 47-55).
        for(var j = 0; j < palavra_secreta.length; j++){
            if((ltr == palavra_secreta[j])&&(erros < 7)){
                var idltr = "ltr" + j;
                document.getElementById(idltr).style.visibility = "visible";
                document.getElementById(idltr).style.color = "green";
                document.getElementById(ltr).style.backgroundColor = "green";
                acertos+=1;
                valid = true;
                
            };
        };
        //Confere fora da Iteração se a letra esta errada (linha: 58-61).
        if((valid == false)&&(erros <= 7)){
            document.getElementById(ltr).style.backgroundColor = "red";
            erros+=1;
        }; if((valid == false)&&(erros >= 7)){   //Confere se o imite de erros foi ultrapassdo (linha: 61-63).
            Perdeu()
        }else if(acertos == palavra_secreta.length){    //Confere se todas as letras ja foram exibidas (linha: 63-65).
            Ganhou();
        };
    };
    valid = false;
    document.getElementById("falhas").innerHTML = erros;
};





