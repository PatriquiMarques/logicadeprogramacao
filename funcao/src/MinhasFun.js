
var tamanho
var vet = []
export function VetorNumAleatorios(tamanho, quanti) {
    var vet = []

    for (var i = 0; i < tamanho; i++) {
        vet[i] = parseInt(Math.random() * quanti)


    } return vet
}

export function solicitarNumero(nvezes) {
    var vet = []
    var vezes
    for (var i = 0; i < nvezes; i++) {

        vet[i] = leia.questionInt("Digite um Número")

    } return vet

}



export function NumAleatorios(quanti) {
    var numero
    var quanti

    for (var i = 1; i > 0; i--) {
        numero = parseInt(Math.random() * quanti)

    } return numero
}




