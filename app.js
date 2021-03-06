const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./routers/moviesRouter');
const db = require('./models');

const PORT = process.env.PORT || 3000;
const app = express();

function main() {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // CORS
  app.use((req, res, next) => {
    res.header({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, DELETE',
      'Access-Control-Allow-Headers': 'Content-Type, Accepts',
    });
    next();
  })
  
  app.use('/movies', moviesRouter);
  
  app.use(express.static('public'));
  
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));
}

db.syncPromise()
  .then(() => console.log('DB setup'))
  .then(main)
  .catch(err => { throw err });