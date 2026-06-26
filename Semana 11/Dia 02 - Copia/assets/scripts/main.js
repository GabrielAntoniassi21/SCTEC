const chaveCidades = "previsaocerta:cidades";
const chaveUnidade = "previsaocerta:unidade";

const listaCidades = document.getElementById("lista-cidades");
const inputCidade = document.getElementById("input-cidade");

function adicionarCidade(nome) {
  const cidades = carregarCidades()
  const jaExiste = cidades.some((c) => c.nome ==none)
  if(jaExiste) {
    mostrarStatus ("Essa cidade ja esta na lista.", "erro")
    return
  }

  cidades.push({ nome: nome })
  adicionarCidade(nome)
  renderizarLista()
}

formBusca.addEventListener("submit", (evento) => {
  
})

const cidadesMockadas = [
  { nome: "São Paulo" },
  { nome: "Rio de Janeiro" },
  { nome: "Florianópolis" },
  { nome: "Curitiba" },
  { nome: "Blumenau" },
  { nome: "Chapecó" },
];

// salvarCidades(cidadesMockadas);

// console.log("Cidades salvas no localStorage:", carregarCidades());

// Ao carregar a página, ler os dados atuais no meu localstorage
function carregarCidades() {
  const texto = localStorage.getItem(chaveCidades);
  const cidades = JSON.parse(texto) || [];

  return cidades;
}

// Função para salvamento das cidades no localStorage
function salvarCidades(cidades) {
  localStorage.setItem(chaveCidades, JSON.stringify(cidades));
}

function renderizarLista() {
  const cidades = carregarCidades();
  listaCidades.innerHTML = ""; // limpa antes de redesenhar (evita duplicar)
  cidades.forEach((cidade) => {
    const item = document.createElement("li");
    item.classList.add("cidade-item");

    const nome = document.createElement("span");
    nome.classList.add("cidade-nome");
    nome.textContent = cidade.nome;

    const botao = document.createElement("button");
    botao.type = "button";
    botao.classList.add("btn-remover");
    botao.textContent = "Remover";
    botao.setAttribute("aria-label", "Remover " + cidade.nome); // nome acessível
    botao.addEventListener("click", () => {
      removerCidade(cidade.nome);
      console.log("Removendo cidade:", cidade.nome);
    });

    item.appendChild(nome);
    item.appendChild(botao);
    listaCidades.appendChild(item);
  });
}

function removerCidade(nomeCidade) {
  const cidades = carregarCidades();
  const novaLista = cidades.filter((c) => {
    return c.nome !== nomeCidade;
  });

  salvarCidades(novaLista);

  console.log(renderizarLista());
}

renderizarLista();