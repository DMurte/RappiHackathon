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

request.getStorekeepersByVehicle = async ((data) => {
    return new Promise( (resolve , reject ) => {
        let filteredStorekeepers = [];
        const storekeepers = await ( Model.storekeepers.findAll()); 

        storekeepers.forEach(e => {
            if(e.toolkit.vehicle == data.type){
                filteredStorekeepers.push(e);
            }
        });

        resolve(filteredStorekeepers);

    });
});




module.exports = request;
