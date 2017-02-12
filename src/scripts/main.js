import $ from 'jquery';

import { setContext, getContext } from './context';
import { stringify, parse } from "./tools/json-handler";


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

  const setContextBtn = $('.js-commandButton__setContext');

  setContextBtn.click(function(e) {
    e.preventDefault();

    const textArea = $('.js-setDataTextArea');
    let data = textArea.val();

    if (data.length > 0) {
      data = parse(data);
    }
    console.log("input", data);

    setContext(data);
  })

  const getContextBtn = $('.js-commandButton__getContext');

  getContextBtn.click(function(e) {
    e.preventDefault();
    const texArea = $('.js-getDataTextArea');
    texArea.text(stringify(getContext()));
  })

  $(window).bind('storage', function (e) {
    const contextData = e.originalEvent.newValue;
    console.log("received the custom event from window", contextData);

    updateStorageStatus("Stored text data have been updated.");
  });

  function updateStorageStatus(text) {
    const dataTextArea = $('.js-eventAlert');
    dataTextArea.html(text);
  }
  // window.addEventListener('storage', function(e) {
  //   const contextData = e.storageArea;
  //   console.log("received the custom event from window", contextData);
  // });

});
