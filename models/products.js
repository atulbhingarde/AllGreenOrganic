

module.exports = function(connection, Sequelize) {
    const products = connection.define('products', {
      product_name: Sequelize.STRING,
      market_id: Sequelize.INTEGER,
      price: Sequelize.FLOAT,
      unit: Sequelize.STRING   
    });
  
    return products;
  };