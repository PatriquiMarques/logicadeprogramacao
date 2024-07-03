
import leia from "readline-sync"

var vet1= []
var soma = 0


for(var i = 0; i<5; i++){

    vet1 [i] = leia.questionInt("Digite um numero \n")
    soma = soma + vet1[i]


}  console.log(soma)



for( var i = 0; i<5; i++ ){
    console.log( vet1[i])
   }


