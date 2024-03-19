const minhaFuncao = () => 'Diz oi'

console.log(minhaFuncao())

const retornaCarro = () => ({
    modelo: 'ka',
    fabricante: 'ford'
})

console.log(retornaCarro())

const carro = {
    velocidadeAtual: 40,
    acelerar: function() {
        this.velocidadeAtual += 10
    },
    // irá retornar um erro pois não é possivel utilizar this dentro de uma arrow function no contexto de um objeto
    frear: () => {
        this.velocidadeAtual -= 10
    }
}

carro.acelerar()
console.log(carro.velocidadeAtual)
carro.frear()
console.log(carro.velocidadeAtual)