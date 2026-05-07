// exemplo 1 de map

//lista de preços original
const precos = [100, 250, 50, 75]

// aplicar o desconto nos preços
const comDesconto = precos.map((preco) => {
    return preco * 0.9
})


console.log("Preços originais:") 
console.log(precos)  // [100, 250, 50, 75]
console.log("Preços com desconto:") 
console.log(comDesconto)  // [90, 225, 45, 67.5]



// exemplo 2 de map

const precos = [100, 250, 50, 75]

// aplicar o desconto nos preços
const comDesconto = precos.map((preco) => {
    if(preco > 100) return preco * 0.9
    return preco
})


console.log("Preços originais:") 
console.log(precos)  // [100, 250, 50, 75]
console.log("Preços com desconto:") 
console.log(comDesconto)  // [90, 225, 45, 67.5]

// exemplo 3 de map

const usuarios = [
    {
        nome: "João",
        idade: 25
    },
    {
        nome: "Maria",
        idade: 30   
    },
    {
        nome: "Pedro",
        idade: 20
    }
]


const nomes = usuarios.map((usuario) => {
    return usuario.nome 
})

console.logg(nomes)  // ["João", "Maria", "Pedro"]

// exemplo 4 de map

const produtos = [
    {
        nome: "notebook",
        preco: 3000
    },
    {
        nome: "Mouse",
        preco: 150
    },
    {
        nome: "Teclado",
        preco: 200
    }
]

const precosFormatados = produtos.map((produto) => {
    return {
        nome: produto.nome,
        ValorReal: `R$ ${produto.preco.toFixed(2)}`,
        ValorDolar: `$ ${ (produto.preco * 5).toFixed(2)}`,
    }
})

console.log(precosFormatados)