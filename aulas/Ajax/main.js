// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById('btn-buscar-cep').addEventListener('click', function() {
//         // AJAX = Asyncronous JavaScript and XML
//         const xhttp = new XMLHttpRequest()
//         const cep = document.getElementById('cep').value
//         const endpoint = `https://viacep.com.br/ws/${cep}/json`

//         xhttp.open('GET', endpoint)
//         xhttp.send()
//     })
// })

// se fosse feito em jQuery
$(document).ready(function() {
    $('#cep').mask('00000-000')

    $('#btn-buscar-cep').click(function() {
        const cep = $('#cep').val()
        const endpoint = `https://viacep.com.br/ws/${cep}/json`
        const botao = $(this)

        $(botao).find('i').addClass('d-none')
        $(botao).find('span').removeClass('d-none')

        $.ajax(endpoint).done(function(respostaDaRequisição) {
            const logradouro = respostaDaRequisição.logradouro
            const bairro = respostaDaRequisição.bairro
            const cidade = respostaDaRequisição.localidade
            const estado = respostaDaRequisição.uf
            const endereco = `${logradouro}, ${bairro} - ${cidade} - ${estado}`
            $('#endereco').val(endereco)

            setTimeout(function() {
                $(botao).find('i').removeClass('d-none')
                $(botao).find('span').addClass('d-none')
            }, 4000)

        })
    })
})