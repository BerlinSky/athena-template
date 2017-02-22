import { tail, compose, split, map, fromPairs } from 'ramda';

// Step #1
// export const parseQueryString = tail();

// Step #2
// export const parseQueryString = compose(split('&'), tail());

// Step #3
export const parseQueryString = compose(fromPairs, map(split('=')), split('&'), tail());

