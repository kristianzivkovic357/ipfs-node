'use strict';

require('dotenv').config();

const http = require('http');
const express = require('express');
const routes = require('./routes');
const { PORT } = process.env;

const app = express();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', routes);
app.disable('x-powered-by');

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Listening on ${PORT}`));
