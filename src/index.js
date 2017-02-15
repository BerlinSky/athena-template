import './main.css';
import $ from 'jquery';

import { curry } from "lodash";

// import { addEvent } from './scripts/event';

/* eslint-disable no-console */

$(function() {
  console.log("bundle works just fine.");

  $('.eventCreator').click(function() {
    // disable default event behavior
    // e.preventDefault();

    $('body').trigger("custom:changed");

    console.log("fired the custom event");

    $(window).trigger("window:changed");
    
  })

  $('body').on('custom:changed', function(e) {
    e.preventDefault();

    console.log("received the custom event");
  })

  // addEvent(window, 'storage:changed', function (event) {
  //   console.log('window event created', event);
  // });

  $(window).on('window:changed', function() {

    console.log("received the custom event from window");
  })
});

var addFourNumbers = (a, b, c, d) => a + b + c + d;

var curriedAddFourNumbers = curry(addFourNumbers);
var f = curriedAddFourNumbers(5, 2);
var g = f(3);
var x = g(4);

console.log(x);

let dataStructure = {
  "enterprise": "Golden Apple",
  "band": {
    "manager": "Joe Scarface",
    "leadSinger": "Bluefish",
    "dancers": [
      "speddy",
      "snake",
      "braves"
    ]
  }
}

console.log(dataStructure);
