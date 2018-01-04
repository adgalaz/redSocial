$(document).ready(function(){
    $('.slider').slider();

  Materialize.updateTextFields();

  $('input#input_text, textarea#textarea1').characterCounter();

 $(".button-collapse").sideNav();

 $('#btn').click(function(){
   var comentario = $('#comment').val();
   $('#comment').val("");
   var contenedor = $('#cont');

   contenedor.append('<div style="color:#000;"><ul class="collection"><li class="collection-item avatar"><p class="txt">' + comentario + '</p><a href="#!" class="secondary-content"><i class="material-icons basura">delete_forever</i><i class="material-icons corazon">favorite</i></a></li></ul></div>');
   deleteContact();
   favotite();
 });

});

function deleteContact(){
  $('.basura').click(function(){
    $(this).parent().parent().parent().remove();
  })
}

function favorite(){
  $('.corazon').click(function(){
    $(this).parent().parent().parent().addClass(corazon);
  })
}
