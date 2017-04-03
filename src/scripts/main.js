import $ from 'jquery';
import { validateInputList } from './form/validation';

$(function () {

  const fileUploader = $('.js-fileUploader');
  const fileUploaded = $('.js-fileUploaded');

  fileUploader.change(function() {
    const fileName = fileUploader.val().replace( '/.*(\/|\)/',  '');
    fileUploaded.val(fileName);
  })

  const input = $(`.js-campaignForm input[type=text],
												 .js-campaignForm input[type=password],
												 .js-campaignForm input[type=email],
												 .js-campaignForm input[type=number],
												 .js-campaignForm textarea,
                         .js-campaignForm select,
                         .js-campaignForm input[type=checkbox]`);
  input.blur(function(event) {
		// event.preventDefault();
    const thisInput =$( event.target );
    // console.log('this', thisInput);
		validateInputList(thisInput);
  })

	const submitForm = $('form.js-campaignForm');

	$(submitForm).submit(function( event ) {

		// event.preventDefault();

    $('.js-campaignForm .inputError').html('');
		const inputList = $(`.js-campaignForm input[type=text],
												 .js-campaignForm input[type=password],
												 .js-campaignForm input[type=email],
												 .js-campaignForm input[type=number],
												 .js-campaignForm textarea,
                         .js-campaignForm select,
                         .js-campaignForm input[type=checkbox]`);
		validateInputList(inputList);

    const validationSatusList = $(`.js-campaignForm input[valid-input="false"],
												 .js-campaignForm textarea[valid-input="false"],
                         .js-campaignForm select[valid-input="false"]`);

    console.log('validationSatusList', validationSatusList.length);

    if (validationSatusList.length > 0) {
      event.preventDefault();
    }
	});

});
