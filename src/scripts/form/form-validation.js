import $ from 'jquery';
import { _, isNil, complement, curry, always, ifElse, map, prop, invoker, compose, constructN , partial} from 'ramda';

import { validateRequired, readValidationMsg } from "./apply-validation-rules";

const isNotNil = complement(isNil);

const updateErrorPanel = (elemKey, msg) => {
  $(`.${elemKey}-error`).html(msg);
}

const isValueRequired = (elemKey) => {
  return isNotNil($(`.${elemKey}`).attr('required'));
}

export const inputRequired = () => {
  const elemKey = "js-userName";
  const elemValue = null;
  const msg = "something is 5 wrong."

  const curryValidateRequired = curry(validateRequired);
  const onlyValidateRequiredInput = ifElse(isValueRequired, curryValidateRequired, always(undefined));


const temp = isValueRequired(elemKey);
console.info(temp);


  const test = compose(
    partial(updateErrorPanel, [elemKey]),
    partial(readValidationMsg, [elemKey]),
    onlyValidateRequiredInput(elemKey)
    // curryValidateRequired(elemKey)
  );

  test(elemValue, msg);

  // const test2 = ifElse(isValueRequired, curryValidateRequired, always("nancy"));
  // console.log(test2(elemKey));
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

