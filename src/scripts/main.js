import $ from 'jquery';

import { add5ThenMultiply7 } from './pure-functions';
import { isBigHead } from './point-free';
import { parseQueryString } from './parse-query-string';

const queryString = "?page=landing&user=angela&location=nyc&ts=now";
console.log('parsedString: ', parseQueryString(queryString));

$(function () {

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');
    mobileMenu.toggle("slow");
  })

  const menuWrapper = document.querySelector('.js-menuWrapper');

  const showSearchPanel = document.querySelector('.js-showSearchPanel');
  showSearchPanel.addEventListener('click', (e) => {
    e.preventDefault();

    menuWrapper.classList.add('showSearchPanel');
  })

  const hideSearchPanel = document.querySelector('.js-hideSearchPanel');
  hideSearchPanel.addEventListener('click', (e) => {
    e.preventDefault();

    menuWrapper.classList.remove('showSearchPanel');
  })

  // Pure function and fucntion composition:
  const x = add5ThenMultiply7(4);
  console.log('x', x);

  const y = add5ThenMultiply7(7);
  console.log('y', y);

  // Point Free fuction:
  const bigHead = [21, 6, 3, 4, 5, 2, 1];
  const smallHead = [2, 16, 3, 4, 5, 18, 2, 1];

  console.log('isBigHead?', isBigHead(bigHead));
  console.log('isBigHead?', isBigHead(smallHead));

});
