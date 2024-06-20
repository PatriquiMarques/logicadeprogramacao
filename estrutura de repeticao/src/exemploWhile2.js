import leia from "readline-sync"

var nota = leia.questionFloat("Digite a nota do aluno\n")

while (nota <0 || nota>10  ){

    console.log("Nota invalida")
    nota = leia.questionFloat ("Digite a nota novamente")
}

console.log("Nota valida")