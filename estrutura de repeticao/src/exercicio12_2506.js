import leia from "readline-sync"


var cont = 1
var multi
var num = leia.questionInt ("Digite um numero")

while ( cont < num ){

    multi = num * (num--)
    cont++
    num--
}

console.log (" O FATORIAL DE " + num + " E " + multi )
