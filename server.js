const express = require('express');
const app = express();
const careers = require('./career-filtered.json');
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send("I dream of being a website");
});

app.get('/careers', (req, res) => {
  res.send(careers);
});

app.listen(80, () => console.log('Gator app listening on port 80!'));