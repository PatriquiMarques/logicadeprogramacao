
import leia from "readline-sync"


var minima= []
var maxima= []
var num, num2

for(var i = 0 ; i<30; i++){
         
    num = parseInt(Math.random()*12) +23
    num2 = parseInt(Math.random()*12) +23

    if (num > num2 ){
        maxima [i] = num // aqui poderia ser  maxima.push(num)
        minima [i] = num2

    } else  {
        maxima [i] = num2 
        minima [i] = num  
    }  
        
    } for(var i = 0 ; i< maxima.length; i++){
     
console.log( "Maxima do dia " + maxima[i] + "   Minima do dia " + minima[i])
 }

   



