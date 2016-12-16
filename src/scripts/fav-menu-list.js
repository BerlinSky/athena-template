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

  if (favList.length > 0) {
    localStorage.setItem('favMenuList', JSON.stringify(favList));
  }
}

favListForm.addEventListener('submit', saveFavList);
favMenuList.addEventListener('click', markFavItem);

export default function activateFavMenuList() {
  paintFavList(books, favMenuList);
  favListForm.addEventListener('submit', saveFavList);
  favMenuList.addEventListener('click', markFavItem);
}
// my fav memu list - End
