import { NumAleatorios } from "./MinhasFun.js";

var dado 
var  um=0, dois=0, tres=0, quatro=0, cinco=0, seis=0

for(var i=0; i< 1000; i++){
 
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
 if (um > 220 || dois > 220 || tres > 220||quatro > 220||cinco > 220||seis > 220)
 console.log (" DADO VICIADO")
 else{
    console.log ("DADO NAO VICIADO")
 } console.log (um)
 console.log (dois)
 console.log (tres)
 console.log (quatro)
 console.log (cinco)
 console.log (seis)







 

