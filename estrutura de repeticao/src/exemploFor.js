import leia from "readline-sync"



var nota = leia.questionFloat("Digite a nota do aluno\n")

for(var i = 0; i < 10; i ++){

    if( i % 2 === 1){

    console.log (" valor de i = " +i)
}
}