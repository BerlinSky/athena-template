import $ from 'jquery';

import { mobileMenuCommand } from './mobile-menu';
import { setMessageCommand, watchMessageChange, getMessageCommand } from './message-form';

$(function () {

  mobileMenuCommand();

  setMessageCommand();

  watchMessageChange();

  getMessageCommand();

});
