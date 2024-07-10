
var linhas = 8
var colunas = 8
var matriz = []
 
for (var i = 0 ; i < linhas; i++){

    var linha=[]

  for (var j = 0 ; j <colunas; j++){

        linha.push(0)

    }
    matriz.push(linha)

} console.log(matriz)


// Crie uma matriz 8x8 com números aleatórios e posteriormente 
// escreva na tela, quais são maiores que 10;