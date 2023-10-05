// 3) Faça um programa que, dado um conjunto de N números, determine o menor valor, 
// o maior valor e a soma dos valores.

var nums = []
var numMenor = 10000000;
var numMaior = 0;
var soma = 0;

for (var i = 0; i < 6; i++){
    var num = parseFloat(prompt("Digite um número: "))
    nums.push(num)
}

for (i of nums){
    if (i > numMaior){
        numMaior = i
    } else if (i < numMenor){
        numMenor = i
    }
}

for (i of nums){
    soma += i
}


console.log("Maior valor: "+numMaior)
console.log("Menor valor: "+numMenor)
console.log("A soma dos valores: "+soma)