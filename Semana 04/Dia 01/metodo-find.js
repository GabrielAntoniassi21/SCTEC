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

// encontrando um produto específico usando o método find
// const nomeFuncao = (parametro) => return

/*
console.log(
    produtos.find((item) => item.nome  === "Feijão" )
)
*/

console.log(
    produtos.find((produto) => produto.valor === 20)
)