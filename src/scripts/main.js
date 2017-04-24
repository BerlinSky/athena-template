import $ from 'jquery';
import { initMobileMenu } from './mobile-menu';
import { paintMasonryLayout } from './masonry-layout';
import { initFancyInputBox } from './fancy-input';

import { inputRequired } from './form/form-validation';

$(function () {
  initMobileMenu();
  paintMasonryLayout();
  initFancyInputBox();

  const elemKey = "js-userName";
  inputRequired(elemKey);

  const elemKey2 = "js-email";
  inputRequired(elemKey2);

});
