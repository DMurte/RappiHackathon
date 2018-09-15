const db = require('../../../config/db')
const Sequelize = require('sequelize');


const Model = { 
    storekeepers : db.define('storekeepers',{
        id : {
            type : Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement : true
        },
        storekeeper_id : {
            type : Sequelize.INTEGER
        },
        lat : {
            type: Sequelize.NUMERIC
        },
        lng : {
            type: Sequelize.NUMERIC
        },
        timestamp : {
            type: Sequelize.DATE
        },
        toolkit :{
            type: Sequelize.JSONB
        }
        },
        {
            freezeTableName: true,
            timestamps: false
        })
}

module.exports =  Model;