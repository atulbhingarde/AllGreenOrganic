
MyDebug = false;
// Requiring our models
const db = require('../models');

module.exports = function(app) {

  // GET route for retrieving all suppliers
  app.get('/api/suppliers', function(req, res) {


    db.suppliers.findAll({
      }).then(function(farmers) {
      res.json(farmers);
      MyDebug && console.log(farmers);

    }).catch(function(error) {
      res.json({ error: error });
    });
  });
 
  // GET route for retrieving all customers
  app.get('/api/customers', function(req, res) {

    db.customers.findAll({
      }).then(function(customers) {
      res.json(customers);
      MyDebug && console.log(customers);

    }).catch(function(error) {
      res.json({ error: error });
    });
  });


  // below is sample 

  // PUT route for updating suppliers (to be modified )
  // app.put('/api/suppliers/:id', function(req, res) {
  //   console.log(req.body);
  //   console.log(req.params.id);
  //   db.products.update(
  //     {stock_quantity: req.body.stock_quantity},
     
  //     {
  //       where: {
  //         id: req.params.id
  //       }
  //   }).then(function(qtyUpdate) {
  //     console.log('Hello there' , qtyUpdate);
  //     res.json(qtyUpdate);
  //   }).catch(function(error) {
  //     console.log('error side', error);
  //     res.json({ error: error });
  //   });
  // });
};