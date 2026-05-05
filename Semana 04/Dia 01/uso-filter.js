const produtos = [
    {
        nome : "Arroz",
        valor : 20,
        estoque: 100
    },
    {
        nome : "Feijão",
        valor : 10,
        estoque: null
    },
    {
        nome : "Macarrão",
        valor : 15,
        estoque: 50
    }
]


const resultado =produtos.filter((produto) => 
        produto.nome.toLocaleLowerCase() === "arroz".toLocaleLowerCase()
     
    )
console.log(`O resultado da busca é: ${resultado[0].nome} e o valor é R$ ${resultado[0].valor}`)