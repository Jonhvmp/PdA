// Crie um sistema que pede ao user qual a sua idade e se o usuario for maior de 18 anos, ele pode retirar a sua carteira de motorista

// Solicitando a idade do 'user'
var idade = prompt("Por favor, insira a sua idade: ")

// Converte a idade para número inteiro
idade = parseInt(idade);

if (idade >=18) {
  alert("Você tem idade suficiente para tirar a carteira de habilitação.");
} else {
  alert("Você é menor de idade e não pode tirar a carteira de habilitação.");
}