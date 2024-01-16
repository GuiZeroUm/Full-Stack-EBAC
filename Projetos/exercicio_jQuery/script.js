$(document).ready (function() {
    
    $('header button').click(function() {
        $('form').slideDown();
    });
    
    $('#botao-cancelar').click(function() {
        $('form').slideUp();
    });
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        
        const novoItem = $('<li style=""></li>');
        const textoTarefa = $('#texto-tarefa').val();
        const descricaoTarefa = $('#descricao-tarefa').val();

        $(`<h3>${textoTarefa}</h3>`).appendTo(novoItem);
        $(`<p>${descricaoTarefa}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn();
        $(textoTarefa).val('');
        $(descricaoTarefa).val('');
    })
});