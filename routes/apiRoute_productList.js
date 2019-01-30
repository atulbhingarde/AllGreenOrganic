// productList.js is route for managing the products table - updates, add, delete of products and content.
// Requiring our models
const db = require('../models');

module.exports = function(app) {

  // GET route for retrieving all suppliers
  app.get('/api/products', function(req, res) {


    db.products.findAll({
      }).then(function(products) {
      res.json(products);
      console.log(products);
      // alert(products[0]);
    }).catch(function(error) {
      res.json({ error: error });
    });
  });
}