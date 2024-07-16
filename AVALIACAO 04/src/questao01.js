import leia from "readline-sync"

// Escreva um algoritmo que solicite ao usuário um texto ou palavra e ele conte quantas vogais esse texto ou palavra tem. Vale lembrar que toda String (texto), nada mais é do que um vetor de caracteres.
var cont = 0
var palavra = leia.question( "DIGITE UMA PALAVRA")

palavra = palavra.toLowerCase()

for (var i = 0; i < palavra.length; i++){
    if (palavra.charAt(i) === "a" || palavra.charAt(i)=== "e" || palavra.charAt(i)=== "i" || palavra.charAt(i)=== "o" || palavra.charAt(i)=== "u" )
        cont++

} console.log( " A QUANTIDADE DE VOGAIS DA PALAVRA " + palavra + " SAO " + cont)