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


// versão 2
var diasSemana2 = 7 - 3; // 7 - 3 = 4, onde 3 é o dia da semana atual (quarta-feira).

// Exibindo o resultado
console.log("Faltam " + diasSemana2 + " dias para terminar a semana.");