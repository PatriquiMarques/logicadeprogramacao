
// import leia from "readline-sync"

// var num= []
// var inver = []

// for(var i = 0; i< 10; i++){

//     num [i] = parseInt(Math.random()* 30)
//     // num [i] = leia.questionInt("Digite um numero \n")
  
// }
//     for(var i = 9 ; i>=0; i--){

//        inver.push(num[i])

       
      
//         }console.log( "OS NUMEROS DIGITADOS " + num)
//          console.log( " A INVERSAO DOS NUMEROS " + inver)

var lista = []
for (var i = 0; i <10 ; i++){
    lista.push(parseInt(Math.random()*30))

} console.log(lista)

var inicio = 0
var fim = lista.length-1
while(inicio < fim ){
    var aux = lista[inicio]
    lista[inicio] = lista[fim]
    lista[fim] = aux;

    inicio++
    fim--
} console.log(lista)





