import $ from 'jquery';
import { initMobileMenu } from './mobile-menu';
import { paintMasonryLayout } from './masonry-layout';
import { initFancyInputBox } from './fancy-input';

// import { validateInputList } from './form/form-validation';
import { formValidationEvents } from './form/form-events';

$(function () {
  initMobileMenu();
  paintMasonryLayout();
  initFancyInputBox();

  formValidationEvents();

  // const submitForm = $('form.js-FormValidation');
	// $(submitForm).submit(function( event ) {

	// 	const inputList = $(`.js-FormValidation input[type=text], .js-FormValidation input[type=email]`);
	// 	validateInputList(inputList);

  //   const validationStatusList = $(`.js-FormValidation input[valid-input="false"],
	// 											 .js-FormValidation textarea[valid-input="false"],
  //                        .js-FormValidation select[valid-input="false"]`);

  //   if (validationStatusList.length > 0) {
  //     event.preventDefault();
  //   }

	// });

});
