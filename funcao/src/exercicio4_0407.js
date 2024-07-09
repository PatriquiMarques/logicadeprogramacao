
var linha = 2
var coluna = 4
var matriz = []
 
for (var i = 0 ; i < coluna; i++){

     coluna = parseInt(Math.random()*50)
     matriz[i] = matriz.push(coluna)

    for (var j = 0 ; j < linha; j++){

        linha = parseInt(Math.random()*50)
         matriz[j] = linha

    }


} console.log(matriz)


// Crie uma matriz 8x8 com números aleatórios e posteriormente 
// escreva na tela, quais são maiores que 10;