const Sequelize = require("sequelize");

const sequelize = new Sequelize("node-complete", "root", "Truc@2022", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
