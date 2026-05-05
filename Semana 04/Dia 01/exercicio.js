const preco = [
    { nome: "Camiseta", valor: 15 },
    { nome: "Calça", valor: 25.25 },
    { nome: "Tênis", valor: 10 },
    { nome: "Boné", valor: 399.9 },
    { nome: "Meia", valor: 20.2 },
    { nome: "Cinto", valor: 5.99 }
]

const soma = preco.reduce((acumulador, produto) => {return acumulador + produto.valor}, 0)

console.log(`Valor final do carrinho: ${soma.toFixed(2)}`)
