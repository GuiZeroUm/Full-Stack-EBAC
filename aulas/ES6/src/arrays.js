const redesSociais = ['Facebook', 'Instagram', 'Twitter']

// utilizando o for
for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

// utilizando função forEach do ES6
redesSociais.forEach(function(nomeDaRedeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

// utilizando map
const alunos = ['Gustavo', 'Maria', 'Guilherme', 'Pedro']
const alunos2 = alunos.map(function(itemAtual) {
    return {
        nome: itemAtual,
        curso: 'Front-End'
    }
})

console.log(alunos2)

// irá procurar o valor que eu defini
const maria = alunos2.find(function(item) {
    return item.nome == 'Maria'
})

console.log(maria)
console.log('find aqui em cima -------------')

// irá procurar o indice do valor que eu defini
const IndiceDaMaria = alunos2.findIndex(function(item) {
    return item.nome == 'Maria'
})

console.log(IndiceDaMaria)

alunos2.push({
    nome: 'Lucio',
    curso: 'Back-End'
})

//every. verifica se todos os elementos são iguais a nossa requisição
const todosAlunosSaoDeFrontEnd = alunos2.every(function(item) {
    return item.curso === 'Front-End'
})

console.log(todosAlunosSaoDeFrontEnd)

//some. Verifica se algum elemento é igual a nossa requisição
const existeAlgumAlunoDeBackEnd = alunos2.some(function(item) {
    return item.curso === 'Back-End' && item.curso === 'Front-End'
})

console.log(existeAlgumAlunoDeBackEnd)

function filtraAlunosDeBackEnd(aluno) {
    return aluno.curso === 'Back-End'
}

//filtrando com arrow function
// caso tenhamos apenas um argumento, podemos omitir os parenteses
const filtraAlunosBackend2 = aluno => aluno.curso == 'Backend'

//filter. Filtra os elementos com base em nossa requisição
const alunosDeBackEnd = alunos2.filter(filtraAlunosDeBackEnd)

console.log(alunosDeBackEnd)

const nums = [10, 20, 30, 10]

// reduce "soma" os valores de uma array, começando pelo indice 0
const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual
    return acumulador
}, 0)

console.log (soma)

//mesmo codigo do reduce, porem com for
let somaComFor = 0
for (let i = 0; i < nums.length; i++) {
    somaComFor += nums[i]
}

console.log(somaComFor)

// reduce com string
const nomesDosAlunos = alunos2.reduce(function(acumulador, itemAtual) {
    acumulador += `${itemAtual.nome} `
    return acumulador
}, '')

console.log(nomesDosAlunos)