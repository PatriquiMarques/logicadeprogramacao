import leia, { questionInt } from "readline-sync"

var decimal = questionInt ("DIGITE UM NUMERO ")
var binario=""


while (decimal > 0){

    var result = parseInt(decimal/2)
    var resto = decimal%2
    decimal = result
    binario = resto + binario
} console.log(binario)
