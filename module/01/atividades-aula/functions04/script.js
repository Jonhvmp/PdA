function adicionarValores(valorA, valorB) {
  // Soma
  let resultadoFinal = valorA + valorB;

  // Função que mostra o resultado
  function mostrarResultado() {
    alert("O resultado da soma é: " + resultadoFinal);
  }

  // Chama a função
  mostrarResultado();
}

// Pede ao usuário que insira dois valores
let primeiroValor = parseFloat(prompt("Insira o primeiro valor:"));
let segundoValor = parseFloat(prompt("Insira o segundo valor:"));

// Chama a função de soma
adicionarValores(primeiroValor, segundoValor);
