const prompt = require('prompt-sync')();

// --- FUNÇÕES E VARIÁVEIS ---

function menu() {
    console.log("\n--- MENU PRINCIPAL ---")
    console.log("1 - registrar atividade")
    console.log("2 - ver historico")
    console.log("3 - ver resumo")
    console.log("0 - sair")
}

let atividades = [] // Array global para persistir os dados
let exerciciosValidos = ["1", "2", "3", "4", "5"]

function Atividades() {
    console.log("\n--- LISTA DE EXERCÍCIOS ---")
    console.log("1 - Corrida")
    console.log("2 - Caminhada")
    console.log("3 - Ciclismo")
    console.log("4 - Remo")
    console.log("5 - Natação")
}

function NovaAtividade() {
    let exercicios;
    do {
        Atividades()
        exercicios = prompt("Escolha uma opção de exercício: ")

        if (!exerciciosValidos.includes(exercicios)) {
            console.log("Opção inválida, tente novamente.")
        }
    } while (!exerciciosValidos.includes(exercicios))

    let tipoExercicio;
    if (exercicios === "1") tipoExercicio = "Corrida";
    else if (exercicios === "2") tipoExercicio = "Caminhada";
    else if (exercicios === "3") tipoExercicio = "Ciclismo";
    else if (exercicios === "4") tipoExercicio = "Remo";
    else if (exercicios === "5") tipoExercicio = "Natação";

    let km = Number(prompt("Digite a distância (em km): "))
    let duracao = Number(prompt("Digite a duração (em minutos): "))

    let novaAtividade = {
        exercicio: tipoExercicio,
        distancia: km,
        tempo: duracao
    }

    atividades.push(novaAtividade)
    console.log("✅ Atividade registrada com sucesso!")
}

// --- LÓGICA PRINCIPAL ---

let opcao
let opcoesValidas = ["1", "2", "3", "0"]

do {
    menu()
    opcao = prompt("Escolha uma opção: ")

    if (opcao === "1") {
        // CONEXÃO: Chama a função apenas quando o usuário digita 1
        NovaAtividade() 
    } 
    else if (opcao === "2") {
        console.log("\n--- HISTÓRICO ---")
        console.log(atividades)
    }
    else if (opcao === "3") {
        console.log("\n--- RESUMO ---")
        console.log(`Total de atividades: ${atividades.length}`)
    }
    else if (opcao === "0") {
        console.log("Saindo...")
    }
    else if (!opcoesValidas.includes(opcao)) {
        console.log("Opção inválida, tente novamente.")
    }

} while (opcao !== "0")

console.log("Obrigado por usar o sistema de registro de atividades!")