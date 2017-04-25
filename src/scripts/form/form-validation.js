import $ from 'jquery';
import { find, filter, head, propEq, isNil, complement, curry, always, ifElse, prop, compose, partial, forEach } from 'ramda';

import { validateRequired, readValidationMsg } from "./apply-validation-rules";

const formDataMap = [{
  formKey: "js-FormValidation",
  inputList: [
    {
      elemKey: "js-userName",
      messages: { "isRequired": "Please enter a valid user name" }
    },
    {
      elemKey: "js-email",
      messages: {
        "isRequired": "Please enter a valid email address",
        "email": "Only valid email address is allowed."
      }
    }
  ]}
];

const updateErrorPanel = (elemKey, msg) => {
  $(`.${elemKey}-error`).html(msg);
}

const isValueRequired = (elemKey) => {
  const isNotNil = complement(isNil);
  return isNotNil($(`.${elemKey}`).attr('required'));
}

const inputValue = (elemKey) => {
  return $(`.${elemKey}`).val();
}

const getElemKey = (elem) => {
  const classList = $(elem).attr('class').split(" ");
  const jsClass = (x) => x.startsWith('js-');
  const elemKey = head()(filter(jsClass, classList));
  return elemKey;
}

export const inputRequired = (elem) => {

  const elemKey = getElemKey(elem);

  const currentFormData = find(propEq('formKey', 'js-FormValidation'));
  const inputList = prop('inputList');
  const inputData = find(propEq('elemKey', elemKey));
  const messageList = prop('messages');

  const curryValidateRequired = curry(validateRequired);
  const onlyValidateRequiredInput = ifElse(isValueRequired, curryValidateRequired, always(undefined));

  const test = compose(
    partial(updateErrorPanel, [elemKey]),
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

export function validateInputList(inputList) {
  // forEach(validateInput, inputList);
  forEach(inputRequired, inputList);
}
