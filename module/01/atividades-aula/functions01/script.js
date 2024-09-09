// Variáveis para armazenar os números selecionados
let numero1 = null;
let numero2 = null;

// Função para escolher o número quando o botão é clicado
function escolherNumero(event) {
    const valor = parseFloat(event.target.getAttribute("data-valor"));

    // Verifica qual grupo de botões foi clicado e define o número
    if (!numero1) {
        numero1 = valor;
        alert("Primeiro número escolhido: " + numero1);
    } else if (!numero2) {
        numero2 = valor;
        alert("Segundo número escolhido: " + numero2);
    } else {
        alert("Você já escolheu dois números!");
    }
}

// Função para calcular a soma e exibir o resultado
function calcularSoma() {
    if (numero1 !== null && numero2 !== null) {
        const total = numero1 + numero2;
        document.getElementById("resultado").innerText = "O total da soma é: " + total;
        console.log("O total da soma é: " + total);
    } else {
        alert("Por favor, selecione dois números!");
    }
}

// Adiciona event listeners para todos os botões de números
const botoesNumero = document.querySelectorAll(".numero");
botoesNumero.forEach((botao) => {
    botao.addEventListener("click", escolherNumero);
});

// Adiciona event listener para o botão de calcular soma
document.getElementById("calcularBtn").addEventListener("click", calcularSoma);
