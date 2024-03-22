const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {
    try {
        let execucoes = 0
            for (let i = 0; i < 1000000000; i++) {
                execucoess++
            }
            resolve (execucoes)
    } catch {
        reject('Deu erro garai')
    }
})

// console.log(funcaoMuitoPesada())
const promiseComParametros = (login, senha) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`logado com o usuario: ${login}`)
        }, 3000)
    })
}

async function execucaoPrincipal() {
    console.log('inicio')
    // await funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro))
    promiseComParametros('Guilherme', 123456).then(resultado => console.log(resultado))

    try {
        const resultado = await funcaoMuitoPesadaPromise
        console.log(resultado)
    } catch (e) {
        console.log(e)
    }
    console.log('fim')
}


execucaoPrincipal()