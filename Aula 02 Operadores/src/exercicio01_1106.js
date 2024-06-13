import leia, { questionFloat, questionInt } from "readline-sync"


var salario = questionFloat(" Infome o valor do salario \n")

var valorem = questionFloat(" Infome o valor do emprestimo \n")

var par = questionInt(" Infome a quantidade de parcelas \n")

var valorparcela = ( valorem / par)

var valormargem = (salario*0.30)

console.log ("Limite das parcelas R$ " + valormargem.toFixed(2))

// var formatador = new Intl.NumberFormat("pt-br",{
//     console.log ("Limite das parcelas R$ " +  valormargem.toFixed(2))
// }

//var mensagem = valormargem <= valorparcela ? " Seu emprestimo foi aprovado" : "O valor da parcela ultrapassa a margem do emprestimo"
 //poderia ser assim// 
 
//console.log (mensagem)

console.log (valormargem >= valorparcela ? " Seu emprestimo foi aprovado" : "O valor da parcela ultrapassa a margem do emprestimo")


