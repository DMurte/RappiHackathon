require('dotenv').config()
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const connection = new Sequelize('storekeepersdb', 'hackathonpostgres', 'hackathon2018rappipsql', { 
    dialect: 'postgres',
    host: 'postgres-hackathon.eastus2.cloudapp.azure.com',
    operatorsAliases: Op
});

module.exports = connection;

