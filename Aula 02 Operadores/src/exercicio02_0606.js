import leia from "readline-sync"

var numero = leia.questionInt(" Digite um número")

if ( numero % 2 === 0) {
    console.log (" O Número é par")
}   else {
    console.log (" O número é ímpar")
}