const prompt = require('prompt-sync')();

function listarExercicios(){
    console.log(`
        1 - Corrida
        2 - Caminhada
        3 - Ciclismo
        4 - Remo
        5 - Natação
        `)
    
}

listarExercicios()

exercicioEscolhido = prompt("Escolha um dos exercicios acima: ")

    console.log(exercicioEscolhido)
