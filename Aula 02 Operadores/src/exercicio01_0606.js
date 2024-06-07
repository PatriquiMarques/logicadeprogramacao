/*

if (senha === 1234){

    console.log (" Acesso liberado")
    }  else{
    console.log (" Acesso negado")  
}
*/


import leia from "readline-sync"


var senha = leia.questionInt ( "Digite a sua senha com quatro digitos")

switch (senha){

    case 1234: 
        console.log (" Permitir acesso")
        break;
    
    default:
        console.log (" Acesso negado")
        break;
}