console.log('INSIDE SERVER');
require('dotenv').config();

const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();

const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds161950.mlab.com:61950/mempalace`;
mongoose.connect(dbUrl);

const port = process.env.PORT || 3000;
app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));
let db;

app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

MongoClient.connect(dbUrl, (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(port, () => console.log(`listening on ${port}.`));
});


app.get('/', (req, res) => {
  let cursor = db.collection('poa').find().toArray(function (err, results) {
    if (err) {
      console.log('not working because of:', err);
    } else {
      console.log(results);
      res.sendFile(__dirname + '/public/index.html');
    }
  });
});

app.get('/deckCreator', (req, res) => {
  let cursor = db.collection('poa').find().toArray(function (err, results) {
    if (err) {
      console.log('not working because of:', err);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});

app.get('/deckCreator', (req, res) => {
  console.log('Hello World');
  res.send('worked! is this really working?');
});

// POST HANDLING
app.post('/poa', (req, res) => {
  db.collection('poa').save(req.body, (err, result) =>
    err ? console.log(err) : res.redirect('/'));
});
module.exports = app;
console.log('FINISHED SERVER');