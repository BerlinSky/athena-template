import $ from 'jquery';

import { mobileMenuCommand } from './mobile-menu';
import { setMessageCommand, getMessageCommand } from './message-form';

$(function () {

  mobileMenuCommand();

  setMessageCommand();

  getMessageCommand();

});
