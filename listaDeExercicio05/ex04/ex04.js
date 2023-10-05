// 4) Um funcionário de uma empresa recebe aumento salarial anualmente. Sabe-se que:
// a. Esse funcionário foi contratado em 1995, com salário inicial de R$ 1.000,00;
// b. Em 1996 recebeu aumento de 1,5% sobre seu salário inicial;
// c. A partir de 1997 (inclusive), os aumentos salariais sempre correspondem ao 
// dobro do percentual do ano anterior. Faça um programa que determine o 
// salário atual desse funcionário. Após concluir isto, altere o programa 
// permitindo que o usuário digite o salário inicial do funcionário.

function calcularSalarioAtual(salarioInicial, anosTrabalhados) {
    var salarioAtual = salarioInicial;
    var percentualAumento = 0.015;

    for (var ano = 1; ano <= anosTrabalhados; ano++) {
        salarioAtual += salarioAtual * percentualAumento;
        percentualAumento *= 2;
    }
    return salarioAtual;
}

var salarioInicial = parseFloat(prompt("Digite o salário inicial do funcionário: R$"));
var anosTrabalhados = 2023 - 1995;
var salarioFinal = calcularSalarioAtual(salarioInicial, anosTrabalhados);

console.log("O salário atual do funcionário é de R$ "+ salarioFinal);