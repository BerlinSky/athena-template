import $ from 'jquery';
import R from 'ramda';
import { validate } from 'validate.js';

export function validateInputList(textInputs) {
  R.forEach(validateInput, textInputs);
  console.log('textInputs', textInputs);
}

export function validateInput(input) {
  const elem = $(input);
  const elemId = elem.attr('id');
  const elemValue = elem.val();
  const isRequired = elem.attr('required');
  const msg = elem.attr('required-msg');

  if (isRequired) {
    const result = validateRequired(elemId, elemValue, msg);
    console.log(result);

    const resultMsg = validationMsg(elemId, result);
    paintMessagePanel(elemId, resultMsg);
  }
}

function paintMessagePanel(elemId, msg) {
  const errorSpanId = `#${elemId}-error`;
  const inputErrorSpan = $(errorSpanId);
  inputErrorSpan.html(msg);
}

function validationMsg(key, messageList) {
  if(messageList) {
    return R.prop(key, messageList);
  }
}

function validateRequired(key, value, msg) {
  const constraint = { [key]: {
    presence: { message: `^${msg}` }
  }};
  return validate( {[key]: value}, constraint );
}
