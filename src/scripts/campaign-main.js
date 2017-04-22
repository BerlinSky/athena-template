import $ from 'jquery';
import { validateInputList } from './form/validation';

$(function () {

  const fileUploader = $('.js-fileUploader');
  const fileUploaded = $('.js-fileUploaded');

  fileUploader.change(function() {

     // validate file size:
    const sizeLimit = 75.00;  // Should be 75 MB

     // MB
    const thisFileSize = fileUploader[0].files[0].size;
    const uploadErrorSpan = $("#entry-upload");
    const uploadErrMsg = "The file you have uploaded has exceeded the maximum file size of 75MB.  Please select a smaller file and try again.";

    console.log(thisFileSize);
    uploadErrorSpan.html('');

    if (thisFileSize > 0) {
      const calculatedSize = (thisFileSize / 1024 / 1024).toFixed(2);
      console.log(calculatedSize);
      if (calculatedSize > sizeLimit) {
        // alert("File size too large: " + calculatedSize + "MB");
        uploadErrorSpan.html(uploadErrMsg);
        fileUploader.val('');
        return;
      }
    }
     // End: validate file size:

    const fileName = fileUploader.val().replace( '/.*(\/|\)/',  '');
    const fileInput = fileName.replace("C:\\fakepath\\", '');

    fileUploaded.val(fileInput);
  })

  const input = $(`.js-campaignForm input[type=text],
												 .js-campaignForm input[type=password],
												 .js-campaignForm input[type=email],
												 .js-campaignForm input[type=number],
												 .js-campaignForm textarea`);
  input.keyup(function(event) {
		// event.preventDefault();
    const thisInput =$( event.target );
    // console.log('this', thisInput);
		validateInputList(thisInput);
  })

  const options = $(`.js-campaignForm select,
                      .js-campaignForm input[type=checkbox]`);
  options.change(function(event) {
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
    else {
      if (fileUploader.length>0) {
        const progressContainer = $(".uploadProgressContainer");
        progressContainer.addClass("uploadProgressContainer--active");
        $('.js-campaignForm').css("visibility", "hidden");
      }
    }
	});

});
