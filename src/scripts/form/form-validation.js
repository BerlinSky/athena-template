import $ from 'jquery';
import { isNil, map, prop, invoker, compose, constructN } from 'ramda';


// Validate required field
// 1. retrieve the required attr
// 2. if required, retrieve value and move to step 3; it not, paint validation span to empty string
// 3. retrieve elem value
// 4. if value is


const errorSpan = $('.js-userName-error');

const paintErrorSpan = (x) => {
  isNil(x) ? errorSpan.html('') : errorSpan.html(x);
}

const isInputRequired = (elem) => {
  return isNil($(elem).attr('required'));
}

const printName = (elem) => {
  const n = $(elem).attr('name');
  console.log(n)
}

const jq = constructN(1, $);

const validateRequired = compose(
  printName,
  jq
);

export const inputRequired = (elem) => {
  validateRequired(elem);

  if (isInputRequired(elem)) {
    paintErrorSpan("");
  }
  else {
    // check the elem value, and then:
    const x = map(printName, elem);
    console.log(x);
    paintErrorSpan("Missing required value");
  }
}

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

