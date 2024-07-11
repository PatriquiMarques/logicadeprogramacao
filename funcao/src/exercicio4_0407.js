// export function exercicio04(){

    var matriz =[[]];
    var maioresQueDez =[]

    for(var i = 0; i < 8; i++){
        matriz[i]=[];
        for(var j = 0; j<8; j++){
            matriz[i][j]=parseInt(Math.random()*100)
            if(matriz[i][j]>10){
                maioresQueDez.push(matriz[i][j])
            }


        }
    }
    console.table(matriz)
    console.table(maioresQueDez)

// }











// var linhas = 8
// var colunas = 8
// var matriz = []
 
// for (var i = 0 ; i < linhas; i++){

//     var linha=[]

//   for (var j = 0 ; j <colunas; j++){

//         linha.push(0)

//     }
//     matriz.push(linha)

// } console.log(matriz)


// Crie uma matriz 8x8 com números aleatórios e posteriormente 
// escreva na tela, quais são maiores que 10;