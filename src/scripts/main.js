import $ from 'jquery';
import { initMobileMenu } from './mobile-menu';
import { paintMasonryLayout } from './masonry-layout';
import { initFancyInputBox } from './fancy-input';

import { validateInputList, inputRequired } from './form/form-validation';

$(function () {
  initMobileMenu();
  paintMasonryLayout();
  initFancyInputBox();

  const input = $(`.js-FormValidation input[type=text], .js-FormValidation input[type=email]`);
  input.keyup(function(event) {
    const thisInput =$( event.target );

    inputRequired(thisInput);
  })

  const submitForm = $('form.js-FormValidation');
	$(submitForm).submit(function( event ) {

		event.preventDefault();

		const inputList = $(`.js-FormValidation input[type=text], .js-FormValidation input[type=email]`);
		validateInputList(inputList);

	});

});
