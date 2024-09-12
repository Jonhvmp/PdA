// Função para verificar se o número é par ou ímpar
function verificarParImpar() {
  const numero = parseInt(document.getElementById("numeroInput").value);
  const resultadoDiv = document.getElementById("resultado");

  // Verifica se foi inserido um número válido
  if (isNaN(numero)) {
      resultadoDiv.innerText = "Por favor, insira um número válido!";
      resultadoDiv.classList.add("impar");
      resultadoDiv.classList.remove("par");
      resultadoDiv.style.display = "block";
      return;
  }

  // Verifica se o número é par ou ímpar
  if (numero % 2 === 0) {
      resultadoDiv.innerText = `O número ${numero} é Par!`;
      resultadoDiv.classList.add("par");
      resultadoDiv.classList.remove("impar");
  } else {
      resultadoDiv.innerText = `O número ${numero} é Ímpar!`;
      resultadoDiv.classList.add("impar");
      resultadoDiv.classList.remove("par");
  }

  // Exibe o resultado com uma animação
  resultadoDiv.style.display = "block";
  resultadoDiv.style.opacity = 1;
}

// Adiciona o evento de clique ao botão de verificar
document.getElementById("verificarBtn").addEventListener("click", verificarParImpar);
