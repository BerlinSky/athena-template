import $ from 'jquery';
import { initMobileMenu } from './mobile-menu';
import { paintMasonryLayout } from './masonry-layout';
import { initFancyInputBox } from './fancy-input';

import { inputRequired } from './form/form-validation';

$(function () {
  initMobileMenu();
  paintMasonryLayout();
  initFancyInputBox();

  // const paintErrorSpan = (x) => {
  //   const errorSpan = $('.js-userName-error');
  //   errorSpan.html(x);
  // }

  // console.log("here");
  const userName = $('.js-userName');
  inputRequired(userName);

});
