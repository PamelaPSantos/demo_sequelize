const Sequelize = require('sequelize');
const database = require('./db');

const Produto = database.define('produto', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    preco: {
        type: Sequelize.DECIMAL(10,2),
        descricao: Sequelize.STRING,
    }
})

module.exports = Produto