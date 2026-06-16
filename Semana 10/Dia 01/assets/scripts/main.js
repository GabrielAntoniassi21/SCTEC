console.log("main.js");

const formContato = document.getElementById("formulario");
const mensagemErro = document.getElementById("mensagem-erro");
const erroNome = document.getElementById("erro-nome");

formContato.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  console.log("Nome:", nome);
  console.log("Telefone:", telefone);
  console.log("Email:", email);
  console.log("Mensagem:", mensagem);

  if (nome === "" || telefone === "" || email === "" || mensagem === "") {
    mensagemErro.textContent = "Todos os campos são obrigatórios";
  } else {
    mensagemErro.textContent = "";
  }

  if (nome === "") {
    erroNome.textContent = "O campo nome é obrigatório";
  } else {
    erroNome.textContent = "";
  }
});