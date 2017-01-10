import './sass/main.scss';

/* eslint-disable no-console */

/*
// Consume Promise:
*/
const menuListPromise = fetch('http://localhost:3010/menus');
menuListPromise
  .then(data => data.json())
  .then(data => { console.log(data) })
  .catch((err) => {
    console.error(err);
  })

/*
// Create Promise:
*/
const promised = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('The data requested.');
    reject(Error('Err occured, unfortunately'));
  }, 1000);
});

promised
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.error(err);
  });

/*
// Handle multiple Promises
// Note: it waits for the longest-running response.
*/
const menuUrl = 'http://localhost:3010/menus';
const menu2Url = 'http://localhost:3010/menus2';

const menuPromise = fetch(menuUrl);
const menu2Promise = fetch(menu2Url);

Promise
  .all([menuPromise, menu2Promise])
  .then(responses => {
    return Promise.all(responses.map(res => res.json()))
  })
  .then(responses => {
    console.log(responses);

    console.table(responses[0]);
    console.table(responses[1]);
  });

/*
// How to chain Promises
*/ 
function getBookById(bookId) {
  return new Promise((resolve, reject) => {
    const bookUrl = 'http://localhost:3010/books';

    setTimeout(() => {
      const booksPromise = fetch(bookUrl);

      booksPromise
        .then(data => data.json())
        .then(data => {
          const book = data.find(book => book.id === bookId);
          console.log(book);
          if (book) {
            resolve(book);
          }
          else {
            reject(Error("No books are found."));
          }
        })
    }, 1000);

  })
}

function getAuthorForBook(book) {
  return new Promise((resolve, reject) => {
    const authorUrl = 'http://localhost:3010/authors';
    
    setTimeout(() => {
      const authorPromise = fetch(authorUrl);

      authorPromise
        .then(data => data.json())
        .then(data => {
          const author = data.find(author => author.name === book.author);
          if (author) {
            book.author = author;
            resolve(book);
          }
          else {
            reject(Error('No authors are found'));
          }
        })
    } ,500)
  })
}

getBookById(1001)
  .then(book => {
    return getAuthorForBook(book);
  })
  .then(author => {
    console.log(author);
  })
  .catch(err => {
    console.error(err);
  })