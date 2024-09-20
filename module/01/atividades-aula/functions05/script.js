function mostrarNome() {
  let nome = prompt("Digite o seu nome completo:");
  let caracteresTotal = nome.length;

  document.getElementById("mostar_nome").innerHTML = `${nome} = ${caracteresTotal}`;
}

mostrarNome();
