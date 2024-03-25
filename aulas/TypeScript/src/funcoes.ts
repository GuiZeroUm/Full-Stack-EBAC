function calculaArea(base:number, altura:number):number {
    return base * altura
}

const calculaArea2 = (base:number, altura:number) => base * altura

function somar(...numeros: number[]) {
    // numeros.reduce()
    console.log(numeros)
}

//usando union type
function teste(): string | number {
    if (10 > 5) {
        return 'dez maior que 5'
    } else {
        return 5
    }
}

const resultadoDeTeste = teste()