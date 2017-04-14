import $ from 'jquery';
var Masonry = require('masonry-layout');
var jQueryBridget = require('jquery-bridget');

jQueryBridget( 'masonry', Masonry, $ );

$(function () {

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');
    mobileMenu.toggleClass("js-l-mobile");
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

  const $grid = $('.js-imageGridContainer').masonry({
    itemSelector: '.js-grid',
    percentPosition: true,
    columnWidth: '.js-gridSizer'
  });

  $grid.masonry();
});

// import $ from 'jquery';
// import { initMobileMenu } from './mobile-menu';
// import { paintMasonryLayout } from './masonry-layout';
// import { initFancyInputBox } from './fancy-input';

// $(function () {
//   initMobileMenu();
//   paintMasonryLayout();
//   initFancyInputBox();
// });
