//forma insustentavel/manual
const carroDoJoao = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelerar: function() {
        console.log('vruum') 
    }
}

const carroDaMaria = {
    modelo: 'Ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelerar: function() {
        console.log('vruum') 
    }
}

//forma sustentavel com constructor
function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoModelo;
    this.anoFabricacao = anoFabricacao;
    
    this.acelerar = function() {
        console.log('acelerar')
    }
}

const carroDoJoao2 = new Carro('Fiesta', 'Ford', 2020, 2019)
const carroDaMaria2 = new Carro('ka', 'Ford', 2021, 2020)

console.log(carroDoJoao2)
console.log(carroDaMaria2)

//perguntando se carroDaMaria2 é uma instancia de Carro
console.log(carroDaMaria2 instanceof Carro)
