
import leia from "readline-sync"

var num= []
var numPares = []

for(var i = 0; i<10; i++){

    // num [i] = leia.questionInt("Digite um numero \n")
    num [i] = parseInt(Math.random()*100)
    if (num[i]%2===0){
        numPares.push(num[i])
    }
} 
console.log (num)
console.log( numPares)


// 3) Crie um algoritmo para ler 10 números inteiros e mostrar os números pares deste vetor;