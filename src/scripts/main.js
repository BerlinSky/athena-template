import $ from 'jquery';
import { initMobileMenu } from './mobile-menu';

import { transform } from './data-transoform';
import { extractSubset } from './project-properties';

import { declarativeMap } from './declarative-map';

import { path } from 'ramda';
const data = { a: { b: 3 } };
const pathParam = ['a', 'b'];
const result = path(pathParam, data);

console.log(result);

$(function () {

  initMobileMenu();

  transform();

  extractSubset();

  declarativeMap();
});
