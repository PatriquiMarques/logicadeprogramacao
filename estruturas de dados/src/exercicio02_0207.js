
import leia from "readline-sync"

var vet1= []
var soma = 0


for(var i = 0; i<5; i++){

    vet1 [i] = leia.questionInt("Digite um numero \n")
    soma = soma + vet1[i]


}  console.log(soma)


for( var valor of vet1 ){
    console.log( vet1)
   }

// for( var i = 0; i<5; i++ ){
//     console.log( vet1[i])
//    }


// 2) Escreva um algoritmo que solicite ao usuário a entrada de 5 números, e que exiba o
// somatório desses números na tela. Após exibir a soma, o programa deve mostrar
// também os números que o usuário digitou, um por linha.

