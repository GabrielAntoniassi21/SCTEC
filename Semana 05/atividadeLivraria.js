/**
 * class livro
 * --titulo
 * --autor
 * --disponivel (inicia com true)
 * 
 * emprestar() -> se disponivel for true, empresta o livro e torna disponivel false
 * devolver() -> se disponivel for false, devolve o livro e torna disponivel true
 * status() -> retorna o status do livro(nome do livro, autor, disponivel ou emprestado)*/
class Livro {
    titulo = ""
    autor = ""
    disponivel = true

    constructor(titulo, autor){
        this.titulo = titulo
        this.autor = autor
    }

    emprestar(){
        if (this.disponivel === false){
            return console.log(`O livro ${this.titulo} não está disponível para empréstimo.`)
        }
        this.disponivel = false
        return console.log(`O livro ${this.titulo} foi emprestado com sucesso.`)
    }

    devolver(){
        if (this.disponivel === true){
            return console.log(`O livro ${this.titulo} não está emprestado.`)
        }
        this.disponivel = true
        return console.log(`O livro ${this.titulo} foi devolvido com sucesso.`)
    }

    status(){
       console.log(`Título: ${this.titulo} | Autor: ${this.autor} | Status: ${this.disponivel ? "Disponível" : "Emprestado"}`)
    }
}

const livro1 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien")
console.log(livro1.status())
livro1.emprestar()
