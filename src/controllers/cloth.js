const appModel = require("../models/cloth");
const helper = require("../helpers/formRespon");

module.exports = {
  getProduct: (req, res) => {
    const data = {
      page: req.query.page || 1,
      limit: req.query.limit || 2
    }

    appModel.getProduct(data)
      .then(response => {
        helper.success(res, 200, response);
      })

      .catch(err => {
        console.log(err);
      });

  },

  getProductBy: (req, res) => {
    const data = {
      type: req.query.type,
      page: req.query.page || 1,
      limit: req.query.limit || 2
    }

    appModel
      .getProductBy(data)
      .then(response => {
        helper.success(res, 200, response);
      })

      .catch(err => {
        console.log(err);
      });
  },

  createProduct: (req, res) => {
    const data = {
      name: req.body.name,
      type: req.body.type,
      quantity: req.body.quantity,
      branch: req.body.branch
    }
    appModel
      .createProduct(data)

      .then(response => {
        helper.success(res, 200, response);
      })

      .catch(err => {
        console.log(err);
      });
  },

  updateProduct: (req, res) => {
    id = req.params.id;
    const data = req.body

    appModel
      .updateProduct(data, id)

      .then(response => {
        helper.success(res, 200, response);
      })

      .catch(err => {
        console.log(err);
      });
  },

  deleteProduct: (req, res) => {
    const id = req.params.id;

    appModel
      .deleteProduct(id)

      .then(response => {
        helper.success(res, 200, response);
      })

      .catch(err => {
        console.log(err);
      });
  }
};