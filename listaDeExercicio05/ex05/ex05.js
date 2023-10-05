// 5) Escreva uma função que encontre a área e o perímetro de um círculo, de acordo 
// com o raio fornecido

function calcularPerimetro(raio) {
    var perimetro = 2 * 3.14 * raio;
    return perimetro
}

var raio = parseInt(prompt("Digite o raio do circulo: "))
console.log(calcularPerimetro(raio));

