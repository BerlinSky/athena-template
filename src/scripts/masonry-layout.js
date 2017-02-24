import $ from 'jquery';
var imagesLoaded = require('imagesloaded');

var Masonry = require('masonry-layout');
var jQueryBridget = require('jquery-bridget');

jQueryBridget( 'masonry', Masonry, $ );
imagesLoaded.makeJQueryPlugin( $ );

export function paintMasonryLayout() {
  const $container = $('.js-imageGridContainer');
  const griderSizer = $('.js-gridSizer');

  console.log('gutter', griderSizer.attr('data-grid-gutter'));

  if ($container) {
    const gutterSize = parseInt(griderSizer.attr('data-grid-gutter')) || 0;
    // const gutterSize = 10;

    const $imageContainer = $container.masonry({
        itemSelector: '.js-grid',
        percentPosition: true,
        columnWidth: '.js-gridSizer',
        gutter: gutterSize
      });

    // export
    // $imageContainer.masonry();

    $imageContainer.imagesLoaded().progress( function() {
      $imageContainer.masonry('layout');
    });
  }
}
