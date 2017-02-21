import $ from 'jquery';
// import { paintMasonryLayout } from './masonry-layout';

import { add5ThenMultiply7 } from './pure-functions';

// var Masonry = require('masonry-layout');
// var jQueryBridget = require('jquery-bridget');

// jQueryBridget( 'masonry', Masonry, $ );

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

  // const $imageContainer = $('.js-imageGridContainer').masonry({
  //   itemSelector: '.js-grid',
  //   percentPosition: true,
  //   columnWidth: '.js-gridSizer'
  // });

  // $imageContainer.masonry();

  // paintMasonryLayout();
const x = add5ThenMultiply7(4);
console.log('x', x);

const y = add5ThenMultiply7(7);
console.log('y', y);

});
