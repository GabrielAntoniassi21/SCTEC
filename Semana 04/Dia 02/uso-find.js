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

console.log(
    produtos.find((produto) =>{
        return produto.nome.toLocaleLowerCase() === "arroz".toLocaleLowerCase()
    })
)