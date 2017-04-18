console.log("INSIDE SERVER");
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/poa', (req, res) => {
  console.log("QUOTES GOT HIT", req.body);

});

app.listen(port, (err) => err ? console.log(err) : console.log(`listening on ${port}.`));
console.log("FINISHED SERVER");