const db = require('../connect');

module.exports = {
    getProduct: (callback) => {
        db.query('SELECT * FROM product', (err, response) => {
            callback(err, response);
        })
    },

    getProductBy: (type) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT * FROM product WHERE type LIKE '%${type}%'`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        })
    },

    createProduct: (name, type, quantity, branch) => {

        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO product SET name='${name}', type='${type}', quantity='${quantity}', branch='${branch}'`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }

            })
        })
    },

    updateProduct: (id, name, type, quantity, branch) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE product SET name='${name}', type='${type}', quantity='${quantity}', branch='${branch}' WHERE id='${id}'`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }

            })
        })
    },

    deleteProduct: (id) => {
        return new Promise((resolve, reject) => {
            db.query(`DELETE FROM product WHERE id=${id}`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }

            })
        })
    }

}