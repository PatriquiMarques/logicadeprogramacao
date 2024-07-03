
import leia from "readline-sync"

var num= []
var numPares = []

for(var i = 0; i<4; i++){

    num [i] = leia.questionInt("Digite um numero \n")
    if (num[i]%2===0){
        numPares = num[i]
    }
} 
console.log( numPares)


