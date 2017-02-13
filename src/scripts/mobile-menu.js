import $ from 'jquery';

export function mobileMenuCommand() {
  $('.js-toggleMobileMenu').click(function(e) {
    e.preventDefault();

    const mobileMenu = $('.js-mobileMenuContainer');
    mobileMenu.toggle("slow");
  })

  const menuWrapper = document.querySelector('.js-menuWrapper');

  const showSearchPanel = $('.js-showSearchPanel');

  if (showSearchPanel.length) {
    showSearchPanel.addEventListener('click', (e) => {
      e.preventDefault();
      menuWrapper.classList.add('showSearchPanel');
    })
  }

  const hideSearchPanel = $('.js-hideSearchPanel');
  if (hideSearchPanel.length) {
    hideSearchPanel.addEventListener('click', (e) => {
      e.preventDefault();
      menuWrapper.classList.remove('showSearchPanel');
    })
  }
}
