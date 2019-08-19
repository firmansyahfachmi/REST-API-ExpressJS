const appModel = require("../models/model");

module.exports = {
  getProduct: (req, res) => {
    appModel.getProduct((err, response) => {
      const formResponse = {
        status: 200,
        data: response
      };
      if (err) {
        console.log(err);
      } else {
        res.json(formResponse);
      }
    });
  },

  getProductBy: (req, res) => {
    const type = req.params.type;

    appModel
      .getProductBy(type)
      .then(response => {
        const formResponse = {
          status: 200,
          data: response
        };
        res.json(formResponse);
      })

      .catch(err => {
        console.log(err);
      });
  },

  createProduct: (req, res) => {
    const name = req.body.name;
    const type = req.body.type;
    const quantity = req.body.quantity;
    const branch = req.body.branch;

    appModel
      .createProduct(name, type, quantity, branch)

      .then(response => {
        const formResponse = {
          status: 200,
          data: response
        };
        res.json(formResponse);
      })

      .catch(err => {
        console.log(err);
      });
  },

  updateProduct: (req, res) => {
    const id = req.params.id;

    const name = req.body.name;
    const type = req.body.type;
    const quantity = req.body.quantity;
    const branch = req.body.branch;

    appModel
      .updateProduct(id, name, type, quantity, branch)

      .then(response => {
        const formResponse = {
          status: 200,
          data: response
        };
        res.json(formResponse);
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
        const formResponse = {
          status: 200,
          data: response
        };
        res.json(formResponse);
      })

      .catch(err => {
        console.log(err);
      });
  }
};
