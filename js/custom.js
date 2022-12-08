// instancia jquery e evita conflitos
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // tag
   
    let itens = $('.featured-item') // class
    
    let destaques = $('#featured') // id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    //  $('.featured-item:first h4').css('color', '#f00')
     
     $('.featured-item h4').dblclick( function(){

        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
        });

     });

     /*
      * Manipulação de eventos
      */
     $('.featured-item a').on('blur', function(event){

        event.preventDefault();

        alert('Produto esgotado');

     })
     
     /*
     * Callback
     * Entendendo ações que começam ao termino de outra
     
     */ 
     $('.featured-item:nth(1)').hide(2000, function(){
      // este é o callback
      console.log($(this).find('h4').text()+ ' esgotado')
     })
     .show(2000, function(){
      console.log($(this).find('h4').text()+ ' em estoque')
     })
   
     /* 
     * Animações
     */
    const duracao = 1000 // equivalente a 1 segundo
     $('.featured-item:nth(0)')
     .hide(duracao)
     .show(duracao)
     .fadeOut(duracao)
     .fadeIn(duracao)
     .toggle(duracao)
     .toggle(duracao)

/*
* Ouvinte de eventos .nav-modal-open
*/
   $('.nav-modal-open').on('click', function(e){

      e.preventDefault();

      let elem = $(this).attr('rel')

      $('.modal-body').html($('#'+elem).html())
      $('.modal-header h5.modal-title').html($(this).text())

      let myModal = new bootstrap.Modal($('#modelId'))

      myModal.show()

         /*
   * TODO: incrementar a validação
   * - checar se o nome é válido (mais de 2 caracteres)
   * - checar se o email é válido com ao menos um "@" e "."
   * - checar se o cpf é válido com regex /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
   */

   function validate( elem ){
      if( elem.val() == '') {

         console.log('o campo de'+ elem.attr('name') + 'é obrigatório')

         elem.parent().find('.text-muted').show()

         elem.addClass('invalid')

         return false
      }  else {
         elem.parent().find('.text-muted').hide()
         elem.removeClass('invalid')
      }
   }

  


})
})

function validaEmail(elem){

   elemento.addEventListener('focusout', function(event) {

       event.preventDefault();

       const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i;
       if(this.value.match(emailValido)) {
           document.querySelector('.mensagem').innerHTML = "";
           this.classList.remove('erro');
           this.parentNode.classList.remove('erro');
       } else {
           document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
           this.classList.add('erro');
           this.parentNode.classList.add('erro');
           return false;
       }

   });

}

let camposEmail = document.querySelectorAll('input.email');

for( let emFoco of camposEmail) {
   validaEmail(emFoco);
}