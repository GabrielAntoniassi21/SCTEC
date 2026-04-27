const precoOriginal = 150.00;
const desconto = 10;

function valorFinal(preco, desconto) {
    if(preco > 100){
        const valorDesconto = (preco * desconto) / 100;
        const precoFinal = preco - valorDesconto;

        return precoFinal;
    } else {
        return preco
    }
}

const resultado = valorFinal (precoOriginal, desconto);

console.log(`Preço Original: R$ ${precoOriginal}`);
console.log(`Valor final: R$ ${resultado}`);