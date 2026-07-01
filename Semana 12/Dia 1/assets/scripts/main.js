console.log("main.js");

const endereco = document.getElementById("endereco");
const personagem = document.getElementById("personagem");

async function buscaEndereco() {
  const cep = "13271450";

  const url = `https://viacep.com.br/ws/${cep}/json/`;

  const resposta = await fetch(url);
  // console.log(resposta);

  const dados = await resposta.json();

  console.log(dados);

  endereco.innerHTML = `
  <p>Rua: ${dados.logradouro}</p>
  <p>Bairro: ${dados.bairro}</p>
  <p>Cidade: ${dados.localidade}</p>
  <p>Estado: ${dados.uf}</p>
  `;
}

// async function buscaDadosPersonagens(id, nomePersonagem) {
//   const url = "https://hp-api.onrender.com/api/characters";

//   const resposta = await fetch(url);
//   const dados = await resposta.json();

//   console.log(dados);

//   // uso de método para encontrar por nome
//   // const personagemEncontrado = dados.find((personagem) => {
//   //   if (personagem.name === nomePersonagem) {
//   //     console.log(personagem);
//   //     return true;
//   //   }
//   //   return false;
//   // });

//   dados.forEach((p) => {
//     personagem.innerHTML = `
//       <p>Nome: ${p.name}</p>
//       <p>Nome Alternativo: ${p.alternate_names[0]}</p>
//       <img src="${p.image}" alt="${p.name}" width="200" />
//     `;
//   });

//   // console.log(dados[id].name);
//   // console.log(dados[id].alternate_names[0]);
//   // console.log(dados[id].wand.wood);

//   // const nome = dados[id].name;
//   // const nomeAlternativo = dados[id].alternate_names[0];

//   // personagem.innerHTML = `
//   //   <p>Nome: ${nome}</p>
//   //   <p>Nome Alternativo: ${nomeAlternativo}</p>
//   //   <img src="${dados[id].image}" alt="${nome}" width="200" />
//   // `;

//   // console.log(dados[2].alternate_names[3]);
//   // console.log(dados[2].wand.wood);
// }

//buscaEndereco();
//buscaDadosPersonagens(4, "Harry Potter");

// async function buscaDadosPersonagens() {
//   const url = "https://hp-api.onrender.com/api/characters";

//   const resposta = await fetch(url);
//   const dados = await resposta.json();

//   endereco.innerHTML = dados
//     .map((personagem, index) => {
//       return `
//             <div>
//                 <h2>Personagem ${index + 1}</h2>
//                 <p>Nome: ${personagem.name}</p>
//                 <p>Casa: ${personagem.house || "Nao informada"}</p>
//                 <p>Ator/Atriz: ${personagem.actor || "Nao informado"}</p>
//                 <p>Especie: ${personagem.species}</p>
//                 <p>Madeira da varinha: ${personagem.wand.wood || "Nao informada"}</p>
//                 <img src="${personagem.image}" width="150">
//             </div>
//         `;
//     })
//     .join("");
// }

//buscaDadosPersonagens();

async function buscaUsuarios() {
  const url = "./assets/dados/usuarios.json";

  const resposta = await fetch(url);
  const dados = await resposta.json();
  console.log(dados);
}

buscaUsuarios();
