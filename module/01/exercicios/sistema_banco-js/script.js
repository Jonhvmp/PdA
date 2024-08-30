// Define o saldo inicial do usuário.
let balance = 50;

// Define o preço da mochila.
const backpackPrice = 100;

// Função para verificar se o usuário tem saldo suficiente e oferecer a opção de compra.
function checkBalance() {
  if (balance < backpackPrice) {
    // O usuário não tem saldo suficiente para fazer a compra.
    console.log("You don't have enough balance to make the purchase. Would you like to deposit some more money?");
    
    // Obter o valor de depósito do usuário.
    const userInput = prompt("Enter the amount you want to deposit:");

    // Converter a entrada do usuário para um número.
    const depositAmount = Number(userInput);

    // Verificar se o valor inserido é válido.
    if (!isNaN(depositAmount) && depositAmount > 0) {
      // Adicionar o valor depositado ao saldo do usuário.
      balance += depositAmount;

      // Verificar novamente se o usuário tem saldo suficiente para comprar.
      if (balance >= backpackPrice) {
        console.log("You now have enough balance to make the purchase. Would you like to buy the backpack?");
        
        // Perguntar ao usuário se ele quer fazer a compra.
        const buyInput = prompt("Type 'yes' to purchase the backpack:");

        if (buyInput.toLowerCase() === 'yes') {
          // Subtrair o preço da mochila do saldo do usuário.
          balance -= backpackPrice;
          console.log("Purchase successful! Your remaining balance is: $" + balance);
        } else {
          console.log("Purchase canceled. Your balance is: $" + balance);
        }
      } else {
        console.log("You still don't have enough balance. Your current balance is: $" + balance);
      }
    } else {
      console.log("Invalid deposit amount. Please try again.");
    }
  } else {
    console.log("You have enough balance to make the purchase. Would you like to buy the backpack?");
    
    // Perguntar ao usuário se ele quer fazer a compra.
    const buyInput = prompt("Type 'yes' to purchase the backpack:");

    if (buyInput.toLowerCase() === 'yes') {
      // Subtrair o preço da mochila do saldo do usuário.
      balance -= backpackPrice;
      console.log("Purchase successful! Your remaining balance is: $" + balance);
    } else {
      console.log("Purchase canceled. Your balance is: $" + balance);
    }
  }
}

// Executar a função para iniciar o processo.
checkBalance();
