

module.exports = function(connection, Sequelize) {
    const suppliers = connection.define('suppliers', {
      farmers_name: Sequelize.STRING,
      farmers_address: Sequelize.STRING,
      phone_number: Sequelize.STRING,
      hours_operation: Sequelize.STRING,
      rating: Sequelize.FLOAT    
    });
  
    return suppliers;
  };