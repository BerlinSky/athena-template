// import $ from 'jquery';
import activateSearchForm from './search-form';
import activateMobileMenu from './mobile-menu';

activateSearchForm();
activateMobileMenu();

// $(function () {

// });


// my fav memu list

import booklist from './booklist';

const books = [];
books.push(...booklist);

const favListForm = document.querySelector('.js-favListForm');
const favMenuList = document.querySelector('.js-favMenuList');

function paintFavList(books, favMenuList) {
  const html = books.map((book, i) => {
    return `
        <li>
          <input type="checkbox" data-index=${i} id="item${i}" ${book.isFav ? 'checked' : ''} />
          <label for="item${i}">${book.author}</label>
        </li>
      `;
  }).join('');
  favMenuList.innerHTML = html;
}

function saveFavList(e) {
  e.preventDefault();

  console.log("save list");
}

paintFavList(books, favMenuList);

favListForm.addEventListener('submit', saveFavList);

// my fav memu list - End










