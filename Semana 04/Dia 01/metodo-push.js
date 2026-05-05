const pessoas = [
    {
        nome : "Gabriel",
        idade : 19
    },
    {
        nome : "Maria",
        idade : 18
    }
]
const produtos = [
    {
        nome : "Arroz",
        preco : 20,
        estoque: 100
    },
    {
        nome : "Feijão",
        preco : 10,
        estoque: null
    }
]

console.log(pessoas) // Exibindo o array de objetos pessoas
console.log(produtos) // Exibindo o array de objetos produtos   

// adicionadno um novo objeto ao array pessoas
pessoas.push({
    nome : "João",
    idade : 20
})
console.log(pessoas) // Exibindo o array de objetos pessoas atualizado