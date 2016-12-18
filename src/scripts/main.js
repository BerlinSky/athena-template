// import $ from 'jquery';
import activateSearchForm from './search-form';
import activateMobileMenu from './mobile-menu';
import activateFavMenuList from './fav-menu-list';
// import activateFavMenuList from './fav-menu-list';

activateMobileMenu();
activateSearchForm();
activateFavMenuList();
// $(function () {

// });

const favMenuListLocalName = 'favMenuList';
const [ favMenuListLocal ] = JSON.parse(localStorage.getItem(favMenuListLocalName));
const { favName, favList } = favMenuListLocal;
const savedFavListElem = document.querySelector('.js-savedFavList');
//js-savedFavList

function paintFavList(books, favMenuList) {
  console.dir(books);

  const html = books.map((book, i) => {
    return `
        <li>
          <label for="item${i}">${book.author}</label>
        </li>
      `;
  }).join('');
  favMenuList.innerHTML = html;
}

console.log(favName ,favList);

paintFavList(favList, savedFavListElem);
