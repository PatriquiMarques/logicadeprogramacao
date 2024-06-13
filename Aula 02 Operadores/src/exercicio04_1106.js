import leia from "readline-sync"

var doacao = leia.questionFloat ("Para doar R$ 10,00 digite 1 \n Para doar R$ 25,00 digite 2 \n Para doar R$ 50,00 digite 3 \n Para doar outros valores digite 4 \n")

switch (doacao){

    case 1: var valor = 10.00
    console.log (" Obrigado pela doacao de R$ " + valor )
    break;

    case 2: var valor = 25.00
    console.log (" Obrigado pela doacao de R$ " + valor )
    break;

    case 3: var valor = 50.00
    console.log (" Obrigado pela doacao de R$ " + valor )
    break;

    case 4: var valor = leia.questionFloat ("Digite o valor que deseja doar \n")
    console.log (" Obrigado pela doacao de R$ " + valor )
    break;

    default:
        console.log("Por favor digite uma opcao valida")
    break;









}