import $ from 'jquery';

import { setMessage, getMessage } from './tools/message-handler';
import { stringify, parse } from "./tools/json-handler";

export function setMessageCommand() {
  const setMessageBtn = $('.js-commandButton__setMessage');

  setMessageBtn.click(function(e) {
    e.preventDefault();

    const textArea = $('.js-setDataTextArea');
    let data = textArea.val();

    if (data.length > 0) {
      data = parse(data);
    }
    // console.log("input", data);

    setMessage(data);
  })
}

export function getMessageCommand() {
  const getMessageBtn = $('.js-commandButton__getMessage');

  getMessageBtn.click(function(e) {
    e.preventDefault();
    const texArea = $('.js-getDataTextArea');
    texArea.text(stringify(getMessage()));
  })
}

export function watchMessageChange() {
  $(window).bind('storage', function (e) {
    const messageData = e.originalEvent.newValue;
    console.log("received the custom event from window", messageData);

    updateStorageStatus("Stored message data have been updated.");
  });
}

function updateStorageStatus(text) {
  const dataTextArea = $('.js-eventAlert');
  dataTextArea.html(text);
}
