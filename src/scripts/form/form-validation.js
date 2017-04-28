import $ from 'jquery';
import { equals, always, unless, tap, find, filter, head, propEq, isNil, isEmpty, complement, curry, ifElse, prop, compose, partial, forEach } from 'ramda';
import { formDataMap } from './form-data';
import { validateRequired, validateEmail, validateEquality, readValidationMsg } from "./apply-validation-rules";

const falsy = always('false');
const isNotNil = complement(isNil);

const updateErrorPanel = (elemKey, msg) => {
  $(`.${elemKey}-error`).html(msg);
}

const isValueRequired = (elemKey) => {
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

const partnerElemKey = (formKey, elemKey) => {
  const currentFormData = find(propEq('formKey', formKey));
  const inputList = prop('inputList');
  const inputData = find(propEq('elemKey', elemKey));
  const partner = prop('partner');

  const elemKeyPartner = compose(
    partner,
    inputData,
    inputList,
    currentFormData
  )

  return elemKeyPartner(formDataMap);
}

const inspectRequired = (formKey, elem) => {
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

const inspectFormat = (formKey, elem) => {
  const elemKey = getElemKey(elem);
  const elemValue = inputValue(elemKey);
  return;
}

const log = (x) => {
  console.log(x);
}
const inspectEquality = (formKey, elem) => {

  const elemKey = getElemKey(elem);

  const elemValue = inputValue(elemKey);
  if (isEmpty(elemValue)) return;

  const elemKeyPartner = partnerElemKey(formKey, elemKey);
  if (isNil(elemKeyPartner)) return;

  const elemPartner = $(`#${formKey}`).find(`.${elemKeyPartner}`);
  const partnerValue = $(elemPartner).val();

  const msgContainer = messageContainer(formKey, elemKey);
  const msg = prop('partner')(msgContainer);


  const curriedValidateEquality = curry(validateEquality);

  const test = compose(
    partial(updateErrorPanel, [elemKey]),
    partial(updateValidationStatus, [elemKey]),
    partial(readValidationMsg, [elemKey]),
    tap(log),
    curriedValidateEquality(elemKey, elemValue, partnerValue)
  );

  test(msg);
}

const hasInputErrors = (elem) => equals($(elem).attr('valid-input'), falsy());

export const validateInput = (formKey, elem) => {
  inspectRequired(formKey, elem);

  console.log(hasInputErrors(elem));

  if (!hasInputErrors(elem)) {
    inspectEmail(formKey, elem);
  }

  if (!hasInputErrors(elem)) {
    inspectEquality(formKey, elem)
  }
}

export function validateInputList(formKey, inputList) {
  const currentinspectRequired = partial(validateInput, [formKey]);
  forEach(currentinspectRequired, inputList);
}
