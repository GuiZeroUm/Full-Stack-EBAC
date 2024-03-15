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

//primeira forma de acessar
console.log(Pessoa.nome)

//segunda forma de acessar
console.log(Pessoa['nome'])

//utilizando uma função para acessar o atributo
function exibeAtributo(nomeAtributo) {
    console.log(Pessoa[nomeAtributo])
}
exibeAtributo('nome')

//ou pessoa['sobrenome']
Pessoa.sobrenome = undefined

//estamos "congelando" o objeto Pessoa. Ou seja, não sendo possivel alterar os valores que estão dentro do mesmo
Object.freeze(Pessoa)

//ou pessoa.sobrenome
if (Pessoa['sobrenome']) {
    console.log('a pessoa tem um sobrenome')
}

//perguntando se existe o atributo sobrenome no objeto pessoa
if ('sobrenome' in Pessoa) {
    console.log('tem sobrenome')
}

//descobrindo a quantidade de propriedades que existem em nosso objeto (irá retornar um array)
console.log(Object.keys(Pessoa))

//irá retornar a quantidade de propriedades
console.log(Object.keys(Pessoa).length)

//irá retornar os valores
console.log(Object.values(Pessoa))

// console.log(typeof nome)
// console.log(typeof idade)
// console.log(typeof ehMaiorDeIdade)
// console.log(typeof conhecimentos)
// console.log(typeof Pessoa)

// //perguntando se conhecimentos é uma instancia de Array
// console.log(conhecimentos instanceof Array)