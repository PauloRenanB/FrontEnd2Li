// 2) Faça um programa que peça 10 números inteiros, calcule e mostre a quantidade de 
// números pares e a quantidade de números ímpares.

var nums = []
var numPares = []
var numImpares = []

for (var i = 0; i < 10; i++){
    var num = parseFloat(prompt("Digite um número: "))
    nums.push(num)
}

for (i of nums){
    if (i % 2 == 0){
        numPares.push(i)
    } else {
        numImpares.push(i)
    }
}

console.log("Quantidade de números pares: "+numPares.length)
console.log("Quantidade de números impares: "+numImpares.length)