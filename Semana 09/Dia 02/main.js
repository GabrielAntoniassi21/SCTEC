console.log("main.js");

const formLogin = document.querySelector('form')

formLogin.addEventListener("submit", (event) => {
  // Responsável por evitar o reload da página ao submeter um formulário
  event.preventDefault()

  /*const email = document.getElementById('email').value
  const senha = document.getElementById('senha').value

  console.log("Email: ", email);
  console.log("Senha: ", senha);

  const ingresso = document.getElementById('ingresso').checked
  const seguro = document.getElementById('seguro')
  const traslado = document.getElementById('traslado').checked

  console.log("Ingresso: ", ingresso);
  

  const extras = []

  if (ingresso) {
    extras.push('Ingresso')
  }
  // if (seguro.checked) extras.push('Seguro')
  if (seguro.checked) {
  extras.push('Seguro')
}


if (traslado) {
  extras.push('Traslado')
}

console.log(extras);

const pacoteEscolhido = document.querySelector('input[name="pacote"]:checked');

if (pacoteEscolhido) {
  console.log(pacoteEscolhido.value);
}

*/
  const cidade = document.getElementById('cidade').value

  console.log(cidade);
  
  const anuncio = document.getElementById("anuncio");
  const contador = document.getElementById("contador");

  anuncio.addEventListener("input", () => {
    contador.textContent = `${anuncio.value.length}/200 caracteres`;
  });



});