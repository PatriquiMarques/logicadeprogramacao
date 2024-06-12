import leia from "readline-sync"


var produto = leia.questionFloat("Informe o valor do produto")

var umReal = leia.questionInt("Quantidade de moedas de R$ 1,00")
var cinquenta = leia.questionInt("Quantidade de moedas de R$ 0,50")
var vinteCinco = leia.questionInt("Quantidade de moedas de R$ 0,25")
var dez = leia.questionInt("Quantidade de moedas de R$ 0,10")
var cinco = leia.questionInt("Quantidade de moedas de R$ 0,05")


var total = (umReal*1) + (cinquenta*0.50) + (vinteCinco*0.25) + (dez*0.10) + (cinco*0.05)

var mensagem = total>= produto ? "da para comprar o produto" : "Isso não é pra você, pobre!"
console.log(mensagem)
