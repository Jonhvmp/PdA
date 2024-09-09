// Array que armazena as falas
const falas = [
  "Não sou eu!!", // Fala 1
  "Eu tentei te ajudar desde o início!!", // Fala 2
  "Já pensou que o monstro pode ser controlado?" // Fala 3
];

// Função que conta o número de letras em cada fala (ignorando espaços)
const letras = falas.map(fala => fala.replace(/\s+/g, '').length);
// .map() aplica a função a cada fala no array
// .replace(/\s+/g, '') remove todos os espaços em branco
// .length conta o número de caracteres restantes

// Encontra o índice da fala com o maior número de letras
const suspeito = letras.indexOf(Math.max(...letras)) + 1;
// Math.max(...letras) encontra o maior número de letras no array
// .indexOf() retorna o índice da fala com esse número máximo de letras
// Adicionamos +1 ao índice para que fique no formato "1, 2, 3" (mais intuitivo para leitura)

// Imprime no console o suspeito com mais letras
console.log(`Suspeito ${suspeito} tem mais letras com ${Math.max(...letras)} letras.`);
