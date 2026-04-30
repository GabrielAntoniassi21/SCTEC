const prompt = require('prompt-sync')();

let preco = 0;
let continuar = 's';
let totalGeral = 0; // Precisamos de uma variável para acumular o valor total

// 1. Funções ficam fora do loop para serem declaradas uma única vez
function multiplicar(a, b) {
    return a * b;
}

// 2. O loop para capturar os itens
while (continuar.toLowerCase() === 's') {
    let produto = prompt('Digite o nome do produto: ');
    let quantidade = parseInt(prompt('Digite a quantidade do produto: '));

    if (produto === "arroz") {
        preco = 20;
    } else {
        preco = 0; // Caso seja outro produto não cadastrado
    }

    let subtotal = multiplicar(preco, quantidade);
    totalGeral += subtotal; // Acumulamos o valor: totalGeral = totalGeral + subtotal

    console.log(`Produto: ${produto} | Preço: R$ ${preco} | Subtotal: R$ ${subtotal}`);
    
    continuar = prompt('Deseja adicionar mais itens? (s/n): ');
}

// 3. Exibição final (fora do loop)
console.log("-----------------------------------");
console.log("O valor total da compra é R$ " + totalGeral);