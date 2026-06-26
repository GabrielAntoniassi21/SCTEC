// MinhaFeira — fazer a lista de compras SOBREVIVER ao F5 com localStorage.
// Preencha os 3 TODOs. As partes marcadas (PRONTO) podem ficar como estão.

// chave da "gaveta" no localStorage (uma constante evita erro de digitação)
const chaveItens = "minhafeira:itens";

// referências do HTML (seleção por id = getElementById)
const formItem = document.getElementById("form-item");
const inputItem = document.getElementById("input-item");
const listaItens = document.getElementById("lista-itens");
const btnLimpar = document.getElementById("btn-limpar");
const status = document.getElementById("status");

// TODO 1 — LER os itens salvos.
// Dica: pegue o texto com localStorage.getItem(chaveItens), e devolva
// JSON.parse(texto) || []  (o "|| []" cobre a 1ª visita, quando ainda não há nada).
function carregarItens() {
  // escreva aqui
  const texto = localStorage.getItem(chaveItens);
  const feira = JSON.parse(texto) || [];

  return feira;
}

// TODO 2 — SALVAR os itens.
// Dica: localStorage.setItem(chaveItens, JSON.stringify(itens))
// (sem o JSON.stringify o array vira "[object Object]" — lixo).
function salvarItens(itens) {
  localStorage.setItem(chaveItens, JSON.stringify(itens))
}

// (PRONTO) DESENHAR a lista na tela a partir do array salvo.
function renderizarLista() {
  const itens = carregarItens();
  listaItens.innerHTML = ""; // limpa antes de redesenhar (não duplica)

  itens.forEach(function (item) {
    const li = document.createElement("li");
    li.classList.add("item");

    const nome = document.createElement("span");
    nome.textContent = item.nome;

    li.appendChild(nome);
    listaItens.appendChild(li);
  });
}

// TODO 3 — LIGAR o formulário: ao enviar, adicionar o item e salvar.
// Roteiro: preventDefault → ler inputItem.value.trim() → se vazio, sair →
//          carregar o array, dar push({ nome }) → salvar → renderizar → limpar o input.
formItem.addEventListener("submit",  (evento) => {
  evento.preventDefault()

  const nome = inputItem.value.trim()

  if (!nome || nome == "") return

  const itens = carregarItens()

  itens.push({ nome })

  salvarItens(itens)
  renderizarLista()
  inputItem.value == ""
});

btnLimpar.addEventListener('click', () => {
  localStorage.removeItem(chaveItens)

  renderizarLista()
})

// (PRONTO) primeira pintura ao abrir a página (desenha o que já estava salvo)
renderizarLista();