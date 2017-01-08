import $ from 'jquery';

$(function () {

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');
    mobileMenu.toggle("slow");
  })

  const menuWrapper = document.querySelector('.js-menuWrapper');
  const showSearchPanel = document.querySelector('.js-showSearchPanel');

  showSearchPanel.addEventListener('click', (e) => {
    console.log(showSearchPanel);

    e.preventDefault();
    menuWrapper.classList.add('showSearchPanel');
  })

  // const showSearchPanel = $('.js-showSearchPanel');
  // const searchPanel = $('.js-searchPanel');
  // showSearchPanel.click(function(e) {
  //   e.preventDefault();

  //   showSearchPanel.hide();
  //   searchPanel.show();
  // })

  const hideSearchPanel = document.querySelector('.js-hideSearchPanel');
  // const hideSearchPanel = $('.js-hideSearchPanel');
  hideSearchPanel.addEventListener('click', (e) => {
    e.preventDefault();
    // searchPanel.hide();
    // showSearchPanel.show();

    menuWrapper.classList.remove('showSearchPanel');
  })


});
