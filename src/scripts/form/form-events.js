import $ from 'jquery';

import { currentForm, formKey, formInputList, formInputStatusList } from "./form-data";
import { inputRequired, validateInputList } from "./form-validation";

export const formValidationEvents = () => {

  $(formInputList).keyup(function(event) {
    const thisInput =$( event.target );
    inputRequired(formKey, thisInput);
  })

	$(currentForm).submit(function( event ) {
		validateInputList(formKey, formInputList);

    if (formInputStatusList().length > 0) {
      event.preventDefault();
    }
	});
}
