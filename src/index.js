import './sass/main.scss';
import $ from 'jquery';

import {getMenus} from './services/data-service';

/* eslint-disable no-console */

$(function() {
  console.log("bundle works just fine.");
});

getMenus().then(result => {
  let menuList = "";

  result.forEach(menu => {
    menuList+= `
    <li>
      <div>${menu.id}</div>
      <div>${menu.name}</div>
      <div>${menu.description}</div>
      <div>${menu.link}</div>
    </li>
    `
  });

  global.document.getElementById('menus').innerHTML = menuList;
});