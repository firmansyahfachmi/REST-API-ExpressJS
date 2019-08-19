const express = require('express');
const Route = express.Router();

const appControl = require('../controllers/controller');

Route
    .get('/cloth', appControl.getProduct)
    .get('/cloth/:type', appControl.getProductBy)
    .post('/cloth', appControl.createProduct)
    .patch('/cloth/:id', appControl.updateProduct)
    .delete('/cloth/:id', appControl.deleteProduct)

module.exports = Route;