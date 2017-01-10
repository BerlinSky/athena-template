import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3010;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/menus', function(req, res) {
   res.json([
    {"id": 1, "name":"Books", "description":"A list of books", "link":"http://google.com"},
    {"id": 2, "name":"Authors", "description":"A list of authors", "link":"http://google.com"},
    {"id": 3, "name":"Clubs", "description":"A list of clubs", "link":"http://google.com"}
  ])
});

app.get('/menus2', function(req, res) {
  res.json([
    {"id": 1, "name":"Books2", "description":"A list of books", "link":"http://google.com"},
    {"id": 2, "name":"Author2", "description":"A list of authors", "link":"http://google.com"},
    {"id": 3, "name":"Club2", "description":"A list of clubs", "link":"http://google.com"},
    {"id": 4, "name":"Books2", "description":"A list of books", "link":"http://google.com"},
    {"id": 5, "name":"Author2", "description":"A list of authors", "link":"http://google.com"},
    {"id": 6, "name":"Club2", "description":"A list of clubs", "link":"http://google.com"},
    {"id": 7, "name":"Books2", "description":"A list of books", "link":"http://google.com"},
    {"id": 8, "name":"Author2", "description":"A list of authors", "link":"http://google.com"},
    {"id": 9, "name":"Club2", "description":"A list of clubs", "link":"http://google.com"}
  ])
});

app.get('/books', function(req, res) {
  res.json([
    { title: 'Pride and Prejudice', author: 'Jane Austen', id: 1001 },
    { title: 'Little Women', author: 'Louisa May Alcott', id: 1002 },
    { title: 'The Secret Garden', author: 'Frances Hodgson Burnett', id: 1003 }
  ])
});

app.get('/authors', function(req, res) {
  res.json([
    { name: 'Jane Austen', twitter: '@jauten', bio: 'British literary icon' },
    { name: 'Louisa May Alcott', twitter: '@l.m.alcott', bio: 'The famouts author for classic children books' },
    { name: 'Frances Hodgson Burnett', twitter: '@fhburnett', bio: 'The author for the secret garden' }
  ])
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});