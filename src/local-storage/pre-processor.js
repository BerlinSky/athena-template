import { cloneDeep } from 'lodash';

export function stringify(value) {
  return JSON.stringify(cloneDeep(value));

  /* eslint-disable no-console */
  // console.log(s);
}