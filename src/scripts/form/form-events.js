import $ from 'jquery';

import { formInputList, formInputStatusList } from "./form-data";
import { inputRequired, validateInputList } from "./form-validation";

export const formValidationEvents = () => {

  formInputList.keyup(function(event) {
    const thisInput =$( event.target );
    inputRequired(thisInput);
  })

  const submitForm = $('form.js-FormValidation');

	$(submitForm).submit(function( event ) {
		validateInputList(formInputList);

    if (formInputStatusList().length > 0) {
      event.preventDefault();
    }

	});
}
