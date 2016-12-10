import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3010;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/menus', function(req, res) {
   res.json([
    {"id": 1, "name":"Books", "description":"A list of books", "link":"http://google.com"},
    {"id": 2, "name":"Authors", "description":"A list of authors", "link":"http://google.com"},
    {"id": 3, "name":"Clubs", "description":"A list of clubs", "link":"http://google.com"}
  ])
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});