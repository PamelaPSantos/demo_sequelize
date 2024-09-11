const Sequelize = require('sequelize');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: process.env.DB,
    host: process.env.HOST_NAME,
    port: process.env.PORT
}) 

module.exports = sequelize