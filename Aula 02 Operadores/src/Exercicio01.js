import leia from "readline-sync"


var corrida01 = leia.questionFloat ("Digite o valor da primeira corrida")
var corrida02 = leia.questionFloat ("Digite o valor da segunda corrida")
var corrida03 = leia.questionFloat ("Digite o valor da terceira corrida")
var corrida04 = leia.questionFloat ("Digite o valor da quarta corrida")
var corrida05 = leia.questionFloat ("Digite o valor da quinta corrida")


var total = Number ((corrida01 + corrida02 + corrida03 + corrida04 + corrida05) )
var desconto = Number( total - (total *0.25))

console.log( " O valor total das corridas com 25% de desconto é: " + desconto)









