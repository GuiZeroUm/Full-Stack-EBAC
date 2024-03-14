const nome = 'Guilherme'
const idade = 19
const ehMaiorDeIdade = true
const conhecimentos = ['htlm', 'css', 'javascript']

const Pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

console.log(typeof nome)
console.log(typeof idade)
console.log(typeof ehMaiorDeIdade)
console.log(typeof conhecimentos)
console.log(typeof Pessoa)

//perguntando se conhecimentos é uma instancia de Array
console.log(conhecimentos instanceof Array)