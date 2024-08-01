import leia from "readline-sync"
var pessoas = []

for (var i = 0; i <3; i++){

var nome = leia.question("infome o nome")
var idade = leia.question ("informe a idade: ")
var obj = {

    nome: nome,
    idade: idade
}
pessoas.push(obj)

}

console.log(pessoas)