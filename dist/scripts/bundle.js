(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var booklist = [{
  "id": 1,
  "title": "The Grapes of Wrath",
  "author": "John Steinbeck",
  "description": "An epic of the Great Depression chronicles the Dust Bowl migration of the 1930s and tells the story of one Oklahoma farm family, the Joads.",
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51IeBzZguDL.jpg",
  "imageUrl-local": "./images/the-grapes-of-wrath.jpg"
}, {
  "id": 2,
  "title": "Great Expectations",
  "author": "Charles Dickens",
  "description": "This is a gripping tale of crime and guilt, revenge and reward",
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/410lfZOQI6L._SX318_BO1,204,203,200_.jpg",
  "imageUrl-local": "./images/great-expectations.jpg"
}, {
  "id": 3,
  "title": "Wuthering Heights",
  "author": "Emily Brontë",
  "description": "Wuthering Heights is a wild, passionate story of the intense and almost demonic love between Catherine Earnshaw and Heathcliff.",
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/81zx%2BPUBRFL.jpg",
  "imageUrl-local": "./images/wuthering-heights.jpg"
}, {
  "id": 4,
  "title": "Sense and Sensibility",
  "author": "Jane Austen",
  "description": "The sisters learn that sense must mix with sensibility if they are to find personal happiness in a society where status and money govern the rules of love.",
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/415AMIk9PQL._SX324_BO1,204,203,200_.jpg",
  "imageUrl-local": "./images/sense-and-sensibility.jpg"
}, {
  "id": 5,
  "title": "Vanity Fair",
  "author": "William Makepeace Thackeray",
  "description": "This is a novel without a hero, satirizing society in early 19th-century Britain.",
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/516voTm5L%2BL.jpg",
  "imageUrl-local": "./images/vanity-fair.jpg"
}, {
  "id": 6,
  "title": "Middlemarch",
  "author": "George Eliot",
  "description": "The author ortrays a whole community--tradespeople, middle classes, country gentry--in the rising provincial town of Middlemarch, circa 1830.",
  "imageUrl": "https://images-na.ssl-images-amazon.com/images/I/51vOou9D1XL.jpg",
  "imageUrl-local": "./images/middle-march.jpg"
}];

exports.default = booklist;

},{}],2:[function(require,module,exports){
'use strict';

var _booklist = require('./booklist');

var _booklist2 = _interopRequireDefault(_booklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // import $ from 'jquery';

// search form


var books = [];
books.push.apply(books, _toConsumableArray(_booklist2.default));

function searchMatches(keyWords, books) {
  return books.filter(function (book) {
    var regex = new RegExp(keyWords, 'gi');
    return book.author.match(regex) || book.description.match(regex);
  });
}

function displaySearchResults() {
  var _this = this;

  var matchArray = searchMatches(this.value, books);

  var html = matchArray.map(function (book) {
    var regex = new RegExp(_this.value, 'gi');
    var cityName = book.author.replace(regex, '<span class="highlight">' + _this.value + '</span>');
    var stateName = book.description.replace(regex, '<span class="highlight">' + _this.value + '</span>');
    return '\n      <li>\n        <span class="name">' + cityName + '</span>\n        <span class="item">' + stateName + '</span>\n      </li>\n    ';
  }).join('');
  results.innerHTML = html;
}

var searchInput = document.querySelector('.search');
var results = document.querySelector('.results');

searchInput.addEventListener('change', displaySearchResults);
searchInput.addEventListener('keyup', displaySearchResults);

// search form - end


var menuOpen = document.querySelector('[data-mobileMenu="open"]');
var menuClose = document.querySelector('[data-mobileMenu="close"]');
var mobileMenu = document.querySelector('[data-mobileMenu="panel"]');

function noTouchMove(evt) {
  evt.preventDefault();
}

function openMenu() {
  mobileMenu.style.display = 'block';
  mobileMenu.style.right = '-320px';
  mobileMenu.classList.add('magictime');
  mobileMenu.classList.add('slideLeft');

  setTimeout(function () {
    mobileMenu.style.right = '0';
    mobileMenu.classList.remove('slideLeft');
  }, 1000);

  document.querySelector('html, body').addEventListener('touchmove', noTouchMove);
}

function closeMenu() {
  document.querySelector('html, body').removeEventListener('touchmove', noTouchMove);

  mobileMenu.classList.add('magictime');
  mobileMenu.classList.add('slideRight');

  setTimeout(function () {
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('slideRight');
  }, 1000);
}

menuOpen.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);

// $(function () {

// $('[data-mobileMenu="open"]').click(function() {
//   const mobileMenu = $('[data-mobileMenu="panel"]');

//   mobileMenu.css({'display': 'block'});
//   mobileMenu.css({right: '-320px'});
//   mobileMenu.addClass('magictime slideLeft');

//   setTimeout(function(){
//     mobileMenu.css({right: 0});
//     mobileMenu.removeClass('slideLeft');
//   }, 1000);

//   $('html, body').on('touchmove', function(evt){
//      evt.preventDefault();
//   });
// })

// $('[data-mobileMenu="close"]').click(function() {
//   $('html, body').unbind('touchmove');

//   const mobileMenu = $('[data-mobileMenu="panel"]');

//   mobileMenu.addClass('magictime slideRight');
//   setTimeout(function(){
//     mobileMenu.css({'display': 'none'});
//     mobileMenu.removeClass('slideRight');
//   }, 1000);
// })

// });

},{"./booklist":1}]},{},[2])
//# sourceMappingURL=bundle.js.map
