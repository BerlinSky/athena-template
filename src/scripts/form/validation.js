import $ from 'jquery';
import R from 'ramda';
import { validate } from 'validate.js';

export function validateInput(input) {
  const elem = $(input);
  const isRequired = elem.attr('required');
  if (isRequired) {
    const elemId = elem.attr('id');
    const elemValue = elem.val();
    console.log("need to validate", elemValue);
    const msg = elem.attr('required-msg');
    const constraint = buildConstraints(elemId, msg);
    const result = validate( {[elemId]: elemValue}, constraint );

    if (result) {
      console.log('result', result);
      const resultMsg = getMessage(elemId, result);
      console.log('msg', resultMsg);
      return resultMsg;
    }
  }
  else {
    console.log("No need to validate");
  }
}

function getMessage(id, messageList) {
  return R.prop(id, messageList);
}

function buildConstraints(inputId, msg) {
  return {
    [inputId]: {
      presence: { message: `^${msg}` }
    }
  };
}
