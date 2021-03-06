require('dotenv').config();
require('./models');
const express = require('express');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

// Replace with your mongoLab URI
if (!process.env.MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_URI);
mongoose.connection
  /* eslint-disable-next-line no-console */
  .once('open', () => console.info('Connected to MongoLab instance.'))
  /* eslint-disable-next-line no-console */
  .on('error', (error) => console.info('Error connecting to MongoLab:', error));

app.use(bodyParser.json());
app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true,
  })
);

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
