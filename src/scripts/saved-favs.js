const favMenuListLocalName = 'favMenuList';
const [ favMenuListLocal ] = JSON.parse(localStorage.getItem(favMenuListLocalName));
const { favName, favList } = favMenuListLocal;
const savedFavListElem = document.querySelector('.js-savedFavList');
const savedFavListLabel = document.querySelector('.js-savedFavListName');

function paintFavList(books, favMenuListElem) {
  const html = books.map((book, i) => {
    return `
        <li>
          <label for="item${i}">${book.author}</label>
        </li>
      `;
  }).join('');
  favMenuListElem.innerHTML = html;
}

export default function activateSavedMenuFavList() {
  savedFavListLabel.innerHTML = favName;
  paintFavList(favList, savedFavListElem);
}
