import $ from 'jquery';
import { forEach, prop, isNil } from 'ramda';
import { validate } from 'validate.js';

function validateCheckbox(checkbox) {
  const elem = $(checkbox);
  const elemId = elem.attr('id');
  const msg = elem.attr('required-msg');

  console.log('checkbox-id', elemId);

  if (!elem.prop("checked")) {
    console.log('checkbox-msg', msg);
    paintMessagePanel(elemId, msg);
  }
}

export function validateInputList(inputList) {
  forEach(validateInput, inputList);

  console.log('inputList', inputList);
}

export function validateInput(input) {
  const elem = $(input);
  const elemValue = elem.val();
  const elemId = elem.attr('id');
  const elemType = elem.attr('type');
  const isRequired = elem.attr('required');
  const partnerElemId = elem.attr('partner-id');
  const msg = elem.attr('required-msg');
  const formatPattern = elem.attr('pattern');
  const numberMsg = elem.attr('number-msg');
  const formatMsg = elem.attr('pattern-msg');
  const emailMsg = elem.attr('email-msg');
  const equalityMsg = elem.attr('equality-msg');

  updateValidationStatus(elemId, "true");
  paintMessagePanel(elemId, "");

  if (elemType === 'checkbox') {
    validateCheckbox(elem);
    return;
  }

  const isRequiredPassed = inspectRequired(isRequired, elemId, elemValue, msg);
  if (!isRequiredPassed) { return; }

  const numericPassed = inspectNumericality(elemType, elemId, elemValue, numberMsg);
  if (!numericPassed) { return; }

  const emailPassed = inspectEmail(elemType, elemId, elemValue, emailMsg);
  if (!emailPassed) { return; }

  const formatPassed = inspectFormat(formatPattern, elemId, elemValue, formatMsg);
  if (!formatPassed) { return; }

  const equalityPassed = inspectEquality(partnerElemId, elemId, elemValue, equalityMsg);
  if (!equalityPassed) { return; }
}

function inspectRequired(isRequired, elemId, elemValue, msg) {
  if (isRequired) {
    const result = validateRequired(elemId, elemValue, msg);
    if (!isNil(result)) {
      const resultMsg = validationMsg(elemId, result);
      paintMessagePanel(elemId, resultMsg);

      console.log('resultMsg', resultMsg);

      return false;
    }
  }
  return true;
}

function inspectNumericality(elemType, elemId, elemValue, formatMsg) {
  if (elemType === 'number') {
    const result = validateNumericality(elemId, elemValue, formatMsg);
    console.log(result);
    if (!isNil(result)) {
      const resultMsg = validationMsg(elemId, result);
      paintMessagePanel(elemId, resultMsg);

      console.log('resultMsg', resultMsg);
      return false;
    }
  }
  return true;
}

function inspectEmail(elemType, elemId, elemValue, emailMsg) {
  if (elemType === 'email') {
    const result = validateEmail(elemId, elemValue, emailMsg);
    console.log(result);
    if (!isNil(result)) {
      const resultMsg = validationMsg(elemId, result);
      paintMessagePanel(elemId, resultMsg);

      console.log('resultMsg', resultMsg);
      return false;
    }
  }
  return true;
}

function inspectFormat(formatPattern, elemId, elemValue, formatMsg) {
  if (formatPattern) {
    const result = validateFormat(elemId, elemValue, formatPattern, formatMsg);
    if (!isNil(result)) {
      const resultMsg = validationMsg(elemId, result);
      paintMessagePanel(elemId, resultMsg);

      console.log('resultMsg', resultMsg);
      return false;
    }
  }
  return true;
}

function inspectEquality(partnerElemId, elemId, elemValue, equalityMsg) {
  if (partnerElemId) {
    const partnerValue = $(`#${partnerElemId}`).val();
    const result = validateEquality(elemId, elemValue, partnerValue, equalityMsg);
    if (!isNil(result)) {
      const resultMsg = validationMsg(elemId, result);
      paintMessagePanel(elemId, resultMsg);

      console.log('resultMsg', resultMsg);
      return false;
    }
  }
  return true;
}

function paintMessagePanel(elemId, msg) {
  const errorSpanId = `#${elemId}-error`;
  const inputErrorSpan = $(errorSpanId);
  inputErrorSpan.html(msg);

  updateValidationStatus(elemId, "false");
}

function updateValidationStatus(elemId, status) {
  const elem = $(`#${elemId}`);
  elem.attr("valid-input", status);
}

function validationMsg(key, messageList) {
  if(messageList) {
    return prop(key, messageList);
  }
}

function validateRequired(key, value, msg) {
  const constraint = { [key]: {
    presence: { message: `^${msg}` }
  }};
  return validate( {[key]: value}, constraint );
}

function validateNumericality(key, value, msg) {
  const constraint = {
    [key]: {
      numericality: {
        notValid: "must be evenly divisible by two",
        message: `^${msg}`
      }
    }
  };

  return validate( {[key]: value}, constraint );
}

function validateEmail(key, value, msg) {
  const constraint = {
    [key]: {
      email: {
        message: `^${msg}`
      }
    }
  };

  return validate( {[key]: value}, constraint );
}

function validateEquality(key, value, partnerValue, msg) {
  const constraint = {
    [key]: {
      equality: {
        attribute: "partnerKey",
        message: `^${msg}`
      }
    }
  };

  return validate( {[key]: value, partnerKey: partnerValue}, constraint );
}

function validateFormat(key, value, pattern, msg) {
  const constraint = {
    [key]: {
      format: {
        pattern: pattern,
        flags: "gi",
        message: `^${msg}`
      }
    }
  };

  return validate( {[key]: value}, constraint );
}

