import $ from 'jquery';
var imagesLoaded = require('imagesloaded');

var Masonry = require('masonry-layout');
var jQueryBridget = require('jquery-bridget');

jQueryBridget( 'masonry', Masonry, $ );
imagesLoaded.makeJQueryPlugin( $ );

export function paintMasonryLayout() {
  const $container = $('.js-imageGridContainer');

  if ($container) {
    const $imageContainer = $container.masonry({
        itemSelector: '.js-grid',
        percentPosition: true,
        columnWidth: '.js-gridSizer'
      });

    // export
    // $imageContainer.masonry();

    $imageContainer.imagesLoaded().progress( function() {
      $imageContainer.masonry('layout');
    });
  }
}
