const routes = require('express').Router();

const menu = require('./menu');

routes.get('/', (req, res) => {
  return res.json(menu);
});

module.exports = routes;