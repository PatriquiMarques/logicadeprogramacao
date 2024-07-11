import leia from "readline-sync"

import { VetorNumAleatorios } from "./MinhasFun.js"

export function exercicio01(){

var vet1 = []
var vet2 = []
var vet3 = []
var vet4 = []



vet1 = VetorNumAleatorios(8,100)
vet2 = VetorNumAleatorios(8,100)
vet3 = VetorNumAleatorios(8,100)



for(var i = 0; i <= 9; i++){

    if(i<=3){
         vet4[i] = vet1[i]
    } else if( i>3 && i <= 6){
         vet4[i] = vet2[i]
    } else{
         vet4 [i]= vet3[i]
    }

} console.log ( "vetor 1  " + vet1)
  console.log ( "vetor 2  " + vet2)
  console.log ( "vetor 3  " + vet3)
  console.log ( "vetor 4  " + vet4)

}

// Crie 3 vetores de 9 posições e crie outro com o 1º terço do 
// primeiro, o segundo 3º. do segundo e o último terço do 3º. 
// Escrever o vetor resultante ao final.
