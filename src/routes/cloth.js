const express = require('express');
const Route = express.Router();

const appControl = require('../controllers/cloth');

Route
    .get('/', appControl.getProduct)
    .get('/search/', appControl.getProductBy)
    .post('/', appControl.createProduct)
    .patch('/:id', appControl.updateProduct)
    .delete('/:id', appControl.deleteProduct)

module.exports = Route;