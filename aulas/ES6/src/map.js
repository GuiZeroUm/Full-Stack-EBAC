let meuMap = new Map()
//setando um item novo
meuMap.set('nome', 'Gui')
meuMap.set('stack', 'htm, css, js')
console.log(meuMap)

//consultando um item especifico
meuMap.get('nome')
console.log(meuMap)

//verificando o tamanho do map
console.log(meuMap.size)

//verificando, com valor booleano, se determinado valor existe no meu map
console.log(meuMap.has('sobrenome'))

//excluindo os itens de dentro do map
// meuMap.clear()
// console.log(meuMap.size)

//fazendo iteração do map, recuperando as chaves
for(let chave of meuMap.keys()) {
    console.log(chave)
}

//recuperando os valores das chaves dos itens
for(let valor of meuMap.values()) {
    console.log(valor)
}

//recuperando as entradas (chave e o valor dela)
for(let entrada of meuMap.entries()) {
    console.log(entrada)
}
//desestruturando o map
for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`)
}

//removendo um item do map
meuMap.delete('stack')
console.log(meuMap)