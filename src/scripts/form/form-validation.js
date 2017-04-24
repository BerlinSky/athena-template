import $ from 'jquery';
import { filter, path, isNil, complement, curry, always, ifElse, map, prop, invoker, compose, constructN , partial} from 'ramda';

import { validateRequired, readValidationMsg } from "./apply-validation-rules";

const formDataMap = [{
  formKey: "js-FormValidation",
  inputList: [
    {
      elemKey: "js-userName",
      messageList: [
        { "isRequired": "Please enter a valid user name" }
      ]
    },
    {
      elemKey: "js-email",
      messageList: [
        { "isRequired": "Please enter a valid email address" },
        { "email": "Only valid email address is allowed." }
      ]
    }
  ]}
];


const currentFormData = (formKey) => {
  formKey = 'js-FormValidation';
  const thisForm = (f) =>  f.formKey === formKey;

  return filter(thisForm, formDataMap);
}

// const p = path(["js-FormValidation"]);


// const getSizes = prop('sizes')
// const getColors = chain(prop('colors'))
// const getColorNames = pluck('name')

// const getUniqueColors = compose(uniq, getColorNames, getColors, getSizes)

// const result = getUniqueColors(product)
// console.log(result)

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

export const inputRequired = (elemKey) => {

  const formData = currentFormData();
  const inputList = map(prop('inputList'), formData);

  const thisInput = (d) => d.elemKey === elemKey;
  const inputData = filter(thisInput, inputList[0]);

  const messageList = map(prop('messageList'), inputData);
  console.log(messageList[0]);

  // const msg = "something is 5 wrong."
  const msg = prop('isRequired', messageList[0][0]);
  console.log(msg);
  // const msg = "something is 5 wrong."

  const curryValidateRequired = curry(validateRequired);
  const onlyValidateRequiredInput = ifElse(isValueRequired, curryValidateRequired, always(undefined));

  const test = compose(
    partial(updateErrorPanel, [elemKey]),
    partial(readValidationMsg, [elemKey]),
    onlyValidateRequiredInput(elemKey)
  );

  const elemValue = inputValue(elemKey);
  test(elemValue, msg);
}

// Validate required field
// 1. retrieve the required attr
// 2. if required, retrieve value and move to step 3; it not, paint validation span to empty string
// 3. retrieve elem value
// 4. if value is



// const inspectRequired = (key, value, msg) => {
//   const result = validateRequired(key, value, msg);
//   return isNil(result) ? "" : readValidationMsg(key, result);
// }

// function inspectRequired(isRequired, elemId, elemValue, msg) {
//   if (isRequired) {
//     const result = validateRequired(elemId, elemValue, msg);
//     if (!isNil(result)) {
//       const resultMsg = readValidationMsg(elemId, result);
//       paintMessagePanel(elemId, resultMsg);

//       console.log('resultMsg', resultMsg);

//       return false;
//     }
//   }
//   return true;
// }



// const validateRequiredInput = (elemKey, msg) => {
//   return msg;
// }

// const isInputRequired = (elemKey) => {
//   const attr = $(`.${elemKey}`).attr('required');
//   return isNil(attr);
// }

// const errorSpan = $('.js-userName-error');

// const paintErrorSpan = (x) => {
//   isNil(x) ? errorSpan.html('') : errorSpan.html(x);
// }


// const printName = (elem) => {
//   const n = $(elem).attr('name');
//   console.log(n)
// }

// const jq = constructN(1, $);

// const validateRequired = compose(
//   printName,
//   jq
// );



  // if (isValueRequired(elem)) {
  //   paintErrorSpan("");
  // }
  // else {
  //   // check the elem value, and then:
  //   const x = map(printName, elem);
  //   console.log(x);
  //   paintErrorSpan("Missing required value");
  // }
// const {invoker, compose, constructN} = R

// $('#sample')
//   .animate({left:'250px'})
//   .animate({left:'10px'})
//   .slideUp()

// const animate = invoker(1, 'animate')
// const slide = invoker(0, 'slideUp')
// const jq = constructN(1, $)

// const animateDiv = compose(
//   slide,
//   animate({left:'10px'}),
//   animate({left:'250px'}),
//   jq
//   )

// animateDiv('#sample')
// animateDiv('#sample2')

