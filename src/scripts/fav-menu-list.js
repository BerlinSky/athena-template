// my fav memu list
import booklist from './booklist';

const books = [];
books.push(...booklist);

const favListForm = document.querySelector('.js-favListForm');
const favMenuList = document.querySelector('.js-favMenuList');
const favMenuListLocalName = 'favMenuList';

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

function markFavItem(e) {
  const et = e.target;
  if (!et.matches('input')) return;

  const index = et.dataset.index;
  books[index].isFav = !books[index].isFav;
}

function saveFavList(e) {
  e.preventDefault();

  const favList = [];
  books.map((book) => {
    if (book.isFav) {
      favList.push(book);
    }
  })

  const favName = (this.querySelector('.js-favListForm_listName')).value;
  const itemToSave = {
    favName,
    favList
  };

  const favMenuListSaved = [];
  favMenuListSaved.push(itemToSave);
  if (favList.length > 0) {
    localStorage.setItem(favMenuListLocalName, JSON.stringify(favMenuListSaved));
  }
}


function readFavList(favMenuListName) {
  return JSON.parse(localStorage.getItem(favMenuListName));
}

favListForm.addEventListener('submit', saveFavList);
favMenuList.addEventListener('click', markFavItem);

export default function activateFavMenuList() {
  readFavList(favMenuListLocalName);
  paintFavList(books, favMenuList);
  favListForm.addEventListener('submit', saveFavList);
  favMenuList.addEventListener('click', markFavItem);
}

// my fav memu list - End
