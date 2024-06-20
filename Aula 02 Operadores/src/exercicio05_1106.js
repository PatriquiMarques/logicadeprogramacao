import leia from "readline-sync"

var time1 = leia.questionInt ("Digite a quantidade de goals do time 1 \n")
var time2 = leia.questionInt ("Digite a quantidade de goals do time 2 \n")

var placar =  time1 - time2

// var diferenca = math.abs( time1-time2)

if (placar < 0){
    placar *= -1
}

switch (placar) {

    case 0:   
    
        console.log ( "EMPATE")
    break;

     case 1:
     case 2:
     case 3:
        console.log(" Partida normal")
    break;
    
    default:
        console.log("Goleada")
    break;

}
