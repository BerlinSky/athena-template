import $ from 'jquery';
var Masonry = require('masonry-layout');
var jQueryBridget = require('jquery-bridget');

jQueryBridget( 'masonry', Masonry, $ );

$(function () {

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');
    mobileMenu.toggle("slow");
  })

  const menuWrapper = document.querySelector('.js-menuWrapper');

  const showSearchPanel = document.querySelector('.js-showSearchPanel');
  showSearchPanel.addEventListener('click', (e) => {
    e.preventDefault();

    menuWrapper.classList.add('showSearchPanel');
  })

  const hideSearchPanel = document.querySelector('.js-hideSearchPanel');
  hideSearchPanel.addEventListener('click', (e) => {
    e.preventDefault();

    menuWrapper.classList.remove('showSearchPanel');
  })

  const $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });

  $grid.masonry();
});
