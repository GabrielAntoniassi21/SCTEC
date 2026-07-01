// const prompt = require("prompt-sync")();
// const chalk = require("chalk");

import promptSync from "prompt-sync";
import chalk from "chalk";

import perguntas from "./perguntas.js";

import verificarAcertos from "./placar.acertos.js";

import verificarErros from "./placar.erros.js"

const prompt = promptSync();

// const resposta = prompt("Qual o seu nome? ");

// const resposta = prompt("Nome: ");

// console.log(chalk.bold.blue(resposta));

let acertos = 0;

let erros = 0;

for (let i = 0; i < perguntas.length; i++) {
  const questao = perguntas[i];

  console.log(chalk.bold.blue("\n" + questao.pergunta));
  console.log(chalk.bold.hex("#FFA500")(questao.alternativas.join("    ")));

  const resposta = prompt("Qual a sua resposta (número)?");

  if (Number(resposta) === questao.correta) {
    console.log(chalk.bold.green("Acertou!"));
    acertos++;
  } else {
    console.log(chalk.bold.red("Errou!"));
    erros++;
  }

  // console.log(questao);
}

verificarAcertos(acertos);
verificarErros(erros)