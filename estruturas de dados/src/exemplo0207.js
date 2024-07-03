
//var lista = ["Patriqui", 44, true]; // para criar uma lista, vetor array


//console.log(lista) mostra todo array
//console.log(lista[1]) mostra o item da lista no index 1
//lista [1] = "joaozinho" faz atribuição no array... lembre colocando o indec que quer substituir pois se não vai substituir toda a lista

//console.log(lista [1] , lista [2]) para mostrar mais de um indece

//console.log(lista.length) para verificar o tamanho da lista

// é mais comum  criar o array vazio e ir add na lista
// usar push = lista.push

// lista.push("servidor")
// lista.push("solteiro")
// console.log(lista)

//**************************************************** */
// para adicionar ou jogar valor de uma variável ex. lista[0] = nome;
// para somar ex. var soma = lista[0] + lista[1] + lista[2]
// TUDO QUE SE PODE FAZER COM UMA VARIÁVEL PODE SER FEITA COM UM ARRAY

// PARA PERCORRER AS LISTA É USADO A ESTRUTURA DE REPETIÇÃO TIPO; FOR, WHILE

import leia from "readline-sync"

// var nome = []
// var nota = []

// EXEMPLO COM FOR

// for(var i = 0; i< 3 ; i++){ 

//     nome[i] = leia.question("Digite o nome do aluno")
//     nota[i] = leia.questionFloat("Digite uma nota")

// } var media = (nota[0] +nota[1] + nota [2])/3

// console.log(nome,nota, media)

//EXEMPLO COM WHILE
// var nome = []
// var i = 2

// while(i >= 0){

//     nome[i]= leia.question("Digite o nome")
//     i--
// }
//     console.log(nome)

// PARA PERCORRER A LISTA // .includes

 var j 
 var nome

while(j >= 0){

 nome[j]= leia.question("Digite o nome")
    j--
}
    console.log(nome)

for (var j = 0; j < nome.length; j++){

    if (nome[j]=== "gustavo"){
        console.log(nome[j])
    }

    for (var valor of lista){
        console.log(valor)
    }



    lista.forEach(valor=>{
        console.log(valor)
    })



}
