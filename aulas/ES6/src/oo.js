// function Pokemon (nomeDoPokemon, tipoDoPokemon) {
//     this.nome = nomeDoPokemon
//     this.tipo = tipoDoPokemon
// }

// const pikachu = new Pokemon('Pikachu', 'Elétrico')

class Pokemon {
    //deixando hp privado
    #hp = 100

     constructor(nomeDoPokemon, tipoDoPokemon) {
        this.nome = nomeDoPokemon
        this.tipo = tipoDoPokemon
    }

    atacar(nomeDoAtaque) {
        console.log(`${this.nome} atacou com ${nomeDoAtaque}`)
    }

    recebeuAtaque() {
        this.#hp -= 10
    }

    exibeHp() {
        console.log(this.#hp)
    }
}

class Pikachu extends Pokemon {
    constructor () {
        super('Pikachu', 'Elétrico')
    }

    atacar() {
        console.log(`${this.nome} atacou com choque do trovão`)
    }
}

const pikachu = new Pikachu()
pikachu.recebeuAtaque()
pikachu.exibeHp()
pikachu.atacar()
console.log(pikachu)

const pikacu = new Pokemon('pikacu', 'eletrico')
pikacu.atacar('choque do trovão')
console.log(pikacu)