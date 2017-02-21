import $ from 'jquery';
// import { paintMasonryLayout } from './masonry-layout';

import { add5ThenMultiply7 } from './pure-functions';

import { converge, equals, head, sort, descend, identity, compose } from 'ramda';

// var Masonry = require('masonry-layout');
// var jQueryBridget = require('jquery-bridget');

// jQueryBridget( 'masonry', Masonry, $ );

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

  // const $imageContainer = $('.js-imageGridContainer').masonry({
  //   itemSelector: '.js-grid',
  //   percentPosition: true,
  //   columnWidth: '.js-gridSizer'
  // });

  // $imageContainer.masonry();

  // paintMasonryLayout();

const x = add5ThenMultiply7(4);
console.log('x', x);

const y = add5ThenMultiply7(7);
console.log('y', y);


// Point free style:
const shouldBeTrue = [6, 3, 4, 5, 2, 1];
const shouldBeFalse = [3, 4, 5, 2, 1];

// version #1
// const isFirstBiggest = xs =>
//   xs[0] === xs.sort((a, b) => b - a)[0];

// version #2
// const isFirstBiggest = converge(
//   equals, [
//     xs => xs[0],
//     xs => xs.sort((a, b) => b - a)[0]
//   ]
// );

// version #3
// const isFirstBiggest = converge(
//   equals, [
//     head,
//     xs => head(xs.sort((a, b) => b - a))
//   ]
// );

// version #4
// const isFirstBiggest = converge(
//   equals, [
//     head,
//     xs => head(sort(descend(identity))(xs))
//   ]
// );

const isFirstBiggest = converge(
  equals, [
    head,
    compose(head, sort(descend(identity)))
  ]
);

console.log(isFirstBiggest(shouldBeTrue));
console.log(isFirstBiggest(shouldBeFalse));

// console.log(isFirstBiggest(shouldBeTrue));
// console.log(isFirstBiggest(shouldBeFalse));

});
