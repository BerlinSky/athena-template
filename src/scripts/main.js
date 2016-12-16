// import $ from 'jquery';
import activateSearchForm from './search-form';
import activateMobileMenu from './mobile-menu';

activateSearchForm();
activateMobileMenu();

// $(function () {

// });


// my fav memu list
function saveFavList(e) {
  e.preventDefault();

  console.log("save list");
}

const favListForm = document.querySelector('.js-favListForm');

favListForm.addEventListener('submit', saveFavList);

// my fav memu list - End










