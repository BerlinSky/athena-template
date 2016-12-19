// my fav memu list
import booklist from './booklist';

const books = [];
books.push(...booklist);

const favListForm = document.querySelector('.js-favListForm');
const favMenuList = document.querySelector('.js-favMenuList');
const searchInput = document.querySelector('.js-searchInput');

const favMenuListLocalName = 'favMenuList';

function searchMatches(keyWords) {
  return books.filter(book => {
    const regex = new RegExp(keyWords, 'gi');
    return book.author.match(regex) || book.title.match(regex);
  });
}

function paintFavList() {
  const matchArray = searchMatches(this.value);

  const html = matchArray.map((book, i) => {
    const regex = new RegExp(this.value, 'gi');
    const author = book.author.replace(regex, `<span class="highlight">${this.value}</span>`);
    return `
      <li>
        <input type="checkbox" data-index=${i} id="item${i}" ${book.isFav ? 'checked' : ''} />
        <label for="item${i}">${author}</label>
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

export default function activateFavMenuList() {
  searchInput.addEventListener('change', paintFavList);
  searchInput.addEventListener('keyup', paintFavList);

  favListForm.addEventListener('submit', saveFavList);
  favMenuList.addEventListener('click', markFavItem);
}

// my fav memu list - End
