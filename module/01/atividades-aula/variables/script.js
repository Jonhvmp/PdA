// Declarando as variáveis
var notaJoao = "9"; // tipo string, pois está entre aspas
var notaMaria = 10; // tipo number, pois não está entre aspas

// Convertendo a string para numero e somando as variáveis
var media = parseInt(notaJoao) + notaMaria; // 9 + 10 = 19, 'perseInt' converte a string para número

// Exibindo o resultado
console.log("A soma das notas é: " + media); // A soma das notas é: 19

// Calculando os dias restantes para terminar a semana
var diasSemana = 7 - new Date().getDay(); // 7 - 3 = 4, onde 3 é o dia da semana atual (quarta-feira).

// Exibindo o resultado dos dias restantes para terminar a semana
console.log("Faltam " + diasSemana + " dias para terminar a semana.");

// ========================================================================================================

// versão 2
var diasSemana2 = 7 - 3; // 7 - 3 = 4, onde 3 é o dia da semana atual (quarta-feira).

// Exibindo o resultado
console.log("Faltam " + diasSemana2 + " dias para terminar a semana.");

// ========================================================================================================

// Função para calcular a idade, criei essa função para reutilizar o código
function calcularIdade(anoNascimento) {
  // Obtendo o ano atual usando a função Date
  const anoAtual = new Date().getFullYear();  // Date().getFullYear() retorna o ano atual (2024)

  // Calculando a idade
  const idade = anoAtual - anoNascimento;

  // Retornando a idade calculada
  return idade;
}

// Declarando a variável com o ano de nascimento do usuário
var nameUser = "Jonh"; // Exemplo de nome de usuário
const anoNascimentoUsuario = 2004; // Exemplo de ano de nascimento

// Chamando a função calcularIdade e armazenando o resultado em uma variável
const idadeUsuario = calcularIdade(anoNascimentoUsuario); // 2024 - 2004 = 20

// Exibindo a idade do usuário no console
console.log("A idade do usuário " + nameUser + " é: " + idadeUsuario + " anos.");

// ========================================================================================================

// Versão 2
var nameUser2 = "Maria";
var anoNascimentoUsuario2 = 2000;

// Chamando a função calcularIdade e armazenando o resultado em uma variável
var idadeUsuario2 = calcularIdade(anoNascimentoUsuario2); // 2024 - 2000 = 24

// Exibindo a idade do usuário no console
console.log("A idade do usuário " + nameUser2 + " é: " + idadeUsuario2 + " anos."); // A idade do usuário Maria é: 24 anos.

// ========================================================================================================

// Calculando o saldo final da conta bancária do usuário
var saldoInicial = 300; // Saldo inicial da conta
var valorBlusinha = 10; // Valor da blusinha comprada
var valorIngressoCinema = 40; // Valor do ingresso do cinema
var valorComboPipoca = 30; // Valor do combo de pipoca
var depositoMae = 30; // Valor do depósito da mãe

var saldoFinal = saldoInicial - 
valorBlusinha - valorIngressoCinema - 
valorComboPipoca + depositoMae;

// Exibindo o saldo final da conta bancária do usuário
console.log("O saldo final da conta bancária do usuário é: " + saldoFinal + " reais.");