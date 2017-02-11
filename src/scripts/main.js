import $ from 'jquery';

import { setContext, getContext } from './context';

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

  const setContextBtn = $('.js-ommandButton__setContext');

  setContextBtn.click(function(e) {
    e.preventDefault();
    setContext();
  })

  const getContextBtn = $('.js-ommandButton__getContext');

  getContextBtn.click(function(e) {
    e.preventDefault();
    getContext();
  })

});
