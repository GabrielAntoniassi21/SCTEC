console.log('script.js')

const btnConectar = document.getElementById('btn-conectar')
const spanMensagem = document.querySelector('#mensagem')
const botoes = document.querySelectorAll('button')
const btnEsqueciSenha = document.getElementById('btn-esqueci-senha')

let email = 'gabriel@gmail.com'
let senha = '123456'

console.log(btnConectar)
console.log(spanMensagem)
console.log(botoes)

spanMensagem.textContent = ''

btnConectar.addEventListener('click', (event) => {
    if (email === 'gabriel@gmail.com' && senha === '123456') {
        spanMensagem.textContent = 'Conexão realizada com sucesso!'
    } else {
        spanMensagem.textContent = 'Email ou senha incorretos!'
    }
})


btnConectar.addEventListener('click', (event) => {
    console.log ('clicou no botao conectar');
})
btnEsqueciSenha.addEventListener('click', (event) => {
    console.log('Clicou no botão esqueci a senha')
})
spanMensagem.textContent = 'Sistema indisponivel'