import $ from 'jquery';
import { initMobileMenu } from './mobile-menu';
import { paintMasonryLayout } from './masonry-layout';
import { initFancyInputBox } from './fancy-input';

$(function () {
  initMobileMenu();
  paintMasonryLayout();
  initFancyInputBox();
});
