// search form
import booklist from './booklist';

const books = [];
books.push(...booklist);

function searchMatches(keyWords) {
  return books.filter(book => {
    const regex = new RegExp(keyWords, 'gi');
    return book.author.match(regex) || book.title.match(regex);
  });
}

function displaySearchResults() {
  const matchArray = searchMatches(this.value);

  const html = matchArray.map(book => {
    const regex = new RegExp(this.value, 'gi');
    const author = book.author.replace(regex, `<span class="highlight">${this.value}</span>`);
    // const title = book.title.replace(regex, `<span class="highlight">${this.value}</span>`);
    return `
      <li>
        <div class="name">${author}</div>
      </li>
    `;
  }).join('');
  results.innerHTML = html;
}

const searchInput = document.querySelector('.js-searchInput');
const results = document.querySelector('.js-results');

export default function activateSearchForm() {
  searchInput.addEventListener('change', displaySearchResults);
  searchInput.addEventListener('keyup', displaySearchResults);
}

// search form - end
