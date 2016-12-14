// import $ from 'jquery';

// search form
import booklist from './booklist';

const books = [];
books.push(...booklist);

function searchMatches(keyWords, books) {
  return books.filter(book => {
    const regex = new RegExp(keyWords, 'gi');
    return book.author.match(regex) || book.description.match(regex);
  });
}

function displaySearchResults() {
  const matchArray = searchMatches(this.value, books);

  const html = matchArray.map(book => {
    const regex = new RegExp(this.value, 'gi');
    const cityName = book.author.replace(regex, `<span class="highlight">${this.value}</span>`);
    const stateName = book.description.replace(regex, `<span class="highlight">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}</span>
        <span class="item">${stateName}</span>
      </li>
    `;
  }).join('');
  results.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const results = document.querySelector('.results');

searchInput.addEventListener('change', displaySearchResults);
searchInput.addEventListener('keyup', displaySearchResults);

// search form - end


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













