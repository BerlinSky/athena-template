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

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activateFavMenuList;

var _booklist = require('./booklist');

var _booklist2 = _interopRequireDefault(_booklist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } } // my fav memu list


var books = [];
books.push.apply(books, _toConsumableArray(_booklist2.default));

var favListForm = document.querySelector('.js-favListForm');
var favMenuList = document.querySelector('.js-favMenuList');
var searchInput = document.querySelector('.js-searchInput');

var favMenuListLocalName = 'favMenuList';

function searchMatches(keyWords) {
  return books.filter(function (book) {
    var regex = new RegExp(keyWords, 'gi');
    return book.author.match(regex) || book.title.match(regex);
  });
}

function paintFavList() {
  var _this = this;

  var matchArray = searchMatches(this.value);

  var html = matchArray.map(function (book, i) {
    var regex = new RegExp(_this.value, 'gi');
    var author = book.author.replace(regex, '<span class="highlight">' + _this.value + '</span>');
    return '\n      <li>\n        <input type="checkbox" data-index=' + i + ' id="item' + i + '" ' + (book.isFav ? 'checked' : '') + ' />\n        <label for="item' + i + '">' + author + '</label>\n      </li>\n    ';
  }).join('');
  favMenuList.innerHTML = html;
}

function markFavItem(e) {
  var et = e.target;
  if (!et.matches('input')) return;

  var index = et.dataset.index;
  books[index].isFav = !books[index].isFav;
}

function saveFavList(e) {
  e.preventDefault();

  var favList = [];
  books.map(function (book) {
    if (book.isFav) {
      favList.push(book);
    }
  });

  var favName = this.querySelector('.js-favListForm_listName').value;
  var itemToSave = {
    favName: favName,
    favList: favList
  };

  var favMenuListSaved = [];
  favMenuListSaved.push(itemToSave);
  if (favList.length > 0) {
    localStorage.setItem(favMenuListLocalName, JSON.stringify(favMenuListSaved));
  }
}

function activateFavMenuList() {
  searchInput.addEventListener('change', paintFavList);
  searchInput.addEventListener('keyup', paintFavList);

  favListForm.addEventListener('submit', saveFavList);
  favMenuList.addEventListener('click', markFavItem);
}

// my fav memu list - End

},{"./booklist":1}],3:[function(require,module,exports){
'use strict';

var _mobileMenu = require('./mobile-menu');

var _mobileMenu2 = _interopRequireDefault(_mobileMenu);

var _favMenuList = require('./fav-menu-list');

var _favMenuList2 = _interopRequireDefault(_favMenuList);

var _savedFavs = require('./saved-favs');

var _savedFavs2 = _interopRequireDefault(_savedFavs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mobileMenu2.default)(); // import $ from 'jquery';

(0, _favMenuList2.default)();
(0, _savedFavs2.default)();

// $(function () {

// });

},{"./fav-menu-list":2,"./mobile-menu":4,"./saved-favs":5}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = activateMobileMenu;
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

function activateMobileMenu() {
  menuOpen.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);
}

},{}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

exports.default = activateSavedMenuFavList;
var favMenuListLocalName = 'favMenuList';

var _JSON$parse = JSON.parse(localStorage.getItem(favMenuListLocalName)),
    _JSON$parse2 = _slicedToArray(_JSON$parse, 1),
    favMenuListLocal = _JSON$parse2[0];

var favName = favMenuListLocal.favName,
    favList = favMenuListLocal.favList;

var savedFavListElem = document.querySelector('.js-savedFavList');
var savedFavListLabel = document.querySelector('.js-savedFavListName');

function paintFavList(books, favMenuListElem) {
  var html = books.map(function (book, i) {
    return '\n        <li class=\'searchResultList\'>\n          <label for="item' + i + '">' + book.author + '</label>\n        </li>\n      ';
  }).join('');
  favMenuListElem.innerHTML = html;
}

function activateSavedMenuFavList() {
  savedFavListLabel.innerHTML = favName;
  paintFavList(favList, savedFavListElem);
}

},{}]},{},[3])
//# sourceMappingURL=bundle.js.map
