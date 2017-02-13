import $ from 'jquery';

import { mobileMenuCommand } from './mobile-menu';
import { setMessageCommand, watchMessageChangeEvent, getMessageCommand } from './message-form';

$(function () {

  mobileMenuCommand();

  setMessageCommand();

  watchMessageChangeEvent();

  getMessageCommand();

});
