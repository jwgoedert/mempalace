require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();
console.log("PORT", port);
console.log("INSIDE SERVER");
app.get('/', (req, res) => {
  res.send('hello my planet, here I come!');
});

app.listen(port, (err) => err ? console.log(err) : console.log(`listening on ${port}.`));
console.log("FINISHED SERVER");