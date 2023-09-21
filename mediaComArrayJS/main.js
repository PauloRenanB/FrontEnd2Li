var notas = [];

for (var i = 0; i < 3; i++) {
    var nota = parseFloat(prompt("Digite sua nota: "))
    notas.push(nota)
}

var soma = 0;
for (i of notas) {
    soma += i;
}

var media = soma / notas.length

if (media <= 4) {
    console.log("Reprovado!")
} else if (media > 4 && media < 7) {
    console.log("Em recuperação!")
    var notaRec = parseFloat(prompt("Digite a nota da recuperação: "))
    var novaSoma = notaRec + media
    var mediaRec = novaSoma / 2

    if (mediaRec >= 5) {
        console.log("Aprovado!")
    }else {
        console.log("Reprovado!")
    }
     
} else {
    console.log("Aprovado!")

}

console.log(soma)
console.log(media)
console.log(mediaRec)

