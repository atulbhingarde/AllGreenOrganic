// set the  MyDebug to true in case you want to debug the api here 
// you can use it like "MyDebug && console.log("your Message")" without quotes 
// and set the MyDebug is true
MyDebug = false;
// productList.js is route for managing the products table - updates, add, delete of products and content.
// Requiring our models
const db = require('../models');

module.exports = function(app) {

  // GET route for retrieving all suppliers
  app.get('/api/products', function(req, res) {


    db.products.findAll({
      }).then(function(products) {
      res.json(products);
      MyDebug &&  console.log(products);

    }).catch(function(error) {
      res.json({ error: error });
    });
  });
};