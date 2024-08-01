import leia from "readline-sync"

var nome
var melhorJogador
var gols = 0
var passeCerto = 0
var passeErrado = 0
var pontuacao = 0
var maiorPontuacao = 0
var jogador = 0

while(jogador < 3 ){
    nome = leia.question ("DIGITE O NOME DO JOGADOR \n")
    gols = leia.questionInt("DIGITE A QUANTIDADE DE GOLS \n")    
    passeCerto = leia.questionInt("DIGITE A QUANTIDADE DE PASSES CERTOS \n") 
    passeErrado = leia.questionInt("DIGITE A QUANTIDADE DE PASSES  ERRADOS \n")

        pontuacao = ((gols*50) + (passeCerto*10) ) - (passeErrado * 5)

    if( pontuacao < 50){
    console.log ("O JOGADOR " + nome + " TEVE UMA PESSIMA PARTIDA")

    } else  if( pontuacao > 50 && pontuacao < 100){
            console.log ("O JOGADOR " + nome + " PARTIDA RUIM ")

    } else  if( pontuacao >= 100 && pontuacao < 150){
             console.log ("O JOGADOR " + nome + " FEZ O BASICO")

    }else  if( pontuacao >= 150 && pontuacao <= 200){
            console.log ("O JOGADOR " + nome + " FOI BEM NA PARTIDA")

    }else  if( pontuacao > 200){
            console.log ("O JOGADOR " + nome + " JOGOU DEMAIS")  
        }
    
     if (pontuacao > maiorPontuacao) {

        maiorPontuacao = pontuacao
        melhorJogador = nome
   } jogador++
}

console.log(nome, maiorPontuacao + " foi o melhor jogador")
