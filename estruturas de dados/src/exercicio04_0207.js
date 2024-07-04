
import leia from "readline-sync"

var num= []
var numMaior = []

for(var i = 0; i<15; i++){

    num [i] = parseInt(Math.random()*40)
    // num [i] = leia.questionInt("Digite um numero \n")
    if (num[i] >= 10){
        numMaior.push(num[i])
    }
} 
console.log( " Os numeros sorteados " + num)
console.log( "Os numeros maiores que 10 sao " + numMaior)


