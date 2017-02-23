import $ from 'jquery';

export function initMobileMenu() {

  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');
    mobileMenu.toggle("slow");
  })


  const menuWrapper = $('.js-menuWrapper');
  const showSearchPanel = $('.js-showSearchPanel');

  showSearchPanel.click(function(e) {
    e.preventDefault();

    menuWrapper.addClass('showSearchPanel');
  })

  // showSearchPanel.addEventListener('click', (e) => {
  //   e.preventDefault();

  //   menuWrapper.classList.add('showSearchPanel');
  // })

  const hideSearchPanel = $('.js-hideSearchPanel');
  hideSearchPanel.click(function(e) {
    e.preventDefault();

    menuWrapper.removeClass('showSearchPanel');
  })

  // const hideSearchPanel = document.querySelector('.js-hideSearchPanel');
  // hideSearchPanel.addEventListener('click', (e) => {
  //   e.preventDefault();

  //   menuWrapper.classList.removeClass('showSearchPanel');
  // })
}

