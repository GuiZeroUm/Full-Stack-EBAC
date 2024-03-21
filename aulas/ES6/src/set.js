const cpfs = new Set()

cpfs.add('92811369023')
cpfs.add('01957537043')
cpfs.add('59654996049')

console.log(cpfs)

cpfs.forEach((valor) => {
    console.log(valor)
})

const array = ['Guilherme', 'Guilherme', 'Maria', 'Paulo', 'Luana', 'Luana']

//como set não permite itens duplicados, os mesmos serão removidos
const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet]

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)