import { cloneDeep } from 'lodash';

export function stringify(value) {
  const s = JSON.stringify(cloneDeep(value), replaceIt);

  /* eslint-disable no-console */
  // console.log("here", s);
  // console.log("replacer", replacer);

  return s;
}

function replaceIt(key, value) {

/* eslint-disable no-console */
  console.log(key, value);

  if (value === "L") {
    // return encodeURIComponent(value);
    return "X";
  }
  else {
    return value;
  }
}