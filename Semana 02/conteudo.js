let numero = 15.5  //number
let nome = "nome"  //string

let verdadeiroOuFalso = true  //boolean
let funcionalidade = false // vai servir para bloquear acesso ou outros

let telefone = null // telefone neste momento é nulo, ou seja, não tem valor
let documento // sem definição do documento

//tipo de dados

let texto = "Olá mundo";

console.log(typeof texto);//console.log serve para mostrar oq esta aparecendo para o usuario

let soma = 5 + 3 + 3 + 5 + 6 + 4 + 4 + 5 * 2 / 2;

""=="" // igual a     "1" == 1  // true   //  resultado é true pq ambos vao ter o valor 1

""===""  // estritamente igual a   "1" === // false   / resultado é false porque um vai ser number o outro string

" > , < " //  maior, menor   // 20>20  // true

">= , <= " // maior ou igual, menor ou igual 

"!=" // Diferente de      //  1 != 2 // true

"!==" //  Estritamente diferente de    //   1 !== "1"    //  true

//operadores logicos

"||"   // OR(ou)   true || true  // true

"&&"  // AND(e)   false&&false  // true  // ambos tem que ser igual

//Sintaxe if

if (condição) {
    //executa se a condição for verdadeira
}  else {
    // execute se a condição for falsa   // não é obrigatório o uso dele  // só vai ser executado se a condição anterior for falsa
}

/* 3 elementos da função
function - palavra reservada
() - entram os parametros
     


 function nomeFuncao () {
      //codigo que sera executado
 }
  nomeFuncao
      //chama a função
*/


//parametros opcionais 
function saudacao(nome = "visitante"){
    console.log(`Ola, ${nome}!`)
}
saudacao()  // se nao colocar nada no parametro na hora de exibir ele vai voltar como visitante porque o nome visitante ja havia sido definido no parentese
saudacao("Gabriel")




/*Funções de retorno
 usar quando: guarda resultado em variavel, usar direto 


 void exibi algo na tela

 return numero faz calculos
 */
function soma(numero1, numero2){
    return numero1 + numero2
}

let resultado = soma(5,3)

console.log(`Resultado da soma: ${resultado}`)
console.log`resultado da soma (8 + 8): ${soma(8,8)}`

 /*
 return strig fomata texto
*/



/*
 return booleans
*/