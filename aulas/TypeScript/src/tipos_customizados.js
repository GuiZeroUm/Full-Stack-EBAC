"use strict";
const alunos = [
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
];
alunos.push({
    nome: 'Julia',
    cursos: ['Arquitetura'],
    idade: 29
});
const novoAluno = {
    nome: 'Lucas',
    idade: 32
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
