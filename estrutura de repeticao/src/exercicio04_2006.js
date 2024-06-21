import leia from "readline-sync"


var cont = 1





while( cont<= 15){
    cont++
   
    var num = leia.questionFloat("Digite um numero\n")
 
    
    if (num > 0 ){
         
       var  maior= num
    }else(
       var menor = num
    )   


    } console.log(" O maior numero digitado é: " +  maior + "\n" + "O numero menor é: " + menor)

