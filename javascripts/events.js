$(document).ready(function(){

  //Contador de itens acessados dentro do REA
  var itensAbertos = 0;


  //Se o usuário tiver chegado ao final do REA, mostra o NAV ao scrollar pro final da página e esconde se scrollar pra cima.

  //roda a função ao scrollar a tela
  $(window).scroll(function(){
    // Checa se REA está completo
    if (itensAbertos==5){
      var nav = $("nav");
      var scroll = $(window).scrollTop();
      //Mostra a nav quando a página chega no fim
      if (scroll == $(document).height() - $(window).height()) {
        nav.fadeIn();
      //Esconde a nav se a página não estive no fim
      } else {
        nav.fadeOut();
      }
    }
  });


  //////////////////////////////
  // Código do REA//////////////
  //////////////////////////////

  // Inicia o REA
  function comecar(){
    $("nav").fadeOut();
    setTimeout(function(){
      $(".folha-intro").addClass('animated bounceOutUp');
      $("html, body").delay(600).animate({
        scrollTop: $('main').offset().top
      }, 600);
    }, 300);
  };

  $("#comecar").click(function(){
    comecar()
  });

  $("h1").click(function(){
    comecar()
  });

  // Atualiza o contador de itens acessados
  $(".collapsed").click(function(){

    if (!$(this).hasClass("usado")){
      console.log("inedito");
      $(this).addClass("usado");
      itensAbertos++;
      if (itensAbertos==5){
        console.log("acabou");
        finaliza();
      }
    }
    else{
      console.log("usado");
    }
  })

  // Ações para final do REA
  function finaliza(){
    setTimeout(function(){
      $(".feedback-display").show();
      $(".rot-2").show();
      $(".rot-2").addClass('animated jackInTheBox2');
      $("html, body").animate({
        scrollTop: $('.feedback-container').offset().top
      }, 1200);
      setTimeout(function(){
        $(".rot-1").show();
        $(".rot-1").addClass('animated jackInTheBox1');
      }, 600);
    }, 500);
  }
  
});
