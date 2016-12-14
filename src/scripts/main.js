// import $ from 'jquery';
import activateSearchForm from './search-form';

activateSearchForm();

const menuOpen = document.querySelector('[data-mobileMenu="open"]');
const menuClose = document.querySelector('[data-mobileMenu="close"]');
const mobileMenu = document.querySelector('[data-mobileMenu="panel"]');

function noTouchMove(evt) {
  evt.preventDefault();
}

function openMenu() {
  mobileMenu.style.display = 'block';
  mobileMenu.style.right = '-320px';
  mobileMenu.classList.add('magictime');
  mobileMenu.classList.add('slideLeft');

  setTimeout(() => {
    mobileMenu.style.right = '0';
    mobileMenu.classList.remove('slideLeft');
  }, 1000);

  document.querySelector('html, body').addEventListener('touchmove', noTouchMove);
}

function closeMenu() {
  document.querySelector('html, body').removeEventListener('touchmove', noTouchMove);

  mobileMenu.classList.add('magictime');
  mobileMenu.classList.add('slideRight');

  setTimeout(() => {
    mobileMenu.style.display = 'none';
    mobileMenu.classList.remove('slideRight');
  }, 1000);
}

menuOpen.addEventListener('click', openMenu);

menuClose.addEventListener('click', closeMenu);


// $(function () {

// });













