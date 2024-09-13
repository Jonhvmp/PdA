function adicionarValores(valorA, valorB) {
  // Soma
  let resultadoFinal = valorA + valorB;

  // Função que mostra o resultado
  function mostrarResultado() {
    alert("O resultado da soma dos números é: " + resultadoFinal);
  }

  // Chama a função
  mostrarResultado();
}

// prompt aq
let primeiroValor = parseFloat(prompt("Insira o primeiro valor:"));
let segundoValor = parseFloat(prompt("Insira o segundo valor:"));

// Chamando a função de soma
adicionarValores(primeiroValor, segundoValor);
