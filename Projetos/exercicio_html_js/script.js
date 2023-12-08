const form = document.getElementById('formulario')
const btn = document.querySelector('#enviar')

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const campoA = document.querySelector('#CampoA')
    const campoB = document.querySelector('#CampoB')

    const mensagemPositiva = `O valor de B: <b>${campoB.value}</b> é maior que o valor de A: <b>${campoA.value}</b>.`
    const mensagemError = `O valor de A: <b>${campoA.value}</b> é maior que o valor de B: <b>${campoB.value}</b>.`
    const ContainerError = document.querySelector('#error-msg')
    const ContainerSucesso = document.querySelector('#msg-sucesso')

    if ((campoB.value) > (campoA.value)) {
        ContainerSucesso.innerHTML = mensagemPositiva
        ContainerSucesso.style.display = 'block'

        campoA.value = ''
        campoB.value = ''
        ContainerError.style.display = 'none'
    }
    else {
        ContainerSucesso.style.display = 'none'
        ContainerError.innerHTML = mensagemError
        ContainerError.style.display = 'block'
        console.log ("Falha")
    }

})