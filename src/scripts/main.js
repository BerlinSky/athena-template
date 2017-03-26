import $ from 'jquery';

import { validateInput, validateTextInputs } from './form/validation';

// var validate = require("validate.js");

$(function () {


  const submitForm = $('form.js-campaignForm');


  // const testInput = $('#entry-6133');
  // const elemId = testInput.attr('id');
  // const errorSpanId = `#${elemId}-error`;
  // const inputErrorSpan = $(errorSpanId);

  $(submitForm).submit(function( event ) {
    event.preventDefault();

    const textInputs = $(".js-campaignForm input[type=text]")
    validateTextInputs(textInputs);

    // const validateMessage = validateInput(testInput);
    // if (validateMessage) {
    //   inputErrorSpan.html(validateMessage);
    //   event.preventDefault();
    // }

    event.preventDefault();

  });



// const c = validate.collectFormValues(campaignForm);
// console.log('c', c);

//   const input = $(".js-campaignForm input[type=text]")
//   console.log('input', input);

//   const testInput = $('#entry-6133');
//   const elemId = testInput.attr('id');
//   const errorSpanId = `#${elemId}-error`;
//   const inputErrorSpan = $(errorSpanId);

//   const validateMessage = validateInput(testInput);
//   inputErrorSpan.html(validateMessage);

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

});
