const lista = document.getElementById("lista")
const ul = document.getElementById("fazer")
ul.innerHTML = localStorage.getItem("fazer") || ""

lista.addEventListener ("submit", function (event){
    event.preventDefault()


    const add = document.getElementById("add").value
    const tarefas = document.getElementById("tarefas")
    const li = document.createElement("li")
    const botaoExcluir = document.createElement("button")
    botaoExcluir.type = "button"
    botaoExcluir.textContent = "Excluir"

    if (add === "") {
        alert("Digite uma tarefa!")
        return
    }

    console.log("adicionados: ", add )

    li.textContent = add

    botaoExcluir.addEventListener ("click", function() {
        li.remove()

        localStorage.setItem("fazer", ul.innerHTML)
    })

    li.appendChild(botaoExcluir)
    ul.appendChild(li)

        localStorage.setItem("fazer", ul.innerHTML)

    document.getElementById("add").value = ""

   
}) 
 
