
import leia from "readline-sync"

var vet1= []
var vet2 = []

for(var i = 0; i<10; i++){

    vet1 [i] = leia.questionInt("Digite um numero \n")
    vet2 [i] = vet1 [i]*5
} 
console.log( vet1 , vet2)

// 1) Crie um algoritmo que solicite a entrada de 10 números pelo usuário, armazene-os em
// um vetor e então crie outro vetor com os valores do primeiro vetor multiplicados por 5.
// Por fim exiba os dois vetores.

