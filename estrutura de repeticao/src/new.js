import leia from "readline-sync"

var cargaHoraria =leia.questionInt(" Qual a carga horária do professor: ")
var numeroAula = leia.questionInt(" Quantas aulas são ministradas pelo professor: ")

if (cargaHoraria === 10 || numeroAula === 7|| numeroAula ===8 || numeroAula ===9 || numeroAula ===10 || numeroAula ===11){

    console.log ("Professor ministra " + numeroAula +   " aulas")
     if( numeroAula ===7){
        console.log ("Professor ministra " + numeroAula +   " aulas")

        console.log(" O professor não recebe  aula excedente")
     } else if ( numeroAula ===8){
        numeroAula++
        console.log ("Professor ministra " + numeroAula +   " aulas")
        console.log(" O professor recebe 01 aulas excedente")

     } else if ( numeroAula ===9){
        numeroAula=+2
        console.log ("Professor ministra " + numeroAula +   " aulas")
        console.log(" O professor recebe 02 aulas excedente")

     } else if ( numeroAula ===10){
        numeroAula=+3
        console.log ("Professor ministra " + numeroAula +   " aulas")
        console.log(" O professor recebe 03 aulas excedente")

     } else if ( numeroAula ===11){
        numeroAula=+4
        console.log ("Professor ministra " + numeroAula +   " aulas")
        console.log(" O professor recebe 04 aulas excedente")

    } else if ( numeroAula ===12){
        numeroAula=12
        console.log ("Professor ministra " + numeroAula +   " aulas")
        console.log(" O professor recebe 05 aulas excedente")
     } else if ( numeroAula ===13){
        numeroAula=+5
        console.log ("Professor ministra " + numeroAula +   " aulas")
        console.log(" O professor recebe 06 aula excedente")
     }

    }
 else if(cargaHoraria === 20 || numeroAula === 15|| numeroAula ===16 || numeroAula ===17 || numeroAula ===18 || numeroAula ===19 || numeroAula=== 20){
    console.log ("Professor leciona 14 aulas")     
    if( numeroAula ===15){
        console.log(" O professor recebe 01 aula excedente")
     } else if ( numeroAula ===16){
        console.log(" O professor recebe 02 aula excedente")
     } else if ( numeroAula ===17){
        console.log(" O professor recebe 03 aula excedente")
     } else if ( numeroAula ===18){
        console.log(" O professor recebe 04 aula excedente")
     } else if ( numeroAula ===19){
        console.log(" O professor recebe 05 aula excedente")
     } else if ( numeroAula ===20){
        console.log(" O professor recebe 06 aula excedente")
             }
    

} else if (cargaHoraria === 30|| numeroAula === 22|| numeroAula ===23 || numeroAula ===24 || numeroAula ===25 || numeroAula ===26 || numeroAula=== 27){
    console.log ("Professor leciona 21 aulas")     
    if( numeroAula ===22){
        console.log(" O professor recebe 01 aula excedente")
     } else if ( numeroAula ===23){
        console.log(" O professor recebe 02 aula excedente")
     } else if ( numeroAula ===24){
        console.log(" O professor recebe 03 aula excedente")
     } else if ( numeroAula ===25){
        console.log(" O professor recebe 04 aula excedente")
     } else if ( numeroAula ===26){
        console.log(" O professor recebe 05 aula excedente")
     } else if ( numeroAula ===27){
        console.log(" O professor recebe 06 aula excedente")
             }
  
}
else if(cargaHoraria === 40|| numeroAula === 29|| numeroAula ===30 || numeroAula === 31 || numeroAula === 32 || numeroAula === 33 || numeroAula=== 34 || numeroAula=== 35 || numeroAula=== 36){
    console.log ("Professor leciona 28 aulas")
    if( numeroAula ===29){
        console.log(" O professor recebe 01 aula excedente")
     } else if ( numeroAula ===30){
        console.log(" O professor recebe 02 aula excedente")
     } else if ( numeroAula ===31){
        console.log(" O professor recebe 03 aula excedente")
     } else if ( numeroAula ===32){
        console.log(" O professor recebe 04 aula excedente")
     } else if ( numeroAula ===33){
        console.log(" O professor recebe 05 aula excedente")
     } else if ( numeroAula ===34){
        console.log(" O professor recebe 06 aula excedente")
             }
            }
