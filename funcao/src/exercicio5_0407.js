import { NumAleatorios } from "./MinhasFun.js";

var dado
var  um=0, dois=0, tres=0, quatro=0, cinco=0, seis=0

for(var i=0; i<1000; i++){
 
    dado = parseInt((Math.random()*6)+1)

    if(dado === 1){
        um++
       
        }else if(dado === 2){
            dois++
        }else if(dado === 3){
            tres++
        }else if(dado === 4){
            quatro++
        }else if(dado === 5){
            cinco++
        }else{
            seis++
        }console.log (dado)
    }
 if (um > 222 || dois > 222 || tres > 222||quatro > 222||cinco > 222||seis > 222)
 console.log (" O DADO VICIADO")
 else{
    console.log (" O DADO NAO VICIADO")
 } console.log (um)
 console.log (dois)
 console.log (tres)
 console.log (quatro)
 console.log (cinco)
 console.log (seis)







 

