import $ from 'jquery';
import { find, filter, head, propEq, isNil, isEmpty, complement, curry, always, ifElse, prop, compose, partial, forEach } from 'ramda';
import { formDataMap } from './form-data';
import { validateRequired, readValidationMsg } from "./apply-validation-rules";

const updateErrorPanel = (elemKey, msg) => {
  $(`.${elemKey}-error`).html(msg);
}

const isValueRequired = (elemKey) => {
  const isNotNil = complement(isNil);
  return isNotNil($(`.${elemKey}`).attr('required'));
}

const inputValue = (elemKey) => {
  const type = $(`.${elemKey}`).attr('type');

debugger;

  if (type === 'checkbox') {
    const c = $(`.${elemKey}`).prop('checked');
    const v = c === true ? "checked" : "";
    return v;
  }
  return $(`.${elemKey}`).val();
}

const updateValidationStatus = (elemKey, msg) => {
  $(`.${elemKey}`).attr("valid-input", isEmpty(msg));
  return msg;
}

const getElemKey = (elem) => {
  const classList = $(elem).attr('class').split(" ");
  const jsClass = (x) => x.startsWith('js-');
  const elemKey = head()(filter(jsClass, classList));
  return elemKey;
}

export const inputRequired = (formKey, elem) => {

  const elemKey = getElemKey(elem);

  const currentFormData = find(propEq('formKey', formKey));
  const inputList = prop('inputList');
  const inputData = find(propEq('elemKey', elemKey));
  const messageList = prop('messages');

  const curryValidateRequired = curry(validateRequired);
  const onlyValidateRequiredInput = ifElse(isValueRequired, curryValidateRequired, always(undefined));

  const test = compose(
    partial(updateErrorPanel, [elemKey]),
    partial(updateValidationStatus, [elemKey]),
    partial(readValidationMsg, [elemKey]),
    onlyValidateRequiredInput(elemKey)
  );

  const elemValue = inputValue(elemKey);

  const messages = compose(
    messageList,
    inputData,
    inputList,
    currentFormData
  )

  const allMessages = messages(formDataMap);
  const msg = prop('isRequired')(allMessages);

  test(elemValue, msg);
}

export function validateInputList(formKey, inputList) {
  // forEach(validateInput, inputList);
  const currentInputRequired = partial(inputRequired, [formKey]);
  forEach(currentInputRequired, inputList);
}

