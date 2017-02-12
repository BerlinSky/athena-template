import { cloneDeep } from 'lodash';

export function stringify(value) {
  return JSON.stringify(cloneDeep(value));

  /* eslint-disable no-console */
  // console.log(s);
}

export function parse(value) {
  return JSON.parse(cloneDeep(value));

  /* eslint-disable no-console */
  // console.log(s);
}
