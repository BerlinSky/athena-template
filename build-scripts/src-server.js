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

app.use('/static', express.static(path.join(__dirname, '../public')));
// app.use('static', express.static(path.join(__dirname, '../src')));

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

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});