// Abstração
function Veiculo(veiculo, tipo, velocidade) {
    this.Veiculo = veiculo
    this.tipo = tipo
    let _velocidade = velocidade

    this.getVelocidade = function() {
        return _velocidade
    }

    this.setVelocidade = function(velocidade) {
        if (typeof velocidade === 'number') {
            _velocidade = velocidade
        }
    }
}

// Classes
function Carro(veiculo, tipo, velocidade) {
    Veiculo.call(this, veiculo, tipo, velocidade)

    this.velocidadeAtual = function() {
        const novaVelocidade = this.getVelocidade()
        this.setVelocidade(novaVelocidade)
    }
}

function Aviao(veiculo, tipo, velocidade) {
    Veiculo.call(this, veiculo, tipo, velocidade)

    this.velocidadeAtual = function() {
        const novaVelocidade = this.getVelocidade()
        this.setVelocidade(novaVelocidade)
    }
}

function Moto(veiculo, tipo, velocidade) {
    Veiculo.call(this, veiculo, tipo, velocidade)

    this.velocidadeAtual = function() {
        const novaVelocidade = this.getVelocidade()
        this.setVelocidade(novaVelocidade)
    }
}

// Instâncias
const carro = new Carro('Carro', 'Terrestre', 60)
const aviao = new Aviao('Avião', 'Aéreo', 200)
const moto = new Moto('Moto', 'Terrestre', 90)

console.log(`o Carro está a ${carro.getVelocidade()}km/h`)
console.log(`O avião está a ${aviao.getVelocidade()}km/h`)
console.log(`A moto está a ${moto.getVelocidade()}km/hr`)