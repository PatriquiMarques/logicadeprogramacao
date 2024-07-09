import { VetorNumAleatorios } from "./MinhasFun.js"
var linha = 1
var coluna = 1
var matriz = [[coluna],[linha]]
 
for (var i = 0 ; i < coluna; i++){

     
     matriz[i]= VetorNumAleatorios(4,50)

    for (var j = 0 ; j < linha; j++){


        
         matriz[j] = VetorNumAleatorios(3,50)

    }


} console.log(matriz [[i][j]])


// Crie uma matriz 8x8 com números aleatórios e posteriormente 
// escreva na tela, quais são maiores que 10;