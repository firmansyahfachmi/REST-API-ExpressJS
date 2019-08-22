const appModel = require("../models/cloth");
const helper = require("../helpers/formRespon");

module.exports = {
  getProduct: (req, res) => {
    const data = {
      page: req.query.page || 1,
      limit: req.query.limit || 10
    }

    appModel.getProduct(data)
      .then(response => {
        helper.result(res, 200, response);
      })

      .catch(err => {
        helper.result(res, 404, err);
      });

  },


  getProductBy: (req, res) => {
    const quer = Object.keys(req.query);
    let key = req.query[quer];

    const data = {
      query: quer,
      queryKey: key,
      page: req.query.page || 1,
      limit: req.query.limit || 10
    }

    appModel
      .getProductBy(data)
      .then(response => {
        helper.result(res, 200, response);
      })

      .catch(err => {
        helper.result(res, 404, err);
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
        helper.result(res, 200, response);
      })

      .catch(err => {
        helper.result(res, 404, err);
      });
  },

  updateProduct: (req, res) => {
    id = req.params.id;
    const data = req.body

    appModel
      .updateProduct(data, id)

      .then(response => {
        helper.result(res, 200, response);
      })

      .catch(err => {
        helper.result(res, 404, err);
      });
  },

  deleteProduct: (req, res) => {
    const id = req.params.id;

    appModel
      .deleteProduct(id)

      .then(response => {
        helper.result(res, 200, response);
      })

      .catch(err => {
        helper.result(res, 404, err);
      });
  }
};