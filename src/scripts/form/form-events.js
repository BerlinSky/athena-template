import $ from 'jquery';

import { currentForm, formKey, formInputList, formInputStatusList } from "./form-data";
import { inputRequired, validateInputList } from "./form-validation";

export const formValidationEvents = () => {

  $(formInputList).keyup(function(event) {

    console.log(formKey);

    const thisInput =$( event.target );
    inputRequired(thisInput);
  })

	$(currentForm).submit(function( event ) {

    console.log(formKey);

		validateInputList(formInputList);

    if (formInputStatusList().length > 0) {
      event.preventDefault();
    }

	});
}
