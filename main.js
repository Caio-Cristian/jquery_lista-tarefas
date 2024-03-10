$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    })

    $('form').on('submit', function(e){
        e.preventDefault();
        const adicionarNovaAtividade = $('#ad-nova-atividade').val();
        const novoItem = $('<li style="display: none"></li>');
        $(`<li>${adicionarNovaAtividade}</li>`).appendTo(novoItem)
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(1000);
        $('#ad-nova-atividade').val('')
    })

    $('ul').on('click', 'li', function(){
        if (this.style.textDecoration === "line-through"){
            this.style.textDecoration = "none";
        } else {
            this.style.textDecoration = "line-through"
        }
    })
})