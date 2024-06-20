
// var num = 0
// while (num < 10) {
//     console.log( "cadastro " + num)
//       num++

// }

var estaCarregando = true
var porcentagem = 0

while (estaCarregando ) {
    console.log( porcentagem +"% Carregando... ")
      
    if (porcentagem < 100){
        porcentagem += 5
    }else{
        estaCarregando=false
    }

}