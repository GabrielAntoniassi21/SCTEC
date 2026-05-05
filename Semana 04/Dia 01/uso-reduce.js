
const notas = [10, 7.5, 8, 6, 9]
/*
let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma = notas[i] + soma
}

console.log(soma / notas.length)

*/

const soma = notas.reduce((acumulador, nota) => {return acumulador + nota}, 0)

console.log(soma / notas.length)