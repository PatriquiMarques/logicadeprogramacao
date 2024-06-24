import leia from "readline-sync"


var cont = 1


var num = leia.questionFloat("Digite um numero\n")
var maior = num
var menor = num


while( cont<= 15){
    cont++
   
    var num2 = leia.questionFloat("Digite um numero\n")
    
    
    if (num2 > num && num2 > maior  ){
         
         maior= num2


   
    }else if ( num2 < num && num2 < menor ){
       menor = num2
    } 



    } console.log(" O maior numero digitado foi: " +  maior + "\n" + "O numero menor foi: " + menor)

