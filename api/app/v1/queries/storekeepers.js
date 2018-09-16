const async = require('es5-async-await/async');
const await = require('es5-async-await/await');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Model = require('../models/storekeepers');


var request= {};

request.getStorekeepers = async ((data) => {
    return new Promise( (resolve , reject ) => {
        const north = data.north
        const south = data.south
        const east = data.east
        const west = data.west

        const storekeepers = await ( Model.storekeepers.findAll({ 
            where : {
                lat : {
                    [Op.lte]: north,
                    [Op.gte]: south
                },
                lng : {
                    [Op.between]: [east, west ]
                }

                },
                attributes : ['lat', 'lng', 'toolkit']
            }
        ));    

        console.log(typeof west, typeof east, typeof north, typeof south) 
        console.log(typeof data.west, typeof data.east, typeof data.north, typeof data.south) 

        resolve(storekeepers);


    });
});

// where : {
//     lat : {
//         [Op.lte]: data.north,
//         [Op.gte]: data.south
//     },
//     lng : {
//         [Op.between]: [ data.west, data.east]
//     }

//     },

request.getStorekeepersByVehicle = async ((data) => {
    return new Promise( (resolve , reject ) => {
        let filteredStorekeepers = [];
        const storekeepers = await ( Model.storekeepers.findAll()); 

        storekeepers.forEach(e => {
            if(e.toolkit.vehicle == data.type) filteredStorekeepers.push(e);
            
        });

        resolve(filteredStorekeepers);

    });
});




module.exports = request;
