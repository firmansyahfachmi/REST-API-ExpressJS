const express = require('express');
const route = express.Router();

const cloth = require('../routes/cloth');

route.use('/cloth', cloth);

module.exports = route;