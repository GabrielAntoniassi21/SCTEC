const prompt = require ('prompt-sync')();

//   1 - registrar atividade
//   2 - ver historico
//   3 - ver resumo]
//   0 - sair

function menu() {   // definindo uma variavel para as opções do do-while 
    console.log("1 - registrar atividade")  // mostrando as opções possiveis para o usuario
    console.log("2 - ver historico")
    console.log("3 - ver resumo")
    console.log("0 - sair")
}  

let opcao  // definindo a variavel que vai receber a opção escolhida pelo usuario
let opcoesValidas = ["1", "2", "3", "0"]  // definindo as opções validas para o usuario escolher

do {
    menu()

    opcao = prompt("Escolha uma opção: ")  // pedindo para o usuario escolher uma opção do menu

    if(!opcoesValidas.includes(opcao)) {  // verificando se a opção escolhida pelo usuario é valida
        console.log("Opção inválida, tente novamente.")  // se a opção for invalida, mostrar uma mensagem de erro
    }

} while (opcao !== "0")  // enquanto a opção escolhida for diferente de 0, o menu vai continuar aparecendo para o usuario

console.log("Obrigado por usar o sistema de registro de atividades!")  // quando o usuario escolher a opção 0, mostrar uma mensagem de agradecimento


