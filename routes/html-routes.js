const MyDebug = false;
const path = require("path");

// if we keep index.html in public folder we redirect to the subdirectory
module.exports = function(app) {
  // If no matching route is found default to index
  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  app.get('/products', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/products.html'));
  });
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
};
