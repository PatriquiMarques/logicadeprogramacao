
import leia from "readline-sync"


var vetorPai = []
var vetoraMae = []
var vetorFilho = []

for ( var i=0; i < 50; i ++) {
 
    vetorPai [i] = parseInt(Math.random()*100)
    vetoraMae [i] = parseInt(Math.random()*100)

    if (i %2===0){
        vetorFilho[i] = vetorPai[i]
    } else {
        vetorFilho[i] = vetoraMae[i]
    }

}console.log( "Filho " + vetorFilho)
console.log( "Pai  " + vetorPai)
console.log( "Mae  " + vetoraMae)


//console.log(vetorPai, vetoraMae)
   



