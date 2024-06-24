import leia from "readline-sync"

var cont = 1
var copia = 1
var valor = 0

while (cont <=500)  {

     valor = copia* 0.33
    console.log ( " O VALOR DE " + copia + " COPIAS E: " + valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'} ))

    cont ++
    copia ++
}
