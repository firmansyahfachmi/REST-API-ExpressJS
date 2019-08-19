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
    const data = {
      type: req.query.type,
      page : req.query.page || 1,
      limit :  req.query.limit || 2
    }

    appModel
      .getProductBy(data)
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
    const data = {
      name: req.body.name,
      type : req.body.type,
      quantity : req.body.quantity,
      branch : req.body.branch
    }
    appModel
      .createProduct(data)

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
    id = req.params.id;
    const data = {
      
      name : req.body.name,
      type : req.body.type,
      quantity : req.body.quantity,
      branch : req.body.branch
    }

    appModel
      .updateProduct(data, id)

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
