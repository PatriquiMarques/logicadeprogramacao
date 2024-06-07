import leia from "readline-sync"
var codigoErro = leia.questionInt ("Digite o número do erro");

switch(codigoErro){

    case 400:
    case 401:
    case 404:
        console.log( "HTTP CODE -  ERRO")
        break;
    case 501:
    case 502:
    case 503:
        console.log("HTTP CODE - ERROR DE SERVIDOR")

        //codigo
        break;

    default:
        console.log ("NÃO É ERRO")
        break;

}

