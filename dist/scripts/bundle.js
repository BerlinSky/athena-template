(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var booklist = [{
  "id": 1,
  "title": "The Grapes of Wrath",
  "author": "John Steinbeck"
}, {
  "id": 2,
  "title": "Great Expectations",
  "author": "Charles Dickens"
}, {
  "id": 3,
  "title": "Wuthering Heights",
  "author": "Emily Brontë"
}, {
  "id": 4,
  "title": "Sense and Sensibility",
  "author": "Jane Austen"
}, {
  "id": 5,
  "title": "Vanity Fair",
  "author": "William Makepeace Thackeray"
}, {
  "id": 6,
  "title": "Middlemarch",
  "author": "George Eliot"
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

function searchMatches(keyWords) {
  return books.filter(function (book) {
    var regex = new RegExp(keyWords, 'gi');
    return book.author.match(regex) || book.title.match(regex);
  });
}

function displaySearchResults() {
  var _this = this;

  var matchArray = searchMatches(this.value);

  var html = matchArray.map(function (book) {
    var regex = new RegExp(_this.value, 'gi');
    var author = book.author.replace(regex, '<span class="highlight">' + _this.value + '</span>');
    var title = book.title.replace(regex, '<span class="highlight">' + _this.value + '</span>');
    return '\n      <li>\n        <span class="name">' + author + '</span>\n        <span class="item">' + title + '</span>\n      </li>\n    ';
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

// });

},{"./booklist":1}]},{},[2])
//# sourceMappingURL=bundle.js.map
