import $ from 'jquery';

import { buildConstraints, getErrorMessage } from './form/validation';

var validate = require("validate.js");

$(function () {

  const campaignForm = $('.js-campaignForm');
  console.log('campaign', campaignForm);

const c = validate.collectFormValues(campaignForm);
console.log('c', c);

  const input = $(".js-campaignForm input[type=text]")
  console.log('input', input);

  const testInput = $('#entry-6133');
  const testId = testInput.attr('id');
  // const required = testInput.attr('required');

  const errMsg = testInput.attr('required-err');

  const validdateResult = validate({[testId]: ""}, buildConstraints(testId, errMsg));
  console.log('validdateResult', validdateResult);

  const errorSpanId = `#${testId}-error`;

  const inputErrorSpan = $(errorSpanId);
  const test = getErrorMessage(testId, validdateResult);
  console.log('test', test);

  inputErrorSpan.html(test);

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
