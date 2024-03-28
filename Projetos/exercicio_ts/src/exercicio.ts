const Multiplicacao = (valor1: number, valor2: number) => {
    return valor1 * valor2
}

function Saudacoes (nome: string) {
    return 'Olá ' + nome
}

const multiplica = Multiplicacao(2, 2)
console.log(multiplica)

const ola = Saudacoes('Guilherme')
console.log (ola)