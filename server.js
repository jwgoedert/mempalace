const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const port = 3000; // change to be .env ready

const index = require('./routes/index');

const app = express();

// app.use(express.static(path.join(__dirname, 'client')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', index);
app.get('/', (req, res) => res.send('hello world!'));
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`serving starting at port ${port}.`);
});
