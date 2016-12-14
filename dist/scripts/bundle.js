(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// import $ from 'jquery';

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

},{}]},{},[1])
//# sourceMappingURL=bundle.js.map
