// import $ from 'jquery';
import activateSearchForm from './search-form';
import activateMobileMenu from './mobile-menu';

activateSearchForm();
activateMobileMenu();

// $(function () {

// });


// my fav memu list
function saveFavList() {
  console.log("save list");
}

const saveFavListBtn = document.querySelector('.js-favListForm_save');

saveFavListBtn.addEventListener('click', saveFavList);

// my fav memu list - End










