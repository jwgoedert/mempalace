let cards = [];
console.log('INSIDE SERVER');
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const dbUrl = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds161950.mlab.com:61950/mempalace`;
const port = process.env.PORT || 3000;
const app = express();
let db;

MongoClient.connect(dbUrl, (err, database) => {
  if (err) return console.log(err);
  db = database;
  app.listen(port, () => console.log(`listening on ${port}.`));
});

app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', (req, res) => res.sendFile(__dirname + '/public/index.html'));

app.post('/poa', (req, res) => {
  db.collection('poa').save(req.body, (err, result) =>
    err ? console.log(err) : res.redirect('/'));
});

app.get('/', (req, res) => {
  let cursor = db.collection('poa').find().toArray(function (err, results) {
    console.log(results);
  });
});

console.log('FINISHED SERVER');