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

    if (result) {
      const resultMsg = validationMsg(elemId, result);
      paintMessagePanel(elemId, resultMsg);
    }
    else {
      const formatMsg = "test format????";
      const formatResult = validateFormat(elemId, elemValue, formatMsg);
      const resultMsg = validationMsg(elemId, formatResult);
      paintMessagePanel(elemId, resultMsg);

      console.log('formatResult', formatResult);
    }
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

function validateFormat(key, value, pattern, msg) {
  pattern = "[0-9]+";
  msg = "Really???";

  const constraint = {
    [key]: {
      format: {
        pattern: pattern,
        flags: "i",
        message: `^${msg}`
      }
    }
  };

  return validate( {[key]: value}, constraint );
}
