import leia from "readline-sync"

var gabarito = []
var resposta = []
var nota = 0

for(var i=1; i<11; i++){
    gabarito[i]= leia.question("Digite a alternativa correta da questao " + 1)
} for(var i=1; i<11; i++){
    resposta[i]= leia.question("Digite resposta que o aluno respondeu na questao " + 1 )
     if ( gabarito[i] === resposta[i]) {
        nota++
     }

} console.log(" A NOTA DO ALUNO É: " +nota) 
