import $ from 'jquery';

$(function () {

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');
    // mobileMenu.css({'display': 'block'});
    mobileMenu.toggle("slow");

    // $('html, body').on('touchmove', function(evt){
    //    evt.preventDefault();
    // });
  })

});
