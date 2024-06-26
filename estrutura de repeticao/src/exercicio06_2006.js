import leia from "readline-sync"

var num= leia.questionInt(" Digite um numero para o sistema mostrar a tabuada deste numero \n")

var cont = 0


while(cont <= 10) {

    var tab= num* cont
    
    console.log (num +" X " +cont + " = " +tab)

    cont++
}