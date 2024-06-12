import leia  from "readline-sync"

var placa = leia.question ("Digite a placa do seu carro ")

var ultimoAlgarismo = placa.charAt(placa.length-1);

//if( ultimoAlgarismo === "0" || ultimoAlgarismo === "1") caso fosse no if else


switch ( ultimoAlgarismo) {
     case "0" :
     case "1":
        console.log ("Não pode transitar segunda-feira")
    break;

    case "2" :
    case "3":
       console.log ("Não pode transitar terça-feira")
    break;
    
    case "4":
    case "5":
        console.log ("Não pode transitar quarta-feira")
    break;
    case "6" :
    case "7":
       console.log ("Não pode transitar quinta-feira")
   break;
   case  "8":
    case "9":
       console.log ("Não pode transitar sexta-feira")
   break;
    default :
        console.log("Placa não encontrada")








}




