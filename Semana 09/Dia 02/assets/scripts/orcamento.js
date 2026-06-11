/*
1 - Escute o evento submit do formulário (com preventDefault())
2 - Capture todos os campos: nome, e-mail, telefone, cidade-sede (select), tipo de pacote (radio), extras (monte a lista com push), datas e observações
3 - Exiba um resumo organizado do pacote na própria página (innerHTML ou createElement)
4 - Bônus: mostre "Nenhum extra selecionado" quando a lista estiver vazia
*/

const formOrcamento = document.getElementById("form-orcamento");
const resumo = document.getElementById("resumo");

formOrcamento.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const telefone = document.getElementById("telefone").value;
  const cidade = document.getElementById("cidade").value;
  const dataIda = document.getElementById("data-ida").value;
  const dataVolta = document.getElementById("data-volta").value;
  const observacoes = document.getElementById("observacoes").value;

  // Checkbox
  const extras = [];

  const ingresso = document.getElementById("ingresso").checked;
  const seguro = document.getElementById("seguro");
  const traslado = document.getElementById("traslado").checked;

  if (ingresso) {
    extras.push("Ingresso");
  }
  if (seguro.checked) {
    extras.push("Seguro");
  }
  if (traslado) {
    extras.push("Traslado");
  }

  // Radio Button
  const pacoteEscolhido = document.querySelector(
    'input[name="pacote"]:checked',
  );

  console.log(nome);
  console.log(email);
  console.log(telefone);
  console.log(cidade);
  console.log(dataIda);
  console.log(dataVolta);

  resumo.innerHTML = `
        <h3>Resumo do pedido</h3>
        <p><strong>Cliente:</strong> ${nome} (${email} / ${telefone})</p>
        <p><strong>Destino:</strong> ${cidade}</p>
        <p><strong>Pacote:</strong> ${pacoteEscolhido.value}</p>
        <p><strong>Extras:</strong> ${extras}</p>
        <p><strong>Período:</strong> ${dataIda} até ${dataVolta}</p>
        <p><strong>Observações:</strong> ${observacoes}</p>
    `;
});