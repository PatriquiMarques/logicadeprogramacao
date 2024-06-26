
import leia from "readline-sync"


var cont = 1
var soma=0
var multi =1


while(cont <= 6) {
 
    cont++
    var num= leia.questionInt(" Digite um numero \n") 
    
    if( num%2===0){

        var multi = num * multi

    }  else if( num%2===1){

        var soma = num + soma

    } 



}
console.log(" A multiplicação dos numeros pares e: " + multi +"\n" + " E a soma dos numeros impares e :" +soma )