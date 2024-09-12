// Sistema para calcular o faltante para atingir a meta

function calcularFaltante(metaFinal, valorAtual) {
  return metaFinal - valorAtual;
}

let metaFinal = parseFloat(prompt("Digite o valor final da meta:"));
let valorAtual = parseFloat(prompt("Digite o valor atual:"));

let faltante = calcularFaltante(metaFinal, valorAtual);

console.log(`Faltam ${faltante} pontos para bater a meta.`);
alert(`Faltam ${faltante} pontos para bater a meta.`);