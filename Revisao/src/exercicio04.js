import leia from "readline-sync"
var vogais = 0;
var palavra = leia.question("DIGITE UMA PALAVRA")
palavra = palavra.toUpperCase();


for (var i = 0; i < palavra.length; i++){

    if (palavra[i] === 'A'|| palavra[i] === 'E'|| palavra[i] === 'I'||palavra[i] === 'O'||palavra[i] === 'U'){
        vogais ++
    }
} console.log(`O NUMERO DE VOGAIS E: ${vogais}`)