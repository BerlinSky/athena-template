import $ from 'jquery';

import { setMessage, getMessage } from './tools/message-handler';
import { stringify, parse } from "./tools/json-handler";

$(function () {

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');
    mobileMenu.toggle("slow");
  })

  const menuWrapper = document.querySelector('.js-menuWrapper');

  const showSearchPanel = $('.js-showSearchPanel');
  if (showSearchPanel.length) {
    showSearchPanel.addEventListener('click', (e) => {
      e.preventDefault();
      menuWrapper.classList.add('showSearchPanel');
    })
  }

  const hideSearchPanel = $('.js-hideSearchPanel');
  if (hideSearchPanel.length) {
    hideSearchPanel.addEventListener('click', (e) => {
      e.preventDefault();
      menuWrapper.classList.remove('showSearchPanel');
    })
  }

  const setContextBtn = $('.js-commandButton__setContext');

  setContextBtn.click(function(e) {
    e.preventDefault();

    const textArea = $('.js-setDataTextArea');
    let data = textArea.val();

    if (data.length > 0) {
      data = parse(data);
    }
    console.log("input", data);

    setMessage(data);
  })

  const getContextBtn = $('.js-commandButton__getContext');

  getContextBtn.click(function(e) {
    e.preventDefault();
    const texArea = $('.js-getDataTextArea');
    texArea.text(stringify(getMessage()));
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
});
