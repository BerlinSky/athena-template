const savedFavListElem = document.querySelector('.js-savedFavList');
const savedFavListLabel = document.querySelector('.js-savedFavListName');

function paintFavList(favMenuListElem) {
  const favMenuListLocalName = 'favMenuList';
  const [ favMenuListLocal ] = JSON.parse(localStorage.getItem(favMenuListLocalName));
  const { favName, favList: books } = favMenuListLocal;
  const html = books.map((book, i) => {
    return `
        <li class='searchResultList'>
          <label for="item${i}">${book.author}</label>
        </li>
      `;
  }).join('');
  favMenuListElem.innerHTML = html;
  savedFavListLabel.innerHTML = favName;
}

export default function activateSavedMenuFavList() {
  paintFavList(savedFavListElem);
}
