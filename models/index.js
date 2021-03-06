"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";  // this needs adjustment for final production environment.
var config = require(__dirname + "./../config/config.json")[env]; // this needs to be adjusted to proper locations/configuratiosn adn MYSQL password etc.
var db = {};
// console.log("here " + env);
// console.log("here again "+process.env.JAWS_DB);
// console.log("this is it " + config.use_env_variable);
//if (config.use_env_variable){
if ( ( config.use_env_variable !== null ) && ( env !== "development" ) ) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
  // console.log('This environment is ' + env + " " + process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
