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
  console.log(nome + ' pode comer a sobremesa, e no caso ele comeu o prato principal, referente a sobremesa ele já ' + (sobremesa ? 'comeu a sobremesa' : 'não comeu a sobremesa')); // operador ternário (condição ? verdadeiro : falso)
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

// criando um sistema que o usuario possa comprar um produto, caso o saldo dele seja maior que o valor do produto

// função para reutilizar o código
function podeComprar(saldo, valorProduto){ // função que verifica se o saldo é maior que o valor do produto
  return valorProduto <= saldo; // return = retornar "serve para retornar um valor de uma função"
}

var saldo = 2000;
var valorProduto = 1900;

if (podeComprar(saldo, valorProduto)){
  console.log("Compra realizada com sucesso");
} else {
  console.log("Saldo insuficiente");
}

// sistema que exibe uma mensagem no console sugerindo abaixar o volume do fone apenas se o valor do volume for maior que 6
var volume = 7;

if (volume > 6){
  console.log("Sugestão: Abaixe o volume do fone.");
}

// sistema que permite o usuario realizar compras, porém, caso o valor da compra seja maior que o saldo, exiba uma mensagem no console informando que o saldo é insuficiente, caso a compra seja realizada com sucesso, exiba uma mensagem no console informando que a compra foi realizada com sucesso e atualize o saldo do usuario com o valor da compra abatendo do saldo atual e exiba o saldo atualizado no console

function realizarCompra(saldo, valorCompra){
   return saldo >= valorCompra;
}



var saldo = 2000;
var valorCompra = 1900;

if (realizarCompra(saldo, valorCompra)){
  saldo -= valorCompra;
  console.log("Compra realizada com sucesso, saldo atualizado: R$" + saldo);
} else {
  console.log("Saldo insuficiente");
}

console.log("Saldo atual: R$" + saldo);