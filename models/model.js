const db = require('../connect');

module.exports = {
    getProduct: (data) => {
        return new Promise((resolve, reject) => {
            const page = (data.page * data.limit) - data.limit;
            db.query(`SELECT * FROM product  LIMIT ${page},${data.limit}`, (err, response) => {
                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        })
    },

    getProductBy: (data) => {
        return new Promise((resolve, reject) => {
            const page = (data.page * data.limit) - data.limit;
            db.query(`SELECT * FROM product WHERE type LIKE '%${data.type}%' LIMIT ${page},${data.limit}`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }
            })
        })
    },

    createProduct: (data) => {

        return new Promise((resolve, reject) => {
            db.query(`INSERT INTO product SET name='${data.name}', type='${data.type}', quantity='${data.quantity}', branch='${data.branch}'`, (err, response) => {

                if (!err) {
                    resolve(response);
                } else {
                    reject(err);
                }

            })
        })
    },

    updateProduct: (data, id) => {
        return new Promise((resolve, reject) => {
            db.query(`UPDATE product SET ? WHERE id='${id}'`, [data], (err, response) => {

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