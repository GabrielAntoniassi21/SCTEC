const chaveCidades = "previsaocerta:cidades";
const chaveUnidade = "previsaocerta:unidade";

const listaCidades = document.getElementById("lista-cidades");
const inputCidade = document.getElementById("input-cidade");

const formBusca = document.getElementById("form-busca");
const status = document.getElementById("status");
const seletorUnidade = document.getElementById("seletor-unidade");

// guarda o último clima buscado, para redesenhar o card ao trocar °C/°F
let ultimoResultado = null;

function mostrarStatus(mensagem, tipo) {
  status.textContent = mensagem;
  status.className = ""; // limpa estados anteriores
  if (tipo === "erro") status.classList.add("status--erro");
  if (tipo === "carregando") status.classList.add("status--carregando");
  if (tipo === "sucesso") status.classList.add("status--sucesso");
}

function adicionarCidade(nome) {
  const cidades = carregarCidades();
  const jaExiste = cidades.some((c) => c.nome === nome);
  if (jaExiste) {
    mostrarStatus("Essa cidade já está na lista.", "erro");
    return;
  }
  cidades.push({ nome: nome });

  salvarCidades(cidades);
  renderizarLista();
}

formBusca.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nome = inputCidade.value.trim();

  if (!nome || nome === "") return;

  adicionarCidade(nome);
  buscaClima(nome);
  inputCidade.value = "";
});

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
//(-27.59311613190986, -48.57195364498678);

async function buscaClima(nome) {
  const lat = "-27.59";
  const lon = "-48.57";

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code&timezone=auto`;

  mostrarStatus("Carregando...", "carregando");

  try {
    const resposta = await fetch(url);

    if (!resposta.ok) {
      console.log("Servidor indisponível!");
      throw new Error("Servidor indisponível: ", resposta.status);
    }

    const dados = await resposta.json();

    const atual = dados.current;
    const tempo = decodificarTempo(atual.weather_code);

    const resultado = {
      nome: nome,
      temperaturaC: atual.temperature_2m,
      descricao: tempo.texto,
      icone: tempo.icone,
      momento: atual.time,
    };

    ultimoResultado = resultado; // memoriza para o toggle °C/°F redesenhar
    renderizarCard(resultado);
    mostrarStatus("", "sucesso");

    console.log(dados);
  } catch (error) {
    mostrarStatus("Não foi possível carregar os dados da cidade", "erro");
  }
}

//buscaClima();

function decodificarTempo(code) {
  const mapa = {
    0: { texto: "Céu limpo", icone: "☀️" },
    1: { texto: "Predomínio de sol", icone: "🌤️" },
    2: { texto: "Parcialmente nublado", icone: "⛅" },
    3: { texto: "Nublado", icone: "☁️" },
    45: { texto: "Névoa", icone: "🌫️" },
    48: { texto: "Névoa com geada", icone: "🌫️" },
    51: { texto: "Garoa fraca", icone: "🌦️" },
    61: { texto: "Chuva fraca", icone: "🌧️" },
    63: { texto: "Chuva moderada", icone: "🌧️" },
    65: { texto: "Chuva forte", icone: "⛈️" },
    71: { texto: "Neve fraca", icone: "🌨️" },
    80: { texto: "Pancadas de chuva", icone: "🌦️" },
    95: { texto: "Tempestade", icone: "⛈️" },
  };
  // (DIGITE este return ao vivo — é o conceito: o "|| {…}" cobre um código fora da lista)
  return mapa[code] || { texto: "Condição desconhecida", icone: "❓" };
}

// ===== Bloco 0.5: preferência de unidade (°C/°F) no localStorage =====
function carregarUnidade() {
  // se nunca escolheu, assume Celsius
  return localStorage.getItem(chaveUnidade) || "celsius";
}

function salvarUnidade(unidade) {
  localStorage.setItem(chaveUnidade, unidade);
}

function formatarTemperatura(celsius, unidade) {
  if (unidade === "fahrenheit") {
    const fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit.toFixed(1) + " °F";
  }
  return celsius.toFixed(1) + " °C";
}

// marca o radio certo ao abrir a página (reflete o que está salvo)
function restaurarUnidadeSelecionada() {
  const unidade = carregarUnidade();
  const radio = document.getElementById("unidade-" + unidade);
  if (radio) radio.checked = true;
}

// trocar o radio: salva a preferência e redesenha o card (se já houver dado)
seletorUnidade.addEventListener("change", (evento) => {
  salvarUnidade(evento.target.value);
  if (ultimoResultado) renderizarCard(ultimoResultado);
});

restaurarUnidadeSelecionada();

function renderizarCard(dado) {
  const card = document.getElementById("card-clima");

  const unidade = carregarUnidade(); // lê a preferência °C/°F (do Bloco 0.5)

  card.querySelector(".card-cidade").textContent = dado.nome || "Clima atual";

  // ícone grande = emoji da condição (o <p class="card-icone" role="img"> vira dinâmico)
  const icone = card.querySelector(".card-icone");
  icone.textContent = dado.icone;
  icone.setAttribute("aria-label", dado.descricao);

  // mira os <dd> dentro de cada .card-dado (por posição) e preenche:
  const valores = card.querySelectorAll(".card-dado dd");
  valores[0].textContent = formatarTemperatura(dado.temperaturaC, unidade); // Temperatura
  valores[1].textContent = dado.icone + " " + dado.descricao; // Condição
  valores[2].textContent = dado.momento; // Atualizado em
}