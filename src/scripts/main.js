import $ from 'jquery';

$(function () {
  $('[data-mobileMenu="open"]').click(function() {
    const mobileMenu = $('[data-mobileMenu="panel"]');

    mobileMenu.css({'display': 'block'});
    mobileMenu.css({right: '-320px'});
    mobileMenu.addClass('magictime slideLeft');
    
    setTimeout(function(){
      mobileMenu.css({right: 0});
      mobileMenu.removeClass('slideLeft');
    }, 1000);

    $('html, body').on('touchmove', function(evt){ 
       evt.preventDefault(); 
    });
  })

  $('[data-mobileMenu="close"]').click(function() {
    $('html, body').unbind('touchmove');

    const mobileMenu = $('[data-mobileMenu="panel"]');

    mobileMenu.addClass('magictime slideRight');
    setTimeout(function(){
      mobileMenu.css({'display': 'none'});
      mobileMenu.removeClass('slideRight');
    }, 1000);
  })
});




  
  


  




