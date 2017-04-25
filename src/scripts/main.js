import $ from 'jquery';
import { initMobileMenu } from './mobile-menu';
import { paintMasonryLayout } from './masonry-layout';
import { initFancyInputBox } from './fancy-input';

import { formValidationEvents } from './form/form-events';

$(function () {
  initMobileMenu();
  paintMasonryLayout();
  initFancyInputBox();

  formValidationEvents();
});
