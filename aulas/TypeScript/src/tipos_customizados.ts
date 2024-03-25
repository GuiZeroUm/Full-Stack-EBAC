type aluno = {
    nome: string,
    //? serve caso não precisemos necessariamente do atributo
    cursos?: string[],
    idade: number
}

const alunos: aluno[] = [
    {
    nome: 'Guilherme',
    cursos: ['Front-End', 'Back-End'],
    idade: 19
    },
    {
        nome: 'Ana',
        cursos: ['Front-End', 'Java'],
        idade: 23
    }
]

alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
})

const novoAluno: aluno = {
    nome: 'Lucas',
    idade: 32
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}