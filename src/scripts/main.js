import $ from 'jquery';
import R from 'ramda';

import { initMobileMenu } from './mobile-menu';

// import { transform } from './data-transoform';
// import { extractSubset } from './project-properties';

// import { declarativeMap } from './declarative-map';

// import { path } from 'ramda';
// const data = { a: { b: 3 } };
// const pathParam = ['a', 'b'];
// const result = path(pathParam, data);

// console.log(result);
const add = R.curry((a, b) => {
  return a + b;
});

// const add = function(a, b) {
//   return a + b;
// };

console.log(add(3, 4));

// const flag = R.curry(() => {
//   return true;
// })

const flag = function() {
  return true;
}

console.log(flag());

// const result = R.when(flag(), add());
const result = R.when(flag, add(5));
// const more = result(2, 3);
const x = result(0);
console.log(x);

$(function () {

  initMobileMenu();


  // transform();

  // extractSubset();

  // declarativeMap();
});
