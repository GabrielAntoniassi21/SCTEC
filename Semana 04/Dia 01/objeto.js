const pessoa = {
    // Propriedade: VALOR (chave-valor)
    nome: "Gabriel",
    idade: 18,
    morto: false,

    endereco: undefined,
}

pessoa["cor_olho"] = "castanho" // Adicionando uma nova propriedade cor_olho ao objeto pessoa
pessoa.idade = 19 // Modificando o valor da propriedade idade do objeto pessoa

//removendo uma propriedade do objeto pessoa
delete pessoa.endereco,  // pessoa["endereco"]


console.log(`${pessoa.nome} tem ${pessoa.idade} anos.`) // Acessando as propriedades nome e idade do objeto pessoa
console.log(`${pessoa["nome"]} tem ${pessoa["idade"]} anos.`)
console.log(pessoa) // Exibindo o objeto pessoa completo

console.log(
    Object.keys(pessoa) // Exibindo as chaves do objeto pessoa
)

console.log(
    Object.values(pessoa)
) // Exibindo os valores do objeto pessoa   em forma de arrays