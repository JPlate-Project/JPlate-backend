const path = require('path');
const express = require('express');
const app = express();
const session = require('express-session');
const morgan = require('morgan');
const PORT = process.env.PORT || 4000;
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes');

const createApp = () => {
  //Allow cors
  app.use(cors({
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200
  }));
  // logging middleware
  app.use(morgan('dev'));

  // body parsing middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  //user login sessions
  app.use(
    session({
      secret: 'somebodycomegeeter',
      resave: false,
      saveUninitialized: true,
    })
  );

  app.use(routes);

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // sends index.html
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  // start listening (and create a 'server' object representing our server)
  const server = app.listen(PORT, () =>
    console.log(`Mixing it up on port ${PORT}`)
  );
};

async function bootApp() {
  await createApp();
  await startListening();
}

if (require.main === module) {
  bootApp();
} else {
  createApp();
}
