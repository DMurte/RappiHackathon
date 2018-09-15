const async = require('es5-async-await/async');
const await = require('es5-async-await/await');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Model = require('../models/storekeepers');


var request= {};

request.getStorekeepers = async ((data) => {
    return new Promise( (resolve , reject ) => {
        const storekeepers = await ( Model.storekeepers.findAll());        
        resolve(storekeepers);

    });
});



module.exports = request;
