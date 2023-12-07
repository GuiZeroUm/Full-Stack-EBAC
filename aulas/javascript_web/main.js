// Criando uma constante para pegar o elemento 'form-deposito'
const form = document.getElementById('form-deposito')
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let formEValido = false;

/* Criando uma função que irá separa o nome em arrays diferentes,
caso tenha espaço (" ")*/
function validaNome (nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(" ");
    return nomeComoArray.length >= 2;
}

/* Criamos uma função para o evento "submit" */
form.addEventListener('submit', function(e) {

    // Criando uma variavel com o valor false.

    // Faz com que a aba não recarregue caso o botão enviar seja clicado. 
    e.preventDefault();

    // Criando variaveis que chames os ids do nosso formulario.
    const numeroContaBeneficiario = document.getElementById ('numero-conta');
    const valorDepoisto = document.getElementById('valor-deposito');

    /* Criano a variavel mensagemSucesso onde a mesma puxa o valor (.value) 
    do deposito, nome e numero da conta. */
    const mensagemSucesso = `Montante de: <b>${valorDepoisto.value}</b> depositado para o cliente:
    <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-msg');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        // irá retornar a mensagem da const mensagemSucesso
        // alert(mensagemSucesso)

        /* Caso o form seja enviado, o valor dos campos irão ficar vazios
        novamente, pois estamos atribuindo .value = "", ou seja,
        atribuindo uma string vazia. */
        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDepoisto.value = '';
    } else {
        nomeBeneficiario.style.border ='1px solid red'
        document.querySelector('.error-msg').style.display = 'block';
        // alert('o nome não está completo')
    }
})

nomeBeneficiario.addEventListener('change', function(e) {
    console.log (e)
    /* Dizendo que o form só podera ser envido caso tenha nome e sobrenome.
    Isso é feito chamando nossa função validaNome, e atribuindo o valor
    a mesma. */
    formEValido = validaNome(e.target.value)

    if (!formEValido) {
        nomeBeneficiario.classList.add('error')
        document.querySelector('.error-msg').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error')
        document.querySelector('.error-msg').style.display = 'none';
    }
})