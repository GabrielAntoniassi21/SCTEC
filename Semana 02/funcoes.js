/* function saudacao() {
    console.log('Olá, seja bem-vindo!')
 }

 saudacao()*/  // só vai executar se colocar o nome da função e os parenteses

 /*
 function saudacao(nome) {  // o parametro aplicado deve ser o mesmo que for posto no codigo
    console.log('Olá ' + nome + ', seja bem-vindo!')
 }

 saudacao('Gabriel')  // no retorno voce deve colocar o conteudo a ser apresentado com o parametro

 */

/*
 function soma(numero1, numero2){
    console.log(numero1 + numero2)
 }

 soma(5, 3)

*/

/*
function saudacao(nome1, nome2){
    //console.log('Ola,' + nome1 + 'e' + nome2 + 'sejam bem-vindos' )
    console.log(`Olá, ${nome1} e ${nome2} sejam bem-vindos`)
 }

 saudacao('Gabriel', 'Vanessa')
*/
 

 /*
 const nome = input("Digite seu nome")

 saudacao(nome, "alice")
*/

//função com multiplos parametros
function criarPerfil (nome, idade, cidade = "Não informado"){  // primeiro colocar parametros obrigatorios e depois colocar opcionais
    console.log("nome: " + nome)
    console.log("idade: " + idade)
    console.log("cidade: " + cidade)
    console.log("----" )
}
criarPerfil ("Gabriel", 18, "Orleans")