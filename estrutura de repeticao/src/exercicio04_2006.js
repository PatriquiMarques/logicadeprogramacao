import leia from "readline-sync"


var cont = 1


var num = leia.questionFloat("Digite um numero\n")
var maior = num
var menor = num


while( cont<= 3){
    cont++
   
    var num2 = leia.questionFloat("Digite um numero\n")
    
    
    if (num2 > num && num2 > maior  ){
         
         maior= num2
    }else{
       menor = num2
    } 



    } console.log(" O maior numero digitado é: " +  maior + "\n" + "O numero menor é: " + menor)

