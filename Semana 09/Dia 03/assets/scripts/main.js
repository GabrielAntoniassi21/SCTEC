const form = document.getElementById("form")
const mensagem = document.getElementById("mensagem")

form.addEventListener("submit", function (event) {
    event.preventDefault()

    const email = document.getElementById("email").value
    const cpf = document.getElementById("cpf").value
    const password = document.getElementById("password").value

    console.log("Email:", email)
    console.log("Cpf:", cpf)
    console.log("Password:", password)

        if (password.length < 8) {
          mensagem.textContent = ` A senha deve conter pelo menos 8 caracteres. `
          mensagem.classList.remove('text-sucess')
          mensagem.classList.add('text-nega')
        } else {
          mensagem.textContent = ` Informações enviadas. `
          mensagem.classList.remove('text-nega')
          mensagem.classList.add('text-sucess')
        }

})
