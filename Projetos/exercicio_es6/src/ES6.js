// Cria um array de objetos, onde teremos como atributos do objeto: o nome e a nota de alunos;

// • Criar uma função que irá retornar apenas os alunos que tiveram a nota maior ou igual à 6;

const alunos = [
    { nome: 'Guilherme', nota: 8.5},
    { nome: 'Maria', nota: 7.0},
    { nome: 'Pedro', nota: 6.5},
    { nome: 'Ana', nota: 9.0 },
    { nome: 'Luiza', nota: 8.0 }
]

const alunosMaiorQue6 = aluno => aluno.nota > 5

const alunosMedia = alunos.filter(alunosMaiorQue6)

console.log(alunosMedia)