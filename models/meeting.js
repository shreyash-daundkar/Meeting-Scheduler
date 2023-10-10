const Sequelize = require('sequelize');
const database  = require('../util/database');

module.exports = database.define('meeting', {
    id : {
        type : Sequelize.INTEGER,
        allowNull : false,
        autoIncrement: true,
        primaryKey : true,
    },
    name :{
        type : Sequelize.STRING,
        allowNull : false,
    },
    email : {
        type : Sequelize.STRING,
        allowNull : false,
    }
});