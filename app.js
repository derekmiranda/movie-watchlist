const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./routers/moviesRouter');
const db = require('./models');

db.syncPromise()
  .then(() => console.log('DB synced'))
  .catch((err) => { throw err; });

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/movies', moviesRouter);

app.use(express.static('public'));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));