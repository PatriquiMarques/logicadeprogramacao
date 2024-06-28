import leia, { questionInt } from "readline-sync"

var numeroMagico

var numero 

var opcaoJogo = leia.keyInSelect(["PVP", " PvE"])

if (opcaoJogo === 0){

    numeroMagico = leia.questionInt("DIGITE O NUMERO MAGICO \n",{hideEchoBack:true})
    
    
    
}
 else if( opcaoJogo === 1){
 
  var dificuldade = leia.keyInSelect (['FACIL', "MEDIA", "DIFICIL"])
  switch (dificuldade){
  case 0:
    numero = Math.floor(Math.random () *10)
  break;  

  case 1:
    numero = Math.floor(Math.random () *100)
  break;

  case 2:
    numero = Math.floor(Math.random () *1000)
  break;
  }
  var tentativas = 0
  } do {

    var palpite = leia.questionInt ("DIGITE UM PALPITE")

    if(palpite > numeroMagico){
        console.log (" NOSSO NUMERO MAGICO É Menor")
     } else if(palpite < numeroMagico){
        console.log (" NOSSO NUMERO MAGICO É MAIOR")

    } else{
        console.log("ACERTOU")
    }
    tentativas++
  }while(palpite !== numeroMagico)


