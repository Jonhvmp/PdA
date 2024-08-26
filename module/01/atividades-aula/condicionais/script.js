// camelCase 
var primeiroNome = 'Jonh';

// snake_case
var segundo_nome = 'Alex';

// quais tipos de dados podemos ter?
// string = 'texto'
// number = 1, 2, 3
// boolean = true, false
// null = null
// undefined = undefined
// object = {}
// symbol = Symbol()

// exemplos de dados
var nome = 'Jonh';
var idade = 30;
var solteiro = true;
var carro = null;
var moto; // undefined

var pessoa = {
    nome: 'Jonh',
    idade: 30,
    solteiro: true,
    carro: null,
    moto: undefined
};

console.log(pessoa);

// como acessar os dados de um objeto?
console.log(pessoa.nome);
console.log(pessoa['nome']);

// como alterar os dados de um objeto?
pessoa.nome = 'Alex';
pessoa['nome'] = 'Alex';

console.log(pessoa.nome);

// Quais são as operações que podemos executar?
// + = adição
// - = subtração
// * = multiplicação
// / = divisão
// % = módulo
// ++ = incremento
// -- = decremento

// = = atribuição
// == = igualdade
// === = igualdade de valor e tipo
// exemplo de igualdade de valor e tipo
console.log(1 === '1'); // false, porque o tipo é diferente de number e string a mesma coisa com o valor
console.log(1 == '1'); // true, porque o valor é igual a 1 e 1
// != = diferente
// !== = diferente de valor e tipo

// > = maior que
// < = menor que
// verifique se o valor contido na blusa é menor que o valor contido no tênis
var blusa = 1050;
var tenis = 200;

if (blusa < tenis) {
    console.log('O valor da blusa é menor que o valor do tênis, o valor da blusa é R$' + blusa + ' e o valor do tênis é R$' + tenis + '.');
} else {
    console.log('O valor da blusa é maior que o valor do tênis, o valor da blusa é R$' + blusa + ' e o valor do tênis é R$' + tenis + '.');
}

// >= = maior ou igual
// <= = menor ou igual
// && = e  // serve para juntar duas condições
// || = ou  // serve para juntar duas condições
// ! = negação  // serve para negar uma condição

// Estruturas de controle
// if = se
// else = senão
// else if = senão se
// switch = escolha
// while = enquanto
// do while = faça enquanto
// for = para
// for in = para dentro
// for of = para de
// break = parar
// continue = continuar
// return = retornar
// try = tentar
// catch = pegar
// finally = finalmente

// portugol
// se (condição) {
//     comando a ser executado caso a condição seja VERADEIRA
// } senão {
//     comando a ser executado caso a condição seja FALSA
// }

// Estruturas de repetição
// while (condição) {
//     comando a ser executado enquanto a condição for VERADEIRA
// }

// Estruturas de dados
// array = []   // lista de elementos
// object = {}  // coleção de propriedades
// map = new Map()  // coleção de pares chave/valor
// set = new Set()  // coleção de valores únicos
// weakMap = new WeakMap()  // coleção de pares chave/valor fracos
// weakSet = new WeakSet()  // coleção de valores únicos fracos
// promise = new Promise()  // representa a conclusão ou falha de uma operação assíncrona
// queue = new Queue()  // fila de elementos
// stack = new Stack()  // pilha de elementos
// linkedList = new LinkedList()  // lista ligada de elementos 
// tree = new Tree()  // árvore de dados



// EXERCICIOS

// sistema que permite o usuario comer a sobremesa apenas se ela estiver comido todo o prato principal
var nome = 'Jonh';
var comeuPratoPrincipal = true;
var sobremesa = true;

if (comeuPratoPrincipal){
  console.log(nome + ' pode comer a sobremesa');
} else {
  console.log(nome + ' Não pode comer a sobremesa pois não terminou o prato principal' )
}

// sistema que permite o usuario comprar uma tv apenas se ela tiver MAIS de 32 polegadas e seu valor seja ATÉ 1900
var nome = 'Jonh';
var polegadas = 32;
var valor = 1900;

if (polegadas > 32 && valor <= 1900){ // && = e "serve para juntar duas condições"
  console.log(nome + ' pode comprar a tv');
} else {
  console.log(nome + ' Não pode comprar a tv pois não atende aos requisitos' )
}