import leia from "readline-sync"

var idade = leia.questionInt("Digite sua idade");

if (idade < 18){

    var permissao = leia.question("SEUS PAIS PERMIRIRAM A VIAGEM?\n 1 - sim\n 2 - não")
    if (permissao === "1"){
        var nome= leia.question("INFORME SEU NOME");
        console.log(" Voce pode viajar tranquilo " + nome);
    } else if (permissao === "2"){
         console.log("Voce nao tem permissao para viajar"); 
    
    }else{
         console.log("opcao invalida");
    }
   
} else {
    var nome = leia.question("Informe seu nome:");
    console.log("Voce pode viajar tranquilo " + nome);
}