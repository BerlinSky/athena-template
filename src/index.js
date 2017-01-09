import './sass/main.scss';

/* eslint-disable no-console */

const menuListPromise = fetch('http://localhost:3010/menus');
// console.log(menuListPromise);

menuListPromise
  .then(data => data.json())
  .then(data => { console.log(data) })
  .catch((err) => {
    console.error(err);
  })

