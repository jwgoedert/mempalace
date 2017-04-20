console.log('INSIDE SERVER');
require('dotenv').config();

const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');
// const Decks = require('Decks');

const MongoClient = mongodb.MongoClient;

const app = express();

const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds161950.mlab.com:61950/mempalace`;

const port = process.env.PORT || 3000;
app.set('port', port);

app.use(express.static(path.join(__dirname, 'public')));
let db;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
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

app.get('/completeddecks', (req, res) => {
  let cursor = db.collection('completeddecks').find().toArray(function (err, results) {
    if (err) {
      console.log('not working because of:', err);
    } else {
      console.log(results);
      res.send(results);
    }
  });
});
// app.get('/deckCreator', (req, res) => {
//   console.log('Hello World');
//   res.send('worked! is this really working?');
// });

// POST HANDLING
app.post('/poa', (req, res) => {
  console.log("POSTINGPOA", req.body);
  db.collection('poa').save(req.body, (err, result) =>
    err ? console.log(err) : res.redirect('/#/deckCreator'));
});

app.post('/completeddecks', (req, res) => {
  console.log("POSTINGCOMPLETED", req.body);
  // let data = req.body['fullDeck'] = fullDeck;
  db.collection('completeddecks').save(req.body, (err, result) =>
    err ? console.log(err) : res.redirect('/#/deckCreator'));
});


app.post('/memdata', (req, res) => {
  console.log("POSTINGMEMDATA", req.body);
  db.collection('memdata').save(req.body, (err, result) =>
    err ? console.log(err) : res.redirect('/#/decks'));
});
// // DELETE HANDLING
// app.delete('/poa/clear', (req, res) => {
//   console.log(req.body);
//   db.collection('poa').findOne(_id:req.params.id)
//   res.send('DELETE request to homepage');
// });
app.delete('/poa/clear', (req, res) => {
  // db.collection('poa').drop( , (err, doc) => 
  db.collection('poa').drop();
  res.redirect('/#/deckCreator');
  res.send('DELETE request to homepage');
});

app.delete('/poa/:id', (req, res) => {
  let id = req.params.id;
  console.log(id);
  db.collection('poa').remove({ _id: new mongodb.ObjectID(id) }, (err, doc) =>
    err ? console.log(err) : res.redirect('/#/deckCreator'));
});

module.exports = app;
console.log('FINISHED SERVER');
