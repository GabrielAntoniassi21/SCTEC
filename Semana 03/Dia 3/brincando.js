let preço = 0

const prompt = require ('prompt-sync')();

let produto = prompt('Digite o nome do produto: '); // o programa vai receber o nome do produto

let quantidade = parseInt(prompt('Digite a quantidade do produto: ')); // o pragrama vai receber a quantidade do produto





function multiplicar(a, b) { //essa função vai multiplicar dois valores
         return a * b
}

if (produto === "arroz") {preço = 20} // define o preço do produto arroz

console.log("O preço do " + produto + " é R$ " + preço) // pragrama vai exibir o produto e o preço dele

let total = multiplicar(preço, quantidade) // o programa vai usar a variavel multiplicar para calcular o valor total da compra, multiplicando o preço do produto pela quantidade

console.log("O valor total da compra é R$ " + total) // o programa vai exibir o valor total da compra

