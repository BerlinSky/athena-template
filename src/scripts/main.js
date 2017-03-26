import $ from 'jquery';

import { validateInput } from './form/validation';

var validate = require("validate.js");

$(function () {

  const campaignForm = $('.js-campaignForm');
  console.log('campaign', campaignForm);

const c = validate.collectFormValues(campaignForm);
console.log('c', c);

  const input = $(".js-campaignForm input[type=text]")
  console.log('input', input);

  const testInput = $('#entry-6133');
  const elemId = testInput.attr('id');
  const errorSpanId = `#${elemId}-error`;
  const inputErrorSpan = $(errorSpanId);

  const validateMessage = validateInput(testInput);
  inputErrorSpan.html(validateMessage);

  // const testId = testInput.attr('id');
  // // const required = testInput.attr('required');

  // const errMsg = testInput.attr('required-msg');

  // const validdateResult = validate({[testId]: ""}, buildConstraints(testId, errMsg));
  // console.log('validdateResult', validdateResult);


  // const test = getErrorMessage(testId, validdateResult);
  // console.log('test', test);


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
