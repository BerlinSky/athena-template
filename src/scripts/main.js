import $ from 'jquery';
import { initMobileMenu } from './mobile-menu';
import { paintMasonryLayout } from './masonry-layout';
import { initFancyInputBox } from './fancy-input';

import { getElemKey, inputRequired } from './form/form-validation';

$(function () {
  initMobileMenu();
  paintMasonryLayout();
  initFancyInputBox();


  const input = $(`.js-FormValidation input[type=text], .js-FormValidation input[type=email]`);

  input.keyup(function(event) {
    const thisInput =$( event.target );
		// validateInputList(thisInput);const
    // const elemKey = getElemKey(thisInput);

    inputRequired(thisInput);
    console.log(thisInput);

  })

  // const elemKey = "js-userName";
  // inputRequired(elemKey);

  // const elemKey2 = "js-email";
  // inputRequired(elemKey2);

});
