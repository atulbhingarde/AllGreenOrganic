

module.exports = function(connection, Sequelize) {
    const customers = connection.define('customers', {
      item_id: Sequelize.INTEGER,
      customer_name: Sequelize.STRING,
      customer_address: Sequelize.STRING,
      phone_number: Sequelize.STRING   
    });
  
    return customers;
  };