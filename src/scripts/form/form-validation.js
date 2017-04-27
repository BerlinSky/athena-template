import $ from 'jquery';
import { find, filter, head, propEq, isNil, isEmpty, complement, curry, always, ifElse, prop, compose, partial, forEach } from 'ramda';
import { formDataMap } from './form-data';
import { validateRequired, validateEmail, readValidationMsg } from "./apply-validation-rules";

const updateErrorPanel = (elemKey, msg) => {
  $(`.${elemKey}-error`).html(msg);
}

const isValueRequired = (elemKey) => {
  const isNotNil = complement(isNil);
  return isNotNil($(`.${elemKey}`).attr('required'));
}

const inputValue = (elemKey) => {
  const type = $(`.${elemKey}`).attr('type');

  if (type === 'checkbox') {
    return $(`.${elemKey}`).prop('checked') ? "checked" : "";
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

const messageContainer = (formKey, elemKey) => {
  const messageList = prop('messages');
  const inputData = find(propEq('elemKey', elemKey));
  const inputList = prop('inputList');
  const currentFormData = find(propEq('formKey', formKey));

  const messages = compose(
    messageList,
    inputData,
    inputList,
    currentFormData
  )

  return messages(formDataMap);
}

const inputRequired = (formKey, elem) => {
  const elemKey = getElemKey(elem);
  const elemValue = inputValue(elemKey);

  const curryValidateRequired = curry(validateRequired);
  const onlyValidateRequiredInput = ifElse(isValueRequired, curryValidateRequired, always(undefined));

  const test = compose(
    partial(updateErrorPanel, [elemKey]),
    partial(updateValidationStatus, [elemKey]),
    partial(readValidationMsg, [elemKey]),
    onlyValidateRequiredInput(elemKey)
  );

  const msgContainer = messageContainer(formKey, elemKey);
  const msg = prop('isRequired')(msgContainer);

  test(elemValue, msg);
}

const inspectEmail = (formKey, elem) => {
  const elemKey = getElemKey(elem);
  const elemValue = inputValue(elemKey);

  if (isEmpty(elemValue)) return;

  if ($(elem).attr('type') != 'email') return;

  const curryValidateEmail = curry(validateEmail);

  const test = compose(
    partial(updateErrorPanel, [elemKey]),
    partial(updateValidationStatus, [elemKey]),
    partial(readValidationMsg, [elemKey]),
    curryValidateEmail(elemKey)
  );

  const msgContainer = messageContainer(formKey, elemKey);
  const msg = prop('email')(msgContainer);

  test(elemValue, msg);

}

export const validateInput = (formKey, elem) => {
  inputRequired(formKey, elem);
  if ($(elem).attr('valid-input') === 'false') return;

  inspectEmail(formKey, elem);
  if ($(elem).attr('valid-input') === 'false') return;
}

export function validateInputList(formKey, inputList) {
  const currentInputRequired = partial(validateInput, [formKey]);
  forEach(currentInputRequired, inputList);
}

