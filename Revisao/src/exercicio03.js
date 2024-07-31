import leia from "readline-sync"

var opcao = leia.keyInSelect([
    "c -> k",
    "k -> c",
    "f -> c",
    "c -> f",
    "k-> f",
    "f -> k",
], "SELECIONE A OPCAO" ) +1;

var temp = leia.questionFloat("INFORME A TEMPERATURA: ")

switch (opcao) {

    case 1:
        var k = temp +273.15
        console.log(`valor em KELVIN: ${k}`)
        break

       
}