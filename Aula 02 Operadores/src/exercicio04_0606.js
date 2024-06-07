import leia from "readline-sync"

var nProdutos = leia.questionFloat ("Digite a quantidade de maças")
 var totalProdutos =0
if (nProdutos<12){
    totalProdutos =(nProdutos * 0.30)
    console.log(" O você deve pagar R$ " + totalProdutos)
} else {totalProdutos =(nProdutos * 0.25)
    console.log (" O você deve pagar R$ " + totalProdutos)

} 