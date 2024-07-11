import leia from "readline-sync"



    var vet= []

    for(var i =0 ; i<4; i++){
        
     vet[i] = leia.questionInt(" Digite um Numero par \n")

        do{
            if(vet[i]%2!=0){
             vet[i] = leia.questionInt("Esse numero e impar digite um  numero par PAMONHA\n")
            }
    
    
        }while(vet[i]%2!=0)
    
    
    } console.log (vet)
 
