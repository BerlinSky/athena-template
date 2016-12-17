import $ from 'jquery';

// menu flat 2

const triggers = document.querySelectorAll('.js-fancySiteMenuItems > li');
const background  = document.querySelector('.js-fancySiteMenu__shadow');
const nav  = document.querySelector('.js-fancySiteMenu');

  function handleEnter() {
    this.classList.add('js-shadowed');
    setTimeout(() => this.classList.contains('js-shadowed') && this.classList.add('js-shadowed--revealed'), 100);
    background.classList.add('open');

    const dropdown = this.querySelector('.fancySiteMenu__plate');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = nav.getBoundingClientRect();

    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    background.style.setProperty('width', `${coords.width}px`);
    background.style.setProperty('height', `${coords.height}px`);
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  function handleLeave() {
    this.classList.remove('js-shadowed', 'js-shadowed--revealed');
    background.classList.remove('open');
  }

  triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
  triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));

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

// menu flat 2 - End











