import leia from "readline-sync"

var C1 = leia.question ("Digite o nome do cliente \n")
var valorC1 = leia.questionFloat ("Digite o valor gasto pelo Cliente \n")

var C2 = leia.question ("Digite o nome do cliente \n")
var valorC2 = leia.questionFloat ("Digite o valor gasto pelo Cliente \n")

var total = valorC1 + valorC2
console.log( "Valor total: " + total)

var media  = total /2
console.log ("Valor medio: " + media)
 
if (valorC1>20){

    console.log(C1) 
} 

if (valorC2>20){

    console.log(C2)
}

