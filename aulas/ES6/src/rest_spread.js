function somar () {
    console.log(arguments)
    let soma = 0

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }

    return soma
}

console.log(somar(10, 20, 30))
console.log('--------------Rest---------------------')

//para criar um operador rest, iniciamos com ...
// nao podemos ter mais de 1 argunto com rest
// rest deve ser o ultimo argumento
function somarComRest (...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual
        return total
    }, 0)
    return soma
}

console.log(somarComRest(10, 20, 30))

console.log('--------------Spread---------------------')

const numeros = [1, 2, 3, 4]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos', 'palmeiras', 'bragantino', 'são paulo']
const timesDeFutebolDoRio = ['vasco', 'botafogo', 'flamengo', 'fluminence']

const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio]

console.log(timesDeFutebol)

const carroDaJulia = {
    modelo: 'gol',
    marca: 'vw',
    motor: 1.6
}

const carroDaAna = {
    ...carroDaJulia,
    motor: 1.8
}

console.log(carroDaAna)

// desestruturação
const { motor: motorDoCarroDaAna } = carroDaAna
const { motor: motorDoCarroDaJulia } = carroDaJulia

//desestruturando uma array
const [ item1, item2, item3, ...outrosTimes ] = timesDeFutebol
console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)