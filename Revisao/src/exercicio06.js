import leia from "readline-sync"
const tentativas = 1000
var numero = 0
var verde = 0
var vermelho = 0
var preto= 0
var impar = 0
var par = 0


for ( var i = 0; i < tentativas; i ++){

    numero = parseInt(Math.random()*37)

    if(numero === 0){
        verde++

    } else if ( numero%2!=0){
        preto++
    }else if ( numero%2==0){
        vermelho++
    
} } 
var vermelhoPorcent =( vermelho/tentativas)*100;
var verdePorcent =( verde/tentativas)*100;
var pretoPorcent =( preto/tentativas)*100;



if (verdePorcent > 40 || pretoPorcent >40 || vermelhoPorcent >40){

    console.log("Roleta Viciada")

}
console.log(` QUANTIDADE DE VEZES DA COR VERDE ${verde}  - PORCENTAGEM ${verdePorcent}`)
console.log(` QUANTIDADE DE VEZES DA COR VERMELHO ${vermelho}  - PORCENTAGEM ${vermelhoPorcent}`)
console.log(` QUANTIDADE DE VEZES DA COR PRETO ${preto}  - PORCENTAGEM ${pretoPorcent}`)

// function selecionaContator(vezesQueCaiu){
    //return (vezesQueCaiu / tentativas) *100;
//}



