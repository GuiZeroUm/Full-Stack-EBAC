// Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

class ArrayObjetos {
    constructor(nome, nota) {
        this.nome = nome
        this.nota = nota
    }

    alunosMaiorQue5 () {
        if (this.nota > 5) {
            return console.log(`O aluno ${this.nome} tem a nota de ${this.nota}`)
        } else {
            console.log(`O aluno ${this.nome} reprovou.`)
        }
    }
}

const aluno = new ArrayObjetos('Guilherme', 5)
aluno.alunosMaiorQue5()
console.log(aluno)