import { compose } from 'ramda';

const add5 = function(value) {
  return value + 5;
}

const multiply7 = function(value) {
  return value * 7;
}

// Function composition:
export const add5ThenMultiply7 = compose(multiply7, add5);

