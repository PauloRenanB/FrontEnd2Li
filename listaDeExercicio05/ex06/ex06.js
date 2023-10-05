// 6) Escreva uma função que informe o retorno de um investimento (montante) com 
// base nos valores do capital inicial, tempo em meses e taxa de juros mensal, 
// fornecidos pelo usuário.

// Use a fórmula: M = C * (1+i)t

// Onde:
// ▪ C = Capital inicial investido
// ▪ i = Taxa de juros, em percentual
// ▪ t = Tempo do investimento, em meses

// Exiba o resultado com duas casas decimais.


function calcularMontante() {
    var capitalInicial = parseFloat(prompt("Digite o capital inicial:"));
    var taxaJuros = parseFloat(prompt("Digite a taxa de juros (em percentual):"));
    var tempoMeses = parseInt(prompt("Digite o tempo do investimento (em meses):"));
  
    taxaJuros = taxaJuros / 100;
  
    var montante = capitalInicial * Math.pow((1 + taxaJuros), tempoMeses);
  
    montante = montante.toFixed(2);
  
    console.log("O montante após " + tempoMeses + " meses será de R$ " + montante);
  }
  

  calcularMontante();