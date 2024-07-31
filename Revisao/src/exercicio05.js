import leia from "readline-sync"

// var palavra = leia.question("DIGITE UMA PALAVRA")
// var palavraInvertida = [i]

// for(var i = palavra.length - 1; i >=0; i--){
//     palavraInvertida.push(palavra[i])

// } palavraInvertida.join().replaceAll("," , "")

// if(palavra === palavraInvertida){

//     console.log(" E PALINDROMO")
// }else{
//     console.log("NAO E PALINDRO")
// }



var palavra = leia.question("DIGITE UMA PALAVRA")
var palavraInvertida = "";

for(var i = palavra.length - 1; i >=0; i--){
    palavraInvertida= palavraInvertida + palavra[i]
}
if(palavra === palavraInvertida){

    console.log(" E PALINDROMO")
}else{
    console.log("NAO E PALINDRO")
}

