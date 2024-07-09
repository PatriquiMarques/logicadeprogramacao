import leia from "readline-sync"

// function solicitarNumero(nvezes){
// var vet= []
// var vezes
// for(var i =0 ; i<nvezes; i++){
    
//  vet[i] = leia.questionInt("Digite um Número")

// } return vet

// }

    var vet= []

    for(var i =0 ; i<4; i++){
        
     vet[i] = leia.questionInt( vet [i] + " Digite um Numero par")


        if(vet[i]%2!=0){
            vet[i] = leia.questionInt("Esse numero e impar digite um  numero par PAMONHA")
        }
    } 




console.log (vet)
 
