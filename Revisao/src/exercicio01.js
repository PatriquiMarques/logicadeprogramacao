import leia from  "readline-sync"


// var a = leia.questionInt("Digite um número 1");
// var b = leia.questionInt("Digite um número 2");
// var c = leia.questionInt("Digite um número 3");

// if (a < b && b < c){
//     console.log(a, b, c)

// } else if (a<c && c< b){ 
//     console.log(a, c, b)

// } else if (b<a && a<c){
//     console.log(b, a, c)

// } else if (b<c && a< c){
//     console.log(b, c, a)

// } else if (b<c && c< a){
//     console.log(a, c, b)

// } else if (a<c && c< b){
//     console.log(a, c, b)

// } else if (a<c && c< b){
//     console.log(a, c, b)
// }

// nomed a variavel.sort(); para colocar números em ordem
var numero = [];
for (var i = 0; i < 3; i++){
    numero[i] = leia.questionInt("informe o numero "+ (i+1) +  ":")
}

var numeroOrdenado = numero.sort();
console.log(numeroOrdenado);






