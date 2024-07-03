
import leia from "readline-sync"

var vet1= []
var vet2 = []

for(var i = 0; i<10; i++){

    vet1 [i] = leia.questionInt("Digite um numero \n")
    vet2 [i] = vet1 [i]*5
} 
console.log( vet1 , vet2)


