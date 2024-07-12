import leia from "readline-sync"

var i= 1
var nomeMaiorMedia
var MaiorMedia

while (i <= 10){
    var nome = leia.question("DIGITE O NOME  " + i + ": ")
    var somaNotas = 0.0
    for (var j = 1; j<= 3; j++){
        somaNotas = leia.questionFloat(" DIGITE NOTA 01: ")
    }
    var media = somaNotas /3;

    if(MaiorMedia === undefined || media> MaiorMedia) {
        MaiorMedia = media;
        nomeMaiorMedia = nome
    }

    i ++
}

console.log(" ESTUDANTE COM AMIOR MEDIA FOI "  + nomeMaiorMedia + " COM " + MaiorMedia)