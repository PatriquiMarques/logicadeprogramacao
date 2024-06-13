//while, forwhile,

import leia from "readline-sync"

var funcionario = leia.question ("Digite o nome do funcionário \n")
var salario= leia.questionFloat ("Digite o salario do funcionário \n")
var dep= leia.questionFloat ("Digite o numero de dependedes  do funcionário \n")

switch (dep){

    case 0: 
        var salariototal =  salario * 1.02 // porcentagem 
            console.log( " O salário do funcinario e R$ " + salariototal)
    break;

    case 1: 
    var salariototal =  salario + (salario *0.05)
            console.log( " O salário do funcinario e R$ " + salariototal)
    break;

    case 2: 
    var  salariototal =  salario + (salario *0.07)
             console.log( " O salário do funcinario e R$ " + salariototal)
    break;

    case 3: 
    var salariototal =  salario + (salario * 0.10)
             console.log( " O salário do funcinario e R$ " + salariototal)
    break;

    default:
     var salariototal = salario + (salario *0.15)
            console.log( " O salário do funcinario e R$ " + salariototal)



}

