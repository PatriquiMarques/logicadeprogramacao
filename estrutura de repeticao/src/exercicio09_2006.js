import leia from "readline-sync"


var numcont= 0
var cont = 0


while(cont <= 10) {

    cont++

    var num= leia.questionInt(" Digite um numero \n")

    if (num > 100 && num <200){

        numcont++

    }

} console.log ( numcont)