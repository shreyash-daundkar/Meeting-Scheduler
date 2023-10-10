const Sequelize = require('sequelize');
const database  = require('../util/database');

module.exports = database.define('slot', {
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement: true,
        primaryKey : true,
    },
    time : {
        type: Sequelize.STRING,
        allowNull : false,
    }
});