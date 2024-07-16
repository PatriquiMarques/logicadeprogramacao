// Escreva um algoritmo para verificar se palavra é um palíndromo. Uma palavra palíndromo é uma palavra que é igual, lendo ela de trás para frente. Novamente, lembrando que uma string é um vetor de caracteres.

// Opcional, você pode criar uma lógica para verificar se um texto é palíndromo também. Para isso, você deve ignorar espaços. Segue abaixo, uma forma de remover espaços com JavaScript.

import leia from "readline-sync"

var palavra = leia.question ("DIGITE UMA PALAVRA ")
var palavraInvertida = " "

for (var i = palavra.length -1;i>=0; i-- ){

    palavraInvertida += palavra[i]   

} if (palavra === palavraInvertida){

    console.log("E UM POLINDROMO")
  
}else{
    console.log("NAO E UM POLINDROMO")
}

console.log(palavraInvertida)