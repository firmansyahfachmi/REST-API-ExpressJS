const express = require('express');
const Route = express.Router();

const appControl = require('../controllers/cloth');

Route
    .get('/', appControl.getProduct)
    .get('/type', appControl.getProductBy)
    .post('/', appControl.createProduct)
    .patch('/update/:id', appControl.updateProduct)
    .delete('/delete/:id', appControl.deleteProduct)

module.exports = Route;