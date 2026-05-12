const prompt = require('prompt-sync')();


// opções de atividades que serão consideradas validas
let opcoesValidas = ["0", "1", "2", "3", "4"]
// opções de atividades que serão consideradas validas
let exerciciosDisponiveis = ["Corrida", "Caminhada", "Ciclismo", "Remo", "Natação"]
let atividade = [] // array para armazenar as atividades registradas pelo usuario

// função para listar as opções de exercícios disponíveis para o usuário escolher
function listarExercicios() {  
    console.log(`
        0 - Corrida
        1 - Caminhada
        2 - Ciclismo
        3 - Remo
        4 - Natação
    `) 
}
// chamando a função para listar as opções de exercícios disponíveis para o usuário escolher
listarExercicios()
// pedindo para o usuário escolher uma opção de exercício
exercicioEscolhido = prompt("Escolha um dos exercicios acima: ")
// verificando se a opção escolhida pelo usuário é válida, ou seja, se está presente no array de opções válidas
if (opcoesValidas.includes(exercicioEscolhido)) { 
    console.log("opção válida")
// pedindo para o usuário informar a distância percorrida e a duração da atividade, e convertendo essas informações para números
    distancia = Number(prompt("Informe a distância percorrida (em km): "))
    duracao = Number(prompt("Informe a duração da atividade (em minutos): "))



// exibindo as informações da atividade registrada, incluindo o tipo de exercício escolhido, a distância percorrida e a duração da atividade
    console.log(exerciciosDisponiveis[exercicioEscolhido])
    console.log(`Distância: ${distancia} km`)
    console.log(`Duração: ${duracao} minutos`)
// criando um objeto para armazenar as informações da atividade registrada, incluindo o tipo de exercício escolhido, a distância percorrida e a duração da atividade, e adicionando esse objeto ao array de atividades registradas
    const novaAtividade = {
        exercicio: exerciciosDisponiveis[exercicioEscolhido],
        distancia: distancia,
        duracao: duracao
    }
    atividade.push(novaAtividade)// adicionando o objeto da nova atividade ao array de atividades registradas

    console.log(`Parabens essa é a sua ${atividade.length}° atividade registrada!`)// exibindo uma mensagem de parabéns para o usuário, informando quantas atividades ele já registrou até o momento

} else {
    console.log("opção inválida")// se a opção escolhida pelo usuário não for válida, exibe uma mensagem de erro
 }




